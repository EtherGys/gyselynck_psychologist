import GreenCard from '@/components/GreenCard'
import PageTitle from '@/components/PageTitle'
import MapLayout from '@/components/maps/MapLayout'
import React from 'react'

function AppointmentPage() {
  return (
    <main className='flex flex-col xl:w-[70%] mx-auto'>
      <div className='relative xl:w-[70%] mt-20 lg:w-[70%] m-auto'>
        <img className="lg:flex hidden object-cover object-left py-2.5 bottom-52 left-32  inset-x-0 text-center rounded-bl-[120px] rounded-tl-[15px] rounded-tr-[120px]  w-[295px] h-[310px]"
          src="assets/images/pexels-rdv.jpg"
          alt="Photo d'une consultation" />
        <div className='lg:absolute lg:top-32 lg:left-60'>
          <PageTitle content="Prendre rendez-vous" />
        </div>
      </div>
      <div className='relative font-montserrat my-40 lg:my-16 xl:my-40 xl:mb-52'>
        <div className='lg:hidden xl:flex lg:rounded-2xl lg:w-[80%] xl:w-full mx-auto lg:max-h-[300px] overflow-hidden lg:shadow-lg '>
          <img src="assets/images/green-leaves.jpg" alt="Images de feuilles d'arbres" className='z-0 lg:h-[50%] object-cover h-[800px]' />
        </div>
        <div className='absolute lg:static xl:absolute -top-32 lg:top-2/4 z-10 flex flex-col lg:flex-row justify-around right-12 sm:right-52 md:right-60 lg:right-32 xl:right-0 xl:w-full'>
          <div className='flex items-center justify-center my-6 lg:my-0 rounded-bl-[120px] rounded-tl-[15px] rounded-tr-[120px] w-[295px] h-[310px] bg-[#E7A100] text-black'>
            <p className='px-10 text-justify'>
              Je vous demande de
              prévenir au moins 24h à
              l'avance d'un désistement,
              afin de permettre à une
              autre personne d'obtenir
              un rendez-vous. Dans le
              cas contraire, la séance
              sera due.
            </p>
          </div>
          <div className='flex items-center justify-center my-6 lg:my-0 rounded-bl-[120px] rounded-tl-[15px] rounded-tr-[120px]  w-[295px] h-[310px] bg-[#E7A100] text-black'>
            <p className='px-10 text-justify'>
              Pour toute question ou
              renseignements vous pouvez me joindre par par
              téléphone, email ou sms.
            </p>
          </div>
          <div className='flex items-center justify-center my-6 lg:my-0 rounded-bl-[120px] rounded-tl-[15px] rounded-tr-[120px]  w-[295px] h-[310px] bg-[#E7A100] text-black'>
            <div className='text-center'>
              <div className='my-4'>
                <p>Téléphone :</p>
                <p>0400 00 00 00</p>
              </div>
              <div className='my-4'>
                <p> Mail :</p>
                <p>eleonore.gyselynck@gmail.com</p>
              </div>
              <div className='my-4'>
                <p> Adresse :</p>
                <p>Rue Langeweg 128</p>
                <p>3090, Overijse</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <GreenCard href='/consultations' whiteTitle='VENIR' greenTitle='EN CONSULTATION' buttonTitle='En savoir plus' contentp1="Je vous reçois dans le cadre d'une demande de soutien ponctuel ou d'un travail thérapeutique à plus long terme." contentp2="Mon approche, fondée sur le non-jugement et la construction d'une relation de confiance, vous promet un accueil sans distinction d'orientation sexuelle, de genre, d'appartenance religieuse ou culturelle." />
      </div>
      <div className='font-roboto w-[80%] m-auto pt-16'>
        <h4 className='text-3xl pb-8'>Accès</h4>
        <div>
          <p className='font-semibold lg:text-xl mt-4'>
            Transports en commun
          </p>
          <p className='my-2 lg:text-lg'>
            - <a href="https://www.belgiantrain.be/fr" className='underline'>Bus TEC</a> : Bus 504, 546, 210, R78, R76 (Arrêt #NOM DE L'ARRET à 10 minutes à pied)
          </p>
          <p className='lg:text-lg'>
            - <a href="https://www.belgiantrain.be/fr" className='underline'>SCNB</a> : Train (Gare de La Hulpe à 15 minutes à pied)
          </p>
        </div>
        <div>
          <p className='font-semibold lg:text-xl mt-4'>
            Parking
          </p>
          <p className='my-2 lg:text-lg'>
            Parking disponible devant le cabinet
          </p>
        </div>
      </div>
      <div className='mt-[150px]'>
        <MapLayout />
      </div>
    </main>
  )
}

export default AppointmentPage
