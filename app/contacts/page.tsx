import ContactForm from '@/components/Contact/ContactForm'
import Boost from '@/components/Home/Contact/boost'
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <ContactForm />
      <Boost />
    </div>
  )
}

export default page
