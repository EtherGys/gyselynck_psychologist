import CardLayout from "@/components/cards/CardLayout";
import GreenCard from "@/components/GreenCard";
import HeroMenu from "@/components/HeroMenu";
import MapLayout from "@/components/maps/MapLayout";
import PresentationText from "@/components/PresentationText";
import JsonLd, { homePageJsonLd } from "@/components/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil",
  description: "Bienvenue chez Eléonore Gyselynck, psychologue clinicienne agréée à Overijse. Consultations psychologiques pour adultes et adolescents. Approche centrée sur la personne et thérapie ACP.",
  keywords: ["psychologue overijse", "consultation psychologique belgique", "thérapie adulte", "psychologue adolescent", "approche centrée personne", "ACP"],
  openGraph: {
    title: "Eléonore Gyselynck - Psychologue clinicienne à Overijse",
    description: "Consultations psychologiques pour adultes et adolescents. Approche centrée sur la personne et thérapie ACP.",
    images: [
      {
        url: '/assets/images/consultation.jpg',
        width: 1200,
        height: 630,
        alt: 'Consultation psychologique avec Eléonore Gyselynck',
      },
    ],
  },
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={homePageJsonLd} />
      <div >
        <HeroMenu />
        <div className="flex flex-col xl:w-[70%] mx-auto">
          <PresentationText />
          <GreenCard href='/consultations' buttonTitle="En savoir plus" whiteTitle="VENIR" greenTitle="EN CONSULTATION" contentp1="Je vous reçois dans le cadre d'une demande de soutien ponctuel ou d'un travail thérapeutique à plus long terme." contentp2="Mon approche, fondée sur le non-jugement et la construction d'une relation de confiance, vous promet un accueil sans distinction d'orientation sexuelle, de genre, d'appartenance religieuse ou culturelle." />
          <CardLayout />
          <div className="mt-14 lg:mt-[300px] xl:mt-[150px]">
          <MapLayout />
          </div>
        </div>
      </div>
    </>
  );
}
