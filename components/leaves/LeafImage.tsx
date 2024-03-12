import React from 'react'

export default function LeafImage( {src, alt} : leafProps) {
  return (
    <>
        <img className="bg-contain py-2.5 bottom-52 left-32  inset-x-0  text-center rounded-bl-[120px] rounded-tr-[120px] rounded-tl-sm  w-[295px] h-[310px]" src={src} alt={alt} />
    </>

  )
}
