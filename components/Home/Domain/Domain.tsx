import React from 'react';
import { iconBoxProps } from '../Scroll/icon-box';


const Domain = ({image, title, description}: iconBoxProps) => {
  return (
    <div className='service-card'>
        <img src={image} alt={title} className='w-10 h-10 object-cover'/>
        <div className='flex flex-col items-center justify-center text-center gap-2'>
            <h3 className='text-white'>{title}</h3>
            <p className='subtitle text-subtitle-blue'>{description}</p>
        </div>
    </div>
  )
}

export default Domain
