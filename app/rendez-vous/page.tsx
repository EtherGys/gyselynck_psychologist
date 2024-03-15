import PageTitle from '@/components/PageTitle'
import LeafImage from '@/components/leaves/LeafImage'
import React from 'react'

function AppointmentPage() {
  return (
    <main className='flex flex-col xl:w-[70%] mx-auto'>
      <div className='relative xl:w-[70%] mt-20'>
        <img className="object-cover object-left py-2.5 bottom-52 left-32  inset-x-0  text-center rounded-bl-[120px] rounded-tl-[15px] rounded-tr-[120px]  w-[295px] h-[310px]"
          src="assets/images/pexels-rdv.jpg"
          alt="Photo d'une consultation" />
        <div className='absolute top-32 left-60'>
          <PageTitle content="Prendre rendez-vous" />
        </div>
      </div>
      <div className='relative font-montserrat my-20'>
        <div className=' rounded-2xl w-[80%] mx-auto lg:max-h-[500px] overflow-hidden shadow-lg '>
          <img src="assets/images/green-leaves.jpg" alt="Feuilles de gingko" className='z-0 h-[50%]' />
        </div>
        <div className='absolute top-64 z-10 flex flex-row justify-around w-[80%] right-32'>
          <div className=' rounded-bl-[120px] rounded-tl-[15px] rounded-tr-[120px]  w-[295px] h-[310px] bg-[#E7A100] text-white'>
            plop
          </div>
          <div className=' rounded-bl-[120px] rounded-tl-[15px] rounded-tr-[120px]  w-[295px] h-[310px] bg-[#E7A100] text-white'>
            plop
          </div>
          <div className=' rounded-bl-[120px] rounded-tl-[15px] rounded-tr-[120px]  w-[295px] h-[310px] bg-[#E7A100] text-white'>
            plop
          </div>

        </div>
      </div>
    </main>
  )
}

export default AppointmentPage
