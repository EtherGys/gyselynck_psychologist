import React from 'react'
import Card from './Card'

function CardLayout() {
    return (
        <div className='relative font-montserrat mt-24 mb-10 sm:mt-32 lg:mt-0'>
            <div className='lg:rounded-2xl  mx-auto lg:max-h-[600px] overflow-hidden lg:shadow-lg my-20'>
                <img src="assets/images/gingko_cut.jpg" alt="Feuilles de gingko" className='z-0 lg:h-[50%] object-cover h-[800px]' />
            </div>
            <div className='absolute -top-20 lg:top-48 mx-auto z-10 flex flex-col lg:flex-row justify-around left-5 sm:left-40 md:left-48 lg:left-20 xl:left-0 w-[90%] lg:w-[85%] xl:w-full'>
                <Card
                    title="Consultation adulte"
                    content="Je vous reçois pour des entretiens individuels. La fréquence et la durée du suivi resteront à définir ensemble. La thérapie se déroule dans une relation dynamique et interactive."
                    src='assets/icons/family.png'
                    alt='Icônes représentant des adultes'
                />
                <Card
                    title="Consultation adolescent.e"
                    content="Je t'accompagne à partir de 15 ans, en te proposant un espace qui te sera dédié et en tenant compte de tes besoins et des spécificités de ton parcours à toi."
                    src='assets/icons/siblings.png'
                    alt='Icônes représentant des adultes'
                />
      
            </div>
        </div>
    )
}

export default CardLayout
