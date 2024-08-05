import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { poppins } from "@/styles/font";
import Footer from "@/components/Footer";
import NavigationBar from '../components/ui/NavigationBar';


export const metadata = {
  title: 'FYLP: Filipino Youth Leadership Program 2024',
  description: 'The official Filipino Youth Leadership Program 2024 Website.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className={poppins.className}>{children}
      <NavigationBar />
        <Footer />
      </body>
    </html>
  );
}
