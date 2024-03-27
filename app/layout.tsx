import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/navbar/Nav";
import Footer from "@/components/layout/footer/Footer";
import BackToTop from "@/components/layout/button/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Éléonore Gyselynck, psychologue clinicienne agréée",
  description: "Consultations à Overijse et en ligne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Nav />
        {children}
        <BackToTop/>
        <Footer/>
      </body>
    </html>
  );
}
