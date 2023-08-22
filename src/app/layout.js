// import './globals.css'
// import './temp.css'
import "./index.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by tejas giri",
};

export default function RootLayout({ children }) {
  //this is root file of the nextjs application
  //all the changes are rendered in this file in the form of html

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
