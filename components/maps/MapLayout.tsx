import React from 'react'
import GreenFullButton from '../buttons/GreenFullButton'
import GoogleMaps from './GoogleMaps'

function MapLayout() {
  return (
    <div className='mb-40 font-roboto drop-shadow-lg '>
      <section className="bg-gray-200 box-shadow lg:rounded-xl lg:w-[80%] m-auto">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className='flex flex-col lg:flex-row'>
            <div className="max-w-2xl lg:max-w-4xl flex flex-col items-center">
              <div className="text-xl font-extrabold text-gray-900 pb-4">RENDEZ-VOUS SUR DOCTORANYTIME</div>
              <GreenFullButton href='/rendez-vous' content='Prendre rendez-vous en ligne' />
            </div>
            <div className="max-w-2xl lg:max-w-4xl lg:mx-auto border-l-4 border-gray-500 p-4">
              <div className="text-3xl font-extrabold text-gray-900">SUR RDV</div>
              <p className="mt-4 text-lg text-gray-500">Le mardi et jeudi de 9h à 17h</p>
            </div>
          </div>
          <div className="mt-8 lg:mt-20">
            <div className="flex flex-col lg:flex-row lg:justify-between items-center ">
              <div>
                <div className="mx-auto overflow-hidden ">
                  <div className='flex flex-row'>
                    <div className='pt-6'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    </div>
                    <div className="px-4 py-4">
                      <div className="text-lg font-semibold text-gray-900">TÉLÉPHONE</div>
                      <p className="mt-1 text-gray-600">0400 00 00</p>
                    </div>
                  </div>
                  <div className='flex flex-row'>
                    <div className='pt-6'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>

                    </div>
                    <div className="px-4 py-4">
                      <div className="text-lg font-semibold text-gray-900">MAIL</div>
                      <p className="mt-1 text-gray-600">steve_beahan@hane.com</p>

                    </div>
                  </div>
                  <div className='flex flex-row'>
                    <div className='pt-6'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>

                    </div>
                    <div className="px-4 lg:pb-4 pb-8">
                      <div className="text-lg font-semibold text-gray-900">ADRESSE</div>
                      <p className="mt-1 text-gray-600">rue Langeweg 128,</p>
                      <p className="mt-1 text-gray-600">3090, Overijse</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <GoogleMaps />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MapLayout
