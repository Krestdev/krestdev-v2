import React from 'react'

interface Props {
    title: String,
    description: String
}

const Heading = ({title, description}: Props) => {
  return (
    <div 
    style={{
        backgroundImage: `url('/images/hero.png')`,
        backgroundSize: 'cover',
        overflow: 'hidden',
    }}
    className='w-full flex flex-col items-center gap-[10px] px-[10px] py-20'
    >
        <div className='flex flex-col items-center gap-10 px-7 max-w-[1280px] w-full'>
            <h1 className='text-white'>{title}</h1>
            <p className='subtitle text-[#D9EBFF] text-[18px] text-center max-w-[640px] w-full'>{description}</p>
        </div>
    </div>
  )
}

export default Heading
