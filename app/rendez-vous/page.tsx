import PageTitle from '@/components/PageTitle'
import LeafImage from '@/components/leaves/LeafImage'
import React from 'react'

function AppointmentPage() {
  return (
    <div className='flex flex-col xl:w-[70%] mx-auto'>
      <div className='relative xl:w-[70%]'>
        <LeafImage src="assets/images/doctor.jpg" alt="Photo d'Éléonore Gyselynck" />
        <div className='absolute top-32 left-60'>
          <PageTitle content="Prendre rendez-vous" />
        </div>
      </div>
    </div>
  )
}

export default AppointmentPage
