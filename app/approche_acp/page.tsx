import PageTitle from '@/components/PageTitle'
import GrayBorderButton from '@/components/buttons/GrayBorderButton'
import LeafImage from '@/components/leaves/LeafImage'
import React from 'react'

function ACPPage() {
  return (
    <main className='flex flex-col xl:w-[70%] mx-auto'>
      <div className='relative xl:w-[70%] mt-20'>
        <LeafImage src="assets/images/carlrogersposter.webp" alt="Photo de Carl Rogers" />
        <div className='lg:absolute lg:top-32 lg:left-60'>
          <PageTitle content="L'Approche Centrée sur la Personne (ACP)" />
        </div>
      </div>
      <blockquote className="w-[85%] lg:w-full m-auto relative lg:border-s-4 ps-4 sm:ps-6 my-10 shadow-md">
        <p className="text-gray-800 sm:text-xl text-justify mx-4"><em>
          « Le sentiment de profonde solitude individuelle qui est le lot de tant de vies humaines ne peut être diminué que si l'individu prend le risque d'être davantage lui-même face aux autres. »
        </em></p>
        <footer className="mt-4">
          <div className="flex items-center">
            <div className="ms-4">
              <div className="text-lg font-semibold text-gray-800 mb-2">Carl Rogers</div>
            </div>
          </div>
        </footer>
      </blockquote>
      <h2 className='max-w-sm w-full  lg:max-w-[80%] mx-auto text-2xl lg:text-4xl font-semibold my-10 text-center font-montserrat mt-20'>
        <span className='text-[#689F38]'>
          L'ACP
        </span>
        <span>
          , C'EST QUOI ?
        </span>
      </h2>

      <div className='flex flex-row bg-[#689F38]/45 lg:h-[400px] text-xl font-roboto'>
        <div className='w-[80%] m-auto py-4 lg:p-10'>
          <p className='my-4'>
            Il s'agit d'une
            <span className='font-bold'>
              {' '} méthode de psychothérapie et de la relation d'aide {' '}
            </span>
            développée par Carl Rogers, psychologue américain (1902-1987). Plus qu'une technique, l'Approche Centrée sur la Personne est une manière d'être, qui s'appuie sur la tendance naturelle de tout être humain à se réaliser en tant que personne, ce qu'on appelle la tendance actualisante
          </p>
          <p className='my-6'>
            Les principes de la relation d'aide et de la psychothérapie mis en évidence par l'ACP font l'objet d'une intense recherche scientifique de validation quant à leur efficacité. l'ACP est l'école de thérapie la plus représentative du grand courant de la
            <span className='font-bold'>
              {' '} psychologie humaniste
            </span>
            , appelée aussi la Troisième force aux côtés de la psychanalyse et du comportementalisme.
          </p>
        </div>
        <div className="sm:flex hidden rounded-tr-lg rounded-br-lg m-auto">
          <img className="object-cover rounded-tl-lg rounded-bl-lg  w-[395px] h-[360px] " src="assets/images/carl-rogers.webp" alt="Photo d'une consult de psychanalyse" />
        </div>
      </div>
      <div className='border-l-4 border-[#E7A100] ml-8 pl-8 my-16'>
        <h4 className='font-montserrat lg:text-xl '>Quelques liens pour aller plus loin :</h4>
        <ul>
          <li className='ml-6 py-4'>
            <a href="/" className='text-blue-600 underline'>
              link
            </a>
          </li>
          <li className='ml-6 py-4'>
            <a href="/" className='text-blue-600 underline'>
              link
            </a>
          </li>
          <li className='ml-6 py-4'>
            <a href="/" className='text-blue-600 underline'>
              link
            </a>
          </li>

        </ul>
      </div>
    </main>
  )
}

export default ACPPage
