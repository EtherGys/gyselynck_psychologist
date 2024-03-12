import PageTitle from '@/components/PageTitle'
import GrayBorderButton from '@/components/buttons/GrayBorderButton'
import LeafImage from '@/components/leaves/LeafImage'
import React from 'react'

function ConsultationPage() {
  return (
    <div className='flex flex-col xl:w-[70%] mx-auto'>
      <div className='relative xl:w-[70%]'>
        <LeafImage src="assets/images/doctor.jpg" alt="Photo d'Éléonore Gyselynck" />
        <div className='absolute top-32 left-60'>
          <PageTitle content='Venir en consultation' />
        </div>
      </div>
      <h3 className='max-w-sm w-full lg:max-w-[80%] mx-auto text-4xl font-extrabold my-10 text-center'>
        <span >
          POURQUOI
        </span>
        <span className='text-[#689F38]'>
          {" "} VENIR CONSULTER ?
        </span>
      </h3>
      <div className='flex flex-row'>
        <div className="rounded-tr-lg rounded-br-lg">
          <img className="rounded-tr-lg rounded-br-lg  w-[295px] h-[310px] " src="assets/images/doctor.jpg" alt="Photo d'une séance de psychanalyse" />
        </div>
        <div>
          <ul className='px-8'>
            <li className='flex mt-2'>
              <img src="assets/icons/up-arrow.png" alt="plop" className='rotate-90 mr-4' width={30} />
              Lors de changements ou de difficultés de vie (deuil, séparation, maladie, …).
            </li>
            <li className='flex mt-2'>
              <img src="assets/icons/up-arrow.png" alt="plop" className='rotate-90 mr-4' width={30} />
              Pour soutenir votre rés psychiques légères, modérées ou sévères ayant nécessité ou non une hospitalisation.
            </li>
            <li className='flex mt-2'>
              <img src="assets/icons/up-arrow.png" alt="plop" className='rotate-90 mr-4' width={30} />
              Pour faire face au stress, à l'anxiété, au mal-être ou encore aux addictions et dépendances.
            </li>
            <li className='flex mt-2'>
              <img src="assets/icons/up-arrow.png" alt="plop" className='rotate-90 mr-4' width={30} />
              Lors de difficultés relationnelles et sociales.
            </li>
            <li className='flex mt-2'>
              <img src="assets/icons/up-arrow.png" alt="plop" className='rotate-90 mr-4' width={30} />
              Pour pouvoir laisser la place à l'expression de vos émotions.
            </li>
            <li className='flex mt-2'>
              <img src="assets/icons/up-arrow.png" alt="plop" className='rotate-90 mr-4' width={30} />
              Afin de (re)trouver votre propre chemin.
            </li>
          </ul>
          <div className='text-center mt-2'>
            <GrayBorderButton content='Prendre rendez-vous' />
          </div>
        </div>
      </div>
      {/* Check border */}
      <div className='flex flex-row justify-center my-20 border '>
        <div className=' bottom-48 z-10 flex flex-row justify-around w-[80%] border'>
          <div className="max-w-sm overflow-hidden shadow-lg bg-white p-8 rounded-2xl">
            <div className="py-4">
              <h4 className="font-bold text-xl mb-2 text-center">
                Je suis inscrite à la Commission des Psychologues (912231069)
              </h4>
              <p className="text-gray-700 text-xl text-center mt-10">
                Qui autorise le port du titre de psychologue et dispose d'un visa autorisant l'exercice de la profession de psychologue clinicien attribué par le SPF Santé Publique () ainsi que d'un agrément () de la Fédération Wallonie-Bruxelles autorisant le titre de psychologue clinicien.
              </p>
            </div>
          </div>
          <div className=' bottom-48 z-10 flex flex-row justify-around w-[80%] border'>
            <div className="max-w-sm overflow-hidden shadow-lg bg-white p-8 rounded-2xl">
              <div className="py-4">
                <h4 className="font-bold text-xl mb-2 text-center">
                  Je suis inscrite à la Commission des Psychologues (912231069)
                </h4>
                <p className="text-gray-700 text-xl text-center mt-10">
                  Qui autorise le port du titre de psychologue et dispose d'un visa autorisant l'exercice de la profession de psychologue clinicien attribué par le SPF Santé Publique () ainsi que d'un agrément () de la Fédération Wallonie-Bruxelles autorisant le titre de psychologue clinicien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConsultationPage
