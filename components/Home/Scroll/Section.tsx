import React from 'react'

interface Section {
    title: string,
    description: string,
    image: string
  }

const Section = ({title, description, image}: Section) => {
  return (
    <div className='flex flex-col gap-6 px-7 py-8 border border-[#d9d9d9] w-[408px]'>
        <img src={image} alt={title} className='w-16 h-16 object-cover' />
        <div className='flex flex-col gap-2'>
            <h3>{title}</h3>
            <p className='text-[#757575] text-[14px]'>{description}</p>
        </div>
      
    </div>
  )
}

export default Section
