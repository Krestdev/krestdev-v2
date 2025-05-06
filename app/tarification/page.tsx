import Boost from '@/components/Home/Contact/boost'
import Tarification from '@/components/Tarification/Tarification'
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <Tarification />
      <Boost />
    </div>
  )
}

export default page
