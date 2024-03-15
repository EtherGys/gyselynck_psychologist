import React from 'react'
import Card from './Card'

function CardLayout() {
    return (
        <div className='relative font-montserrat'>
            <div className=' rounded-2xl w-[80%] mx-auto lg:max-h-[400px] overflow-hidden shadow-lg my-20'>
                <img src="assets/images/gingko_cut.jpg" alt="Feuilles de gingko" className='z-0 h-[50%]' />
            </div>
            <div className='absolute top-48 z-10 flex flex-row justify-around w-[80%] right-32'>
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
