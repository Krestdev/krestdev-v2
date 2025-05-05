import React from 'react';

interface Domain {
    image: string
    title: string
    description: string
}

const Domain = ({image, title, description}: Domain) => {
  return (
    <div className='h-[260px] w-[408px] flex flex-col items-center justify-center gap-4 px-7 py-8 border border-[#3684DB] shadow shadow-[#3684DB] rounded-[12px]'>
        <img src={image} alt={title} className='w-10 h-10 object-cover'/>
        <div className='flex flex-col items-center justify-center text-center gap-2'>
            <h3 className='text-white'>{title}</h3>
            <p className='text-[#CACACA] text-[14px]'>{description}</p>
        </div>
    </div>
  )
}

export default Domain
