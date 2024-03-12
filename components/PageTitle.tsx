import React from 'react'

function PageTitle({ content }: contentProps) {
  return (
    <h1 className='bg-[#292222] p-4 text-white font-semibold text-2xl max-w-fit'>
      {content}
    </h1>
  )
}

export default PageTitle
