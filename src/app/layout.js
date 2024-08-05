import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { poppins } from "@/styles/font";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'FYLP: Filipino Youth Leadership Program 2024',
  description: 'The official Filipino Youth Leadership Program 2024 Website.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className={inter.className}>{children}
        <Footer />
      </body>
    </html>
  );
}
