import GreenCard from '@/components/GreenCard'
import PageTitle from '@/components/PageTitle'
import GrayBorderButton from '@/components/buttons/GrayBorderButton'
import LeafImage from '@/components/leaves/LeafImage'
import React from 'react'

function EducationPage() {
  return (
    <div className='flex flex-col xl:w-[70%] mx-auto'>
      <div className='relative mt-20 lg:w-[70%] m-auto'>
        <LeafImage src="assets/images/doctor.jpg" alt="Photo d'Éléonore Gyselynck" />
        <div className='lg:absolute lg:top-32 lg:left-60'>
          <PageTitle content='Ma formation en tant que psychologue' />
        </div>
      </div>
      <GreenCard
        contentp1="Forte de mon expérience en tant que psychologue clinicienne dans diverses institutions (principalement psychiatriques), notamment auprès d'adolescents et de leurs familles, j'accueille adolescents, adultes et jeunes adultes pour des consultations individuelles en cabinet privé."
        contentp2=""
        buttonTitle='Les types de consultations'
        href='/consultations' />
      <div className='md:w-[90%] lg:w-[80%] xl:w-full mx-auto my-8 font-montserrat text-xl'>
        <p className='p-4'>
          Formée en psychologie clinique de l'adulte à l'UCL, il a été ensuite question pour moi de choisir le courant psychothérapeutique vers lequel je souhaitais me diriger.
        </p>
        <p className='p-4'>
          Convaincue par le fait que les solutions de la personne se trouvent en elle et que le travail du psychologue consiste principalement à soutenir la personne afin de lui permettre de libérer ses compétences entravées par les épreuves de vie, je me suis naturellement dirigée vers l'approche centrée sur la personne (ACP) développée par Carl Rogers.
        </p>
        <p className='p-4'>
          Ce courant psychothérapeutique humaniste encourage le thérapeute à suivre le patient à son rythme.
        </p>
        <p className='p-4 font-bold text-center'>
          Non jugement, empathie et authenticité sont les valeurs fondamentales qui guident mon approche thérapeutique.
        </p>
      </div>
      <div className='text-center'>
        <GrayBorderButton href='/approche_acp' content="En savoir + sur l'ACP" />
      </div>
      <div className='relative lg:mt-16'>
        <div className='lg:rounded-2xl lg:w-[80%] xl:w-full mx-auto lg:max-h-[600px] overflow-hidden shadow-lg mt-60 mb-60 lg:mb-20'>
          <img src="assets/images/gingko_cut.jpg" alt="Feuilles de gingko" className='z-0 lg:h-[50%] object-cover h-[800px]' />
        </div>
        <div className='absolute top-0 lg:bottom-48 z-10 flex flex-col lg:flex-row lg:justify-around mx-auto w-[90%] lg:w-[80%] xl:w-full left-4 sm:left-36 md:left-48 lg:left-28 xl:left-0'>
          <div className="max-w-sm overflow-hidden shadow-inner border-2 lg:border-none bg-white p-8 mt-16  lg:my-0 rounded-2xl">
            <div className="py-4">
              <h4 className="font-bold text-xl mb-2 text-center font-roboto">Je suis inscrite à la Commission des Psychologues (912231069) </h4>
              <p className="text-gray-700 text-xl text-center mt-10  font-roboto">
                Qui m'autorise à porter le titre de psychologue. De plus, je dispose d'un visa délivré par le SPF Santé Publique, permettant l'exercice de la profession de psychologue clinicien (340878), ainsi que d'un agrément de la Fédération Wallonie-Bruxelles autorisant l'utilisation du titre de psychologue clinicien.
              </p>
              <div className='mt-6 flex flex-row justify-between'>
                <img src="assets/icons/logo_cp.png" alt="Logo de la commission des psychologues" width={240} />
                <img src="assets/icons/bfp-logo.webp" alt="Logo de la Fédération Belge des Psychologues" width={40} />
              </div>
            </div>
          </div>
          <div className="max-w-sm overflow-hidden shadow-inner border-2 lg:border-none bg-white p-8 mt-16 lg:my-0 rounded-2xl lg:mb-0">
            <div className="px-6 py-4">
              <h4 className="font-bold text-xl mb-2 text-center  font-roboto">Membre de l'association Francophone de psychothérapie centrée sur la personne</h4>
              <p className="text-gray-700 text-xl text-center mt-10  font-roboto">
                Je  poursuis actuellement ma formation au sein de l'association afin de continuer à développer mes compétences et mes connaissances.
              </p>
              <p className='text-center mt-10 text-blue-600 underline  font-roboto'>
                <a target="_blank" href="https://www.afpc.be/">Le site de l'AFPC</a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default EducationPage
