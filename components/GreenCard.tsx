import React from 'react'
import GreenBorderButton from './buttons/GreenBorderButton'

function GreenCard({ whiteTitle, greenTitle, contentp1, contentp2, buttonTitle, href }: greenFrameProps) {
    return (
        <div className='font-montserrat'>
            <h3 className='max-w-sm w-full lg:max-w-[80%] mx-auto text-2xl text-center lg:text-left lg:text-4xl font-semibold my-10'>
                <span className='lg:underline underline-offset-8 decoration-8 decoration-[#BFB55B]/50'>
                    {whiteTitle}
                </span>
                <span className='text-[#689F38]'>
                    {" "} {greenTitle}
                </span>
            </h3>
            <div className="w-[90%] lg:w-[80%] xl:w-full lg:flex bg-[#689F38] rounded-2xl p-8 mt-14 mx-auto">
                <div className="text-white h-auto lg:w-[70%] flex-none text-center lg:text-left lg:text-xl">
                    <p>
                        {contentp1}
                    </p>
                    <p>
                        {contentp2}
                    </p>
                </div>
                <div className=" m-auto mt-6 md:mt-0 p-4 flex flex-col justify-between text-center leading-normal">
                    <GreenBorderButton href={href} content={buttonTitle} />
                </div>
            </div>
        </div>
    )
}

export default GreenCard
