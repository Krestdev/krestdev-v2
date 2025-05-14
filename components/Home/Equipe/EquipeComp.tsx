'use client'
import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  nom: string
  poste: string
  image: string
}

const EquipeComp = ({ nom, poste, image }: Props) => {
  return (
    <div
      style={{
        backgroundImage: `url("${image}")`,
      }}
      className="group p-7 w-full h-auto aspect-[3/4] overflow-hidden relative flex flex-col justify-end bg-cover cursor-grab rounded-xl"
    >
      <div className='absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent'/>
      {/* Dégradé */}
      <div className='absolute z-10 h-1/2 w-full -bottom-full left-0 group-hover:bottom-0 transition-all duration-500 ease-out bg-gradient-to-t from-primary/50 to-transparent'/>

      {/* Contenu texte au-dessus */}
      <div className="flex flex-col gap-1 z-20 relative">
        <p className="font-semibold text-[20px] text-white leading-[100%] tracking-[-0.03em]">{nom}</p>
        <span className="text-base cursive-text text-subtitle-blue">{poste}</span>
      </div>
    </div>
  )
}

export default EquipeComp
