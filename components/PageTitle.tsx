import React from 'react'

function PageTitle({ content }: contentProps) {
  return (
    <>
    <h1 className='sm:flex hidden bg-[#292222] p-4 text-white font-semibold text-2xl max-w-fit font-montserrat'>
      {content}
    </h1>
    <h1 className='sm:hidden flex p-4 text-3xl max-w-fit font-montserrat'>
      {content}
    </h1>
    </>
  )
}

export default PageTitle
