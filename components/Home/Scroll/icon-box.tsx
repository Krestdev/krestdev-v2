'use client'
import { useTranslations } from 'next-intl'
import React from 'react'

export interface iconBoxProps {
    title: string,
    description: string,
    image: string
  }

const IconBox = ({title, description, image}: iconBoxProps) => {
  const t = useTranslations("About");
  return (
    <div className='px-7 py-8 flex flex-col gap-6 border border-gray-200 w-auto sm:w-[408px]'>
        <img src={image} alt={title} className='size-16 object-contain' />
        <div className='flex flex-col gap-2'>
            <h3 className='text-left'>{t(title)}</h3>
            <p className='text-paragraph text-xs sm:text-sm lg:text-base'>{t(description)}</p>
        </div>
      
    </div>
  )
}

export default IconBox
