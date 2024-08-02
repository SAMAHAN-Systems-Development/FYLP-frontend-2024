import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

async function retrieveSheetsData(type) {
  const scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
  const jwt = new google.auth.JWT(
    process.env.CLIENT_EMAIL,
    undefined,
    process.env.PRIVATE_KEY,
    scopes
  );

  const sheets = google.sheets({ version: 'v4', auth: jwt });
  const sheetId =
    type === 'mentor'
      ? process.env.MENTOR_SPREADSHEET_ID
      : process.env.DELEGATE_SPREADSHEET_ID;
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: process.env.SPREADSHEET_RANGE,
  });

  return response.data.values || [];
}

async function getStatus(email, type) {
  const sheetsData = await retrieveSheetsData(type);

  const emailCol = process.env.EMAIL_COLUMN - 1;
  const statusCol = process.env.STATUS_COLUMN - 1;

  const row = sheetsData.find((row) => row[emailCol] === email);

  if (!row) {
    return null;
  }

  return row[statusCol];
}

async function sendEmail(email, status) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.APP_EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });

    const date = new Date().toLocaleDateString();
    const subject = `FYLP 2024 Application Status - ${date}`;

    const htmlTemplatePath = path.join(
      process.cwd(),
      'src/app/api/check-status/template.html'
    );
    const textTemplatePath = path.join(
      process.cwd(),
      'src/app/api/check-status/template.txt'
    );

    let htmlTemplate = await fs.readFile(htmlTemplatePath, 'utf-8');
    let textTemplate = await fs.readFile(textTemplatePath, 'utf-8');
    const content = {
      email: email,
      status: status,
      date: date,
    };

    for (const item in content) {
      htmlTemplate = htmlTemplate.replaceAll('$' + item, content[item]);
      textTemplate = textTemplate.replaceAll('$' + item, content[item]);
    }

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: subject,
      text: textTemplate,
      html: htmlTemplate,
    };

    await transporter.sendMail(mailOptions);
  } catch (e) {
    console.error(e);
    throw new Error('Something went wrong with sending email.');
  }
}

export async function POST(request) {
  let data = await request.json();

  data.email = data.email ?? '';
  data.type = data.type ?? '';

  const schema = z.object({
    email: z
      .string()
      .min(1, { message: 'Email is required.' })
      .email({ message: 'Invalid email.' }),
    type: z.enum(['mentor', 'delegate'], {
      message: "Invalid type, should be 'mentor' or 'delegate'",
    }),
  });

  try {
    schema.parse(data);
  } catch (e) {
    const message = e.errors.map((error) => error['message']);
    return NextResponse.json({ message: message }, { status: 400 });
  }

  const status = await getStatus(data.email);
  if (!status) {
    return NextResponse.json(
      { message: [`Application with email '${data.email}' not found.`] },
      { status: 400 }
    );
  }

  try {
    await sendEmail(data.email, status);
  } catch (e) {
    return NextResponse.json(
      {
        message: [
          'Something went wrong while sending the email. Please email samahan.sd@addu.edu.ph.',
        ],
      },
      { status: 400 }
    );
  }

  return NextResponse.json(
    {
      message: [`Please check your email: ${data.email}.`],
    },
    { status: 200 }
  );
}

export const config = {
  api: {
    bodyParser: true,
  },
};
