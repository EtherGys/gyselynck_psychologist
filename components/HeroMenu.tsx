import Image from 'next/image'
import React from 'react'
import GreenFullButton from './buttons/GreenFullButton'

function HeroMenu() {
    return (
        <div className="">
            <div className="relative w-full overflow-hidden">
                <img src="/assets/images/arbre.jpg" alt="Avatar" className="object-cover w-full h-full" />
                <div className="font-roboto absolute  py-2.5 bottom-52 left-32  rounded-tl-[15px]  rounded-bl-[120px] rounded-tr-[120px]  w-[437px] h-[343px] p-10 bg-white/60 text-black">
                    <div className='ml-10'>

                        <h1 className='text-6xl  mt-6'>
                            Éléonore Gyselynck
                        </h1>
                        <h2 className='mb-6 mt-2 text-xl'>
                            Psychologue clinicienne agréée
                        </h2>
                        <div className='text-center'>

                            <h3 className='mt-6'>
                                Consultations à Overijse et en ligne
                            </h3>
                            <div className='mt-6'>

                                <GreenFullButton content="Prendre rendez-vous" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroMenu
