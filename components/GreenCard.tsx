import React from 'react'
import GreenBorderButton from './buttons/GreenBorderButton'

function GreenCard({ whiteTitle, greenTitle, contentp1, contentp2, buttonTitle }: greenFrameProps) {
    return (
        <div className='font-montserrat'>
            <h3 className='max-w-sm w-full lg:max-w-[80%] mx-auto text-4xl font-semibold my-10'>
                <span className='underline underline-offset-8 decoration-8 decoration-[#BFB55B]/50'>
                    {whiteTitle}
                </span>
                <span className='text-[#689F38]'>
                    {" "} {greenTitle}
                </span>
            </h3>
            <div className="max-w-sm w-full lg:max-w-[80%] lg:flex bg-[#689F38] rounded-2xl p-8 mt-14 mx-auto">
                <div className="text-white h-48 lg:h-auto lg:w-[70%] flex-none overflow-hidden text-xl">
                    <p>
                        {contentp1}
                    </p>
                    <p>
                        {contentp2}
                    </p>
                </div>
                <div className=" m-auto p-4 flex flex-col justify-between leading-normal">
                    <GreenBorderButton content={buttonTitle} />
                </div>
            </div>
        </div>
    )
}

export default GreenCard
