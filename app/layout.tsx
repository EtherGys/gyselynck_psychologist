import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/navbar/Nav";
import Footer from "@/components/layout/footer/Footer";
import BackToTop from "@/components/layout/button/BackToTop";
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eléonore Gyselynck, psychologue clinicienne agréée",
  description: "Consultations à Overijse et en ligne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-7N2MZD1ML6" />
      <body className="">
        <Nav />
        {children}
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
