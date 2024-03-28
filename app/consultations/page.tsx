import PageTitle from '@/components/PageTitle'
import GrayBorderButton from '@/components/buttons/GrayBorderButton'
import LeafImage from '@/components/leaves/LeafImage'
import React from 'react'

function ConsultationPage() {
  return (
    <main className='flex flex-col xl:w-[70%] mx-auto'>
      <div className='relative xl:w-[70%] mt-20 lg:w-[70%] m-auto'>
        <LeafImage src="assets/images/doctor.jpg" alt="Photo d'Éléonore Gyselynck" />
        <div className='lg:absolute lg:top-32 lg:left-60'>
          <PageTitle content='Venir en consultation' />
        </div>
      </div>
      <h3 className='max-w-sm w-full lg:max-w-[80%] xl:max-w-full mx-auto text-2xl text-center lg:text-left lg:text-4xl font-montserrat font-semibold my-10 lg:mt-20'>
        <span className='lg:underline underline-offset-8 decoration-8 decoration-[#BFB55B]/50'>
          POURQUOI
        </span>
        <span className='text-[#689F38]'>
          {" "} VENIR EN CONSULTATION ?
        </span>
      </h3>
      <div className='flex flex-row'>
        <div className="md:flex hidden rounded-tr-lg rounded-br-lg">
          <img className="object-cover rounded-tr-lg rounded-br-lg w-[695px] h-[310px]" src="assets/images/consultation.jpg" alt="Photo d'une consult de psychanalyse" />
        </div>
        <div>
          <ul className='px-8 font-roboto lg:text-xl'>
            <li className='flex mt-2'>
              <span className='w-12'>
                <img src="assets/icons/up-arrow.png" alt="plop" className='rotate-90 mr-4' width={30} />
              </span>
              <span className='w-full'>
              Pour soutenir votre rétablissement suite à des difficultés psychiques légères, modérées ou sévères ayant nécessité ou non une hospitalisation.
              </span>
            </li>
            <li className='flex mt-2'>
              <span className='w-12'>
                <img src="assets/icons/up-arrow.png" alt="plop" className='rotate-90 mr-4' width={30} />
              </span>
              <span className='w-full'>
              Lors de changements, de difficultés de vie (deuil, séparation, maladie, burnout…) ou de questionnements existentiels.
              </span>
            </li>
            <li className='flex mt-2'>
              <span className='w-12'>
                <img src="assets/icons/up-arrow.png" alt="plop" className='rotate-90 mr-4' width={30} />
              </span>
              <span className='w-full'>
              Pour faire face au stress, à l'anxiété, au mal-être ou encore aux addictions et dépendances.
              </span>
            </li>
            <li className='flex mt-2'>
              <span className='w-12'>
                <img src="assets/icons/up-arrow.png" alt="plop" className='rotate-90 mr-4' width={30} />
              </span>
              <span className='w-full'>
              Lors de difficultés relationnelles et sociales (harcèlement, phobie scolaire, …)
              </span>
            </li>
            <li className='flex mt-2'>
              <span className='w-12'>
                <img src="assets/icons/up-arrow.png" alt="plop" className='rotate-90 mr-4' width={30} />
              </span>
              <span className='w-full'>
              Afin de (re)trouver votre propre chemin.
              </span>
            </li>
          </ul>
          <div className='text-center mt-6 sm:mt-6'>
            <GrayBorderButton href="/doctoranytime" content='Prendre rendez-vous' />
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-around my-20 font-montserrat m-auto lg:mx-0'>
        <div id="consultation_adulte" className="sm:w-[90%] sm:mx-auto sm:rounded-2xl lg:max-w-md xl:max-w-sm overflow-hidden lg:shadow-lg bg-[#689F38]/10 p-8 lg:rounded-2xl mb-8 lg:mb-0">
          <div className="py-4">
            <h4 className="font-bold text-xl mb-2 text-center">
              Consultation adulte / jeune adulte
            </h4>
            <p className="text-gray-700 text-xl text-center mt-10">
              Je vous reçois pour des entretiens individuels. La fréquence et la durée du suivi resteront à définir ensemble. La thérapie se déroule dans une relation dynamique et interactive. Je vous accompagne à votre rythme, dans le respect de vos valeurs et de vos choix.
            </p>
          </div>
        </div>
        <div id="consultation_adolescent" className="sm:w-[90%] sm:mx-auto sm:rounded-2xl lg:max-w-md xl:max-w-sm overflow-hidden lg:shadow-lg bg-[#689F38]/10 p-8 lg:rounded-2xl mt-8 lg:mt-0">
          <div className="py-4">
            <h4 className="font-bold text-xl mb-2 text-center">
              Consultation adolescent.e
            </h4>
            <p className="text-gray-700 text-xl text-center mt-10">
              Je propose de mettre à ta disposition un espace qui t'est dédié, avec la possibilité d'inclure tes parents/tuteurs à certaines étapes de la prise en charge, selon les besoins de la situation et avec ton accord. Mon objectif est de créer un espace sécurisé où tu puisses s'exprimer librement, partager tes préoccupations et explorer des solutions, en sachant que le secret professionnel sera respecté. Ensemble, nous pourrons aborder les défis spécifiques liés à l'adolescence, que ce soit en matière d'identité, de relations, ou de gestion des émotions.
            </p>
          </div>
        </div>
      </div>
      <p className='my-8 font-semibold w-[80%] mx-auto font-roboto text-xl'>
        Le saviez-vous ?
        Il est rare que l'adolescent.e entreprenne seul.e la démarche de demander une aide psychologique. L'adolescence est une période de bouleversements émotionnels, sociaux et physiques qui résonnent souvent au sein de la sphère familiale. Les changements observés chez les adolescents peuvent se manifester à travers des comportements extrêmes, suscitant parfois des inquiétudes au sein de leur entourage.
      </p>
        <p className='mt-14 sm:text-xl lg:w-[90%] mx-auto text-center font-montserrat text-2xl'>
          Dans ma pratique, je m'engage à
          <span className='font-bold'>
            {' '} éliminer {' '}
          </span>
          les obstacles  au maximum et à rendre le suivi
          <span className='font-bold'>
            {' '} accessible {' '}
          </span>
          à toute personne en demande d'un accompagnement.
        </p>
      <div className="w-[80%] mt-8 mb-24 mx-auto">
        <div >
          <p className='text-end text-2xl font-montserrat underline-offset-[35px] underline decoration-2 my-20 border-t-2 border-black pt-10'>
            Informations pratiques
          </p>
        </div>
        <div className="lg:w-[80%] xl:w-full mx-auto grid grid-rows-4 lg:grid-rows-2 grid-flow-col lg:gap-x-10  gap-y-0 lg:gap-y-4 text-xl font-montserrat">
          <div className='flex flex-row'>
            <span className='mr-6'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>

            </span>
            <span>
              Les séances durent 50 minutes et coutent 65 euros.
            </span>
          </div>
          <div className='flex flex-row'>
            <span className='mr-6'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
              </svg>

            </span>
            <span>
              Le paiement peut se faire en espèces ou par paiement mobile (appli Bancontact) ou par virement.
            </span>
          </div>
          <div className='flex flex-row'>
            <span className='mr-6'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>

            </span>
            <span>
              Les consultations psychologiques peuvent être partiellement remboursées. Renseignez-vous auprès de votre mutuelle.
            </span>
          </div>
          <div className='flex flex-row'>
            <span className='mr-6'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            </span>
            <span>
              La consultation est ouverte à partir de 15 ans. La consultation n'est pas ouverte aux familles, ou aux couples sauf de manière occasionnelle et définie
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ConsultationPage
