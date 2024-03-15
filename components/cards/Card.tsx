import React from 'react'
import GrayBorderButton from '../buttons/GrayBorderButton'

function Card({ title, content, src, alt }: cardProps) {
    return (
        <div className="max-w-sm overflow-hidden shadow-lg bg-white p-8 rounded-2xl">
            <img className="w-[120px] mx-auto" src={src} alt={alt} />
            <div className="px-6 py-4">
                <h4 className="font-bold text-xl mb-2 text-center">{title}</h4>
                <p className="text-gray-700 text-xl text-center">
                    {content}
                </p>
                <div className='text-center mt-8'>
                    <GrayBorderButton content="+ d'infos" />
                </div>
            </div>
        </div>
    )
}

export default Card
