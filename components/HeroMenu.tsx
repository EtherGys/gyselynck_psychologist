import Image from 'next/image'
import React from 'react'
import GreenFullButton from './buttons/GreenFullButton'

function HeroMenu() {
    return (
        <div className="">
            <div className="relative w-full overflow-hidden md:flex hidden">
                <img src="/assets/images/arbre.jpg" alt="Avatar" className="object-cover w-full h-full" />
                <div className="font-roboto absolute py-2.5 md:top-6 xl:top-16 bottom-52 left-32  rounded-tl-[15px]  rounded-bl-[120px] rounded-tr-[120px] md:w-[270px] md:h-[243px] lg:w-[437px] lg:h-[343px]    p-10 bg-white/60 text-black">
                    <div className='ml-10'>
                        <h1 className='lg:text-6xl md:text-3xl  mt-6'>
                            Éléonore Gyselynck
                        </h1>
                        <h2 className='mb-6 mt-2 lg:text-xl'>
                            Psychologue clinicienne agréée
                        </h2>
                        <div className='text-center'>

                            <h3 className='mt-6 md:mt-0 lg:mt-6 md:text-xs lg:text-sm lg:text-base'>
                                Consultations à Overijse dans mon cabinet et en visioconférence
                            </h3>
                            <div className='lg:flex hidden mt-6 xl:mt-4 justify-center'>
                                <GreenFullButton href='/doctoranytime' content="Prendre rendez-vous" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroMenu
