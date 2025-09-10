import Image from 'next/image'
import React from 'react'
import GreenFullButton from './buttons/GreenFullButton'

function HeroMenu() {
    return (
        <div className="">
            <div className="relative w-full overflow-hidden md:flex hidden">
                <img src="/assets/images/pexels-vlad.jpg" alt="Eleonore Gyselynck Psychologue clinicienne agréée" className="object-cover w-full h-[600px]" />
                <div className="font-roboto absolute py-2.5 md:top-6 xl:top-16 bottom-52 left-32  rounded-tl-[15px]  rounded-bl-[120px] rounded-tr-[120px] md:w-[349px] md:h-[274px] lg:w-[437px] lg:h-[343px]    p-10 bg-white/60 text-black">
                    <div className='ml-10'>
                        <h1 className='lg:text-5xl md:text-3xl  mt-6'>
                            Eléonore Gyselynck
                        </h1>
                        <h2 className='mb-4 mt-2 md:text-xl'>
                            Psychologue clinicienne agréée
                        </h2>
                        <div className='text-center'>

                            <h3 className='mt-6 md:mt-0 lg:mt-0 md:text-sm xl:text-base'>
                                Consultations à Overijse dans mon cabinet, au  &nbsp;
                                <a target='_blank' href="https://centremergences.be/nos-therapeutes/gyselynck-eleonore" className=' underline'>
                 CentrEmergences
              </a> (Louvain-La-Neuve) et en visioconférence
                            </h3>
                            <div className='lg:flex hidden my-6 xl:my-4 justify-center'>
                                <GreenFullButton target='_blank' href="https://rosa.be/fr/hp/eleonore-gyselynck/" content="Prendre rendez-vous" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroMenu
