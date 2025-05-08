import Boost from '@/components/Home/Contact/boost'
import GridDomain from '@/components/Home/Domain/GridDomain'
import Statistique from '@/components/Home/Scroll/Statistique'
import Processus from '@/components/Services/Processus'
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex flex-col items-center overflow-clip'>
        <GridDomain />
        <Statistique />
        <Processus />
        <Boost />
    </div>
  )
}

export default page
