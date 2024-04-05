import CardLayout from "@/components/cards/CardLayout";
import GreenCard from "@/components/GreenCard";
import HeroMenu from "@/components/HeroMenu";
import MapLayout from "@/components/maps/MapLayout";
import PresentationText from "@/components/PresentationText";

export default function Home() {
  return (
    <div >
      <HeroMenu />
      <div className="flex flex-col xl:w-[70%] mx-auto">
        <PresentationText />
        <GreenCard href='/consultations' buttonTitle="En savoir plus" whiteTitle="VENIR" greenTitle="EN CONSULTATION" contentp1="Je vous reçois dans le cadre d'une demande de soutien ponctuel ou d'un travail thérapeutique à plus long terme." contentp2="Mon approche, fondée sur le non-jugement et la construction d'une relation de confiance, vous promet un accueil sans distinction d'orientation sexuelle, de genre, d'appartenance religieuse ou culturelle." />
        <CardLayout />
        test
        <div className="mt-14 lg:mt-[300px] xl:mt-[150px]">
        <MapLayout />
        </div>
      </div>
    </div>
  );
}
