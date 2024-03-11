import React from 'react'
import GreenBorderButton from './buttons/GreenBorderButton'
import GrayBorderButton from './buttons/GrayBorderButton'

function PresentationText() {
    return (
        <div className='flex flex-row justify-around mt-20'>
            <div className='my-auto w-[50%]'>
                <p>
                    Psychologue clinicienne agréée, je reçois des adultes et des adolescents à partir de 15 ans pour de consultations individuelles dans mon cabinet ou en vidéo-consultations via l'application intégrée de Doctoranytime.
                </p>
                <p>
                    J'accorde une importance primordiale à la compréhension et au respect de votre expérience personnelle, de vos valeurs et de votre désir de croissance personnelle. C'est dans cet esprit que je vous offre un espace sécurisé où vous pouvez explorer diverses problématiques, que ce soit pour un questionnement, une recherche de sens, une souffrance, des difficultés psychiques ayant nécessité ou non une hospitalisation. Mon engagement est de vous accompagner avec empathie et professionnalisme dans votre parcours vers le changement.
                </p>
                <div className='flex flex-row justify-center my-6'>

                    <GrayBorderButton content='Ma formation' />
                    <GreenBorderButton content="L'approche ACP" />
                </div>
            </div>
            <div className='border'>
                <img src="/assets/images/doctor.jpg" className="h-[341px] w-[246px]" alt="Photo de la psychologue Éléonore Gyselynck" />
            </div>
        </div>
    )
}

export default PresentationText
