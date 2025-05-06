import React from 'react'

interface Temoignage {
    image: string
    name: string
    description: string
    titre: string
}

const TemoignageComp = ({image, name, description, titre}: Temoignage) => {
  return (
    <div className='md:h-[440px] w-[337px] flex flex-col items-center justify-between border border-[#BEBEBE] px-7 py-10'>
        <div className='flex flex-col gap-7'>
            <img src="/images/apostrophe.png" alt="" className='w-[46px] h-10 object-cover' />
            <p className='text-[18px]'>{`"${description}"`}</p>
        </div>
        <div className='flex flex-row items-center gap-7'>
            <img src={image} alt="profil" className='w-[81px] h-[81px] rounded-[41px] object-cover ' />
            <div className='flex flex-col items-start'>
                <h3 className='text-[16px] font-semibold'>{name}</h3>
                <p className='text-[#606060] text-[14px]'>{titre}</p>
            </div>
        </div>
    </div>
  )
}

export default TemoignageComp
