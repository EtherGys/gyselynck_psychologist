import React from 'react'
import GreenBorderButton from './buttons/GreenBorderButton'
import GrayBorderButton from './buttons/GrayBorderButton'

function PresentationText() {
    return (
        <div className='flex  flex-col-reverse lg:flex-row justify-around mt-20 lg:my-20'>
            <div className='my-auto mx-8 mg:-mx-0 text-justify lg:w-[50%] font-montserrat text-xl'>
                <p>
                    Psychologue clinicienne agréée, je reçois des adultes et des adolescents à partir de 15 ans pour de consultations individuelles dans mon cabinet ou en vidéo-consultations via l'application intégrée de{' '}
                    <a href="/" className='underline'>
                        Doctoranytime.
                    </a>
                </p>
                <p>
                    J'accorde une importance primordiale à la compréhension et au respect de votre expérience, de vos valeurs et de votre désir de croissance personnelle. C'est dans cet esprit que je vous offre un espace sécurisé où vous pouvez explorer diverses problématiques, que ce soit pour un questionnement, une recherche de sens, une souffrance, des difficultés psychiques ayant nécessité ou non une hospitalisation. Mon engagement est de vous accompagner avec empathie et professionnalisme dans votre parcours vers le changement.
                </p>
                <div className='flex flex-row justify-center my-6'>

                    <GrayBorderButton href='/formation' content='Ma formation' />
                    <GreenBorderButton href='/approche_acp' content="L'approche ACP" />
                </div>
            </div>

            <div className='m-auto lg:m-0 mb-6 lg:mb-0'>
                <img src="/assets/images/doctor.jpg" className="h-[341px] w-[246px]" alt="Photo de la psychologue Éléonore Gyselynck" />
            </div>
            <div className='md:hidden flex font-roboto'>
                <div className='m-auto'>

                    <h1 className='text-4xl mt-6 text-center'>
                        Éléonore Gyselynck
                    </h1>
                    <div className='text-center'>
                        <h2 className='mb-6 sm:text-2xl'>
                            Consultations à Overijse et en ligne
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PresentationText
