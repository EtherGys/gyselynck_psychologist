import CardLayout from "@/components/cards/CardLayout";
import GreenCard from "@/components/GreenCard";
import HeroMenu from "@/components/HeroMenu";
import MapLayout from "@/components/MapLayout";
import PresentationText from "@/components/PresentationText";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <HeroMenu />
      <div className="flex flex-col mx-10">
        <PresentationText />
        <GreenCard whiteTitle="VENIR" greenTitle="EN CONSULTATION" contentp1="Je vous reçois dans le cadre d'une demande de soutien ponctuel ou d'un travail thérapeutique à plus long terme." contentp2="Mon approche, fondée sur le non-jugement et la construction d'une relation de confiance, vous promet un accueil sans distinction d'orientation sexuelle, de genre, d'appartenance religieuse ou culturelle."/>
        <CardLayout/>
        <MapLayout/>
      </div>
    </div>
  );
}
