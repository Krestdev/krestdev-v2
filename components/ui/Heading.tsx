import React from 'react'
import { RevealGroup } from '../reveal'

interface Props {
    title: String,
    description: String
}

const Heading = ({title, description}: Props) => {
  return (
    <section className='w-full flex flex-col items-center pb-14 sm:pb-20 pt-28 sm:pt-32 lg:pt-40 relative'>
        <RevealGroup y={10} delay={0} className='max-w-7xl w-full z-10 flex flex-col items-center gap-5 px-7'>
            <h1 className='text-white'>{title}</h1>
            <p className='subtitle text-subtitle-blue xl:text-lg text-center max-w-[640px] w-full'>{description}</p>
        </RevealGroup>
        <div className='absolute top-0 left-0 w-full h-full bg-[url("/images/hero.webp")] bg-cover'/>
        <div className='absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent'/>
    </section>
  )
}

export default Heading
