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
  let sheetId, sheetRanges;

  if (type === 'delegate') {
    sheetId = process.env.DELEGATE_SPREADSHEET_ID;
    sheetRanges = process.env.DELEGATE_SPREADSHEET_COLUMNS.split(',').map(
      (c) => `${c}:${c}`
    );
  } else {
    sheetId = process.env.MENTOR_SPREADSHEET_ID;
    sheetRanges = process.env.MENTOR_SPREADSHEET_COLUMNS.split(',').map(
      (c) => `${c}:${c}`
    );
  }

  const response = await sheets.spreadsheets.values.batchGet({
    spreadsheetId: sheetId,
    ranges: sheetRanges,
  });

  let rows = [];

  for (let i = 1; i < response.data.valueRanges[0].values.length; i++) {
    let row = [];
    for (const col of response.data.valueRanges) {
      row.push(col.values[i][0]);
    }
    rows.push(row);
  }

  return rows;
}

async function getInformation(email, type) {
  const sheetsData = await retrieveSheetsData(type);

  const nameCol = 0;
  const emailCol = 1;
  const statusCol = 2;

  const row = sheetsData.find((row) => row[emailCol] === email);

  if (!row) {
    return null;
  }

  return [row[nameCol].split(',')[0].trim(), row[statusCol]];
}

function getFilepaths(status, type) {
  let htmlTemplateFile = '';
  let textTemplateFile = '';

  switch (status) {
    case 'Under Review':
      htmlTemplateFile = 'under-review.html';
      textTemplateFile = 'under-review.txt';
      break;
    case 'Accepted':
      htmlTemplateFile = `accepted-${type}.html`;
      textTemplateFile = `accepted-${type}.txt`;
      break;
    case 'Rejected':
      htmlTemplateFile = 'rejected.html';
      textTemplateFile = 'rejected.txt';
      break;
    default:
      htmlTemplateFile = 'under-review.html';
      textTemplateFile = 'under-review.txt';
  }

  const htmlTemplatePath = path.join(
    process.cwd(),
    'src/app/api/check-status/templates',
    htmlTemplateFile
  );
  const textTemplatePath = path.join(
    process.cwd(),
    'src/app/api/check-status/templates',
    textTemplateFile
  );

  return [htmlTemplatePath, textTemplatePath];
}

async function sendEmail(email, status, type, lastName) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  const date = new Date().toLocaleDateString();
  const subject = `FYLP 2024 Application Status - ${date}`;

  const [htmlTemplatePath, textTemplatePath] = getFilepaths(status, type);

  let htmlTemplate = await fs.readFile(htmlTemplatePath, 'utf-8');
  let textTemplate = await fs.readFile(textTemplatePath, 'utf-8');
  const content = {
    email: email,
    lastName: lastName,
    status: status,
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
    attachments: [
      {
        filename: 'Pattern.png',
        path: path.join(
          process.cwd(),
          'src/app/api/check-status/templates/Pattern.png'
        ),
        cid: 'pattern',
      },
    ],
  };

  await transporter.sendMail(mailOptions);
}

export async function POST(request) {
  try {
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

    const result = await getInformation(data.email, data.type);
    let lastName, status;
    if (!result) {
      return NextResponse.json(
        { message: [`Application with email '${data.email}' not found.`] },
        { status: 400 }
      );
    } else {
      [lastName, status] = result;
    }

    try {
      await sendEmail(data.email, status, data.type, lastName);
    } catch (e) {
      console.log('Something went wrong with sending email', e);
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
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      {
        message: [e.message],
      },
      { status: 500 }
    );
  }
}
