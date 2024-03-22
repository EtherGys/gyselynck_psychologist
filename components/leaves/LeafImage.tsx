import React from 'react'

export default function LeafImage( {src, alt} : leafProps) {
  return (
    <>
        <img className="lg:flex hidden object-cover object-top py-2.5 bottom-52 left-32  inset-x-0  text-center rounded-bl-[120px] rounded-tl-[15px] rounded-tr-[120px]  w-[295px] h-[310px]" src={src} alt={alt} />
    </>

  )
}
