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
        backgroundSize: 'cover',
        height: '400px',
        width: '300px',
        borderRadius: '10px',
        overflow: 'hidden',
        position: 'relative'
      }}
      className="group flex flex-col justify-end p-7 gap-[10px]"
    >
      {/* Dégradé */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-gradient-to-t from-[#3684DB]/50 to-[#3684DB]/0 z-10"
      />

      {/* Contenu texte au-dessus */}
      <div className="flex flex-col gap-1 z-10 relative">
        <p className="font-semibold text-[20px] text-white leading-[100%] tracking-[-3%]">{nom}</p>
        <p className="text-[16px] italic font-mono text-[#D9EBFF]">{poste}</p>
      </div>
    </div>
  )
}

export default EquipeComp
