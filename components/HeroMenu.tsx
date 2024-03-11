import Image from 'next/image'
import React from 'react'
import GreenFullButton from './buttons/GreenFullButton'

function HeroMenu() {
    return (
        <div className="">
            <div className="relative w-full overflow-hidden">
                <img src="/assets/images/arbre.jpg" alt="Avatar" className="object-cover w-full h-full" />
                <div className="absolute py-2.5 bottom-52 left-32  inset-x-0  text-center rounded-bl-[120px] rounded-tr-[120px] rounded-tl-sm  w-[437px] h-[343px] p-10 bg-white/60 text-black">
                    <h1 className='text-3xl'>
                        Éléonore Gyselynck
                    </h1>
                    <h2>
                        Psychologue clinicienne agréée
                    </h2>
                    <h3>
                        Consultations à Overijse et en ligne
                    </h3>
                    <GreenFullButton content="Prendre rendez-vous" />
                </div>
            </div>
        </div>
    )
}

export default HeroMenu
