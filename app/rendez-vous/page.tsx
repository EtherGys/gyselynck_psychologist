import GreenCard from "@/components/GreenCard";
import PageTitle from "@/components/PageTitle";
import GrayBorderButton from "@/components/buttons/GrayBorderButton";
import GreenFullButton from "@/components/buttons/GreenFullButton";
import MapLayout from "@/components/maps/MapLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: 'Prendre rendez-vous',
  description: "Toutes les informations nécessaires pour prendre un rendez-vous"
};


function AppointmentPage() {
  return (
    <main className="flex flex-col xl:w-[70%] mx-auto">
    <div className="relative xl:w-[70%] mt-20 lg:w-[70%] m-auto">
    <img
    className="lg:flex hidden object-cover object-left py-2.5 bottom-52 left-32  inset-x-0 text-center rounded-bl-[120px] rounded-tl-[15px] rounded-tr-[120px]  w-[295px] h-[310px]"
    src="assets/images/pexels-rdv.jpg"
    alt="Photo d'une consultation"
    />
    <div className="lg:absolute lg:top-32 lg:left-60">
    <PageTitle content="Prendre rendez-vous" />
    </div>
    </div>
    <div className="relative font-montserrat my-40 lg:my-16 xl:my-40 xl:mb-52">
    <div className="lg:hidden xl:flex lg:rounded-2xl lg:w-[80%] xl:w-full mx-auto lg:max-h-[300px] overflow-hidden lg:shadow-lg ">
    <img
    src="assets/images/green-leaves.jpg"
    alt="Images de feuilles d'arbres"
    className="z-0 lg:h-[50%] object-cover h-[800px]"
    />
    </div>
    <div className="absolute lg:static xl:absolute -top-32 lg:top-2/4 z-10 flex flex-col lg:flex-row justify-around left-10 md:right-60 md:left-0 lg:right-32 xl:right-0 xl:w-full">
    <div className="flex items-center justify-center my-6 lg:my-0 rounded-bl-[120px] rounded-tl-[15px] rounded-tr-[120px] w-[295px] h-[310px] bg-[#E7A100] text-black">
    <p className="px-10 text-justify">
    Je vous demande de prévenir le plus tôt possible en cas de
    désistement, afin de permettre à une autre personne d'obtenir un
    rendez-vous.
    </p>
    </div>
    <div className="flex items-center justify-center my-6 lg:my-0 rounded-bl-[120px] rounded-tl-[15px] rounded-tr-[120px]  w-[295px] h-[310px] bg-[#E7A100] text-black">
    <p className="px-10 text-justify">
    Pour toute question ou renseignements vous pouvez me joindre par
    téléphone, email ou sms.
    </p>
    </div>
    <div className="flex items-center justify-center my-6 lg:my-0 rounded-bl-[120px] rounded-tl-[15px] rounded-tr-[120px]  w-[295px] h-[310px] bg-[#E7A100] text-black">
    <div className="text-center">
    <div className="my-4">
    <p className="font-bold text-xl">Téléphone</p>
    <a href="tel:0460214773" className="underline">
    <p>0460 21 47 73</p>
    </a>
    </div>
    <div className="my-4">
    <p className="font-bold text-xl"> Mail</p>
    <a
    href="mailto:eleonore.gyselynck@gmail.com"
    className="underline"
    >
    <p>eleonore.gyselynck@gmail.com</p>
    </a>
    </div>
    <div className="my-4">
    <p className="font-bold text-xl"> Adresse</p>
    <a
    href="https://maps.app.goo.gl/q74f2ZcP68GGd2Rt9"
    rel="noopener noreferrer"
    target="_blank"
    >
    <p className="underline">Rue Langeweg 128</p>
    <p className="underline">3090, Overijse</p>
    </a>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className='text-center mt-6 sm:mt-6'>
    <a target='_blank' href="https://rosa.be/fr/hp/eleonore-gyselynck/" >
            <button type="button" className="drop-shadow-lg lg:w-[50%]  p-4 lg:p-8 bg-[#689F38] hover:bg-[#BBE090]  lg:!text-xl text-white rounded-full text-sm text-center me-2 my-8">
            Prendre rendez-vous
            </button>
        </a>
    </div>
    <div>
    <GreenCard
    href="/consultations"
    whiteTitle="VENIR"
    greenTitle="EN CONSULTATION"
    buttonTitle="En savoir plus"
    contentp1="Je vous propose un espace d'écoute bienveillant et sécurisant, où vous pourrez aborder librement vos préoccupations, qu'il s'agisse d'un besoin de soutien ponctuel ou d'un travail thérapeutique."
    contentp2="Mon objectif est de vous accompagner à votre rythme, dans une démarche respectueuse de votre unicité, en vous offrant un cadre où vous vous sentirez accueilli.e et compris.e sans crainte de jugement."
    />
    </div>
    <div className="font-roboto w-[80%] m-auto pt-16">
    <h4 className="text-3xl pb-8">Accès</h4>
    <div>
    <p className="font-semibold lg:text-xl mt-4">Transports en commun</p>
    <p className="my-2 lg:text-lg">
    -{" "}
    <a target="_blank" href="https://maps.app.goo.gl/xufWuS8sMiyGU3ye8" className="underline">
    Arrêt de Bus Overijse langeweg 
    </a>{" "}
    :  R78 (TEC), 546 (De Lijn )
    </p>
    <p className="my-2 lg:text-lg">
    -{" "}
    <a target="_blank" href="https://maps.app.goo.gl/1wcUDXbaXo3jSzPM7" className="underline">
    Arrêt de Bus Overijse Terhulpsestwg/Smetslaan
    </a>{" "}
    : R76 (TEC), 504 (De Lijn)
    </p>
    <p className="lg:text-lg">
    -{" "}
    <a target="_blank" href="https://www.belgiantrain.be/fr" className="underline">
    SNCB
    </a>{" "}
    : gare de La Hulpe (à 15 minutes à pied)
    </p>
    </div>
    <div>
    <p className="font-semibold lg:text-xl mt-4">Parking</p>
    <p className="my-2 lg:text-lg">
    Parking disponible devant le cabinet
    </p>
    </div>
    </div>
    <div className="mt-[150px]">
    <MapLayout />
    </div>
    </main>
  );
}

export default AppointmentPage;
