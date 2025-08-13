import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/navbar/Nav";
import Footer from "@/components/layout/footer/Footer";
import BackToTop from "@/components/layout/button/BackToTop";
import { GoogleTagManager } from '@next/third-parties/google'
import { AnalyticsWrapper } from './analytics'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Eléonore Gyselynck | Psychologue clinicienne agréée à Overijse",
    template: "%s | Eléonore Gyselynck - Psychologue"
  },
  description: "Consultations psychologiques à Overijse et en ligne. Psychologue clinicienne agréée spécialisée dans l'accompagnement des adultes et adolescents. Approche centrée sur la personne.",
  keywords: ["psychologue", "overijse", "adolescent", "adulte", "certifié", "consultation psychologique", "thérapie", "accompagnement", "psychologie"],
  authors: [{ name: "Eléonore Gyselynck" }],
  creator: "Eléonore Gyselynck",
  publisher: "Eléonore Gyselynck",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://eleonore-gyselynck-psychologue.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_BE',
    url: 'https://eleonore-gyselynck-psychologue.com',
    title: 'Eléonore Gyselynck | Psychologue clinicienne agréée à Overijse',
    description: 'Consultations psychologiques à Overijse et en ligne. Psychologue clinicienne agréée spécialisée dans l\'accompagnement des adultes et adolescents.',
    siteName: 'Eléonore Gyselynck - Psychologue',
    images: [
      {
        url: '/assets/images/consultation.jpg',
        width: 1200,
        height: 630,
        alt: 'Consultation psychologique avec Eléonore Gyselynck',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eléonore Gyselynck | Psychologue clinicienne agréée à Overijse',
    description: 'Consultations psychologiques à Overijse et en ligne. Psychologue clinicienne agréée spécialisée dans l\'accompagnement des adultes et adolescents.',
    images: ['/assets/images/consultation.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'AFTCKecJ0K8dkJRPUjHe4y_IuE0ESFLFQFDm8W0FQf8',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <GoogleTagManager gtmId="GTM-T4WZLGPH" />
        <Nav />
        {children}
        <BackToTop />
        <Footer />
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
