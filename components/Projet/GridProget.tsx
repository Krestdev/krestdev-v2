import { useProjetData } from '@/data/data'
import { div } from 'framer-motion/client';
import React from 'react'
import Projet from './Projet';
import { RevealGroup } from '../reveal';

const GridProjet = () => {
  const projet = useProjetData();

  return (
    <section className='w-full v-space flex justify-center items-center bg-gradient-to-b from-black via-black-blue to-midnight-blue '>
      <RevealGroup blur={6} y={0} scale={0.75} className='max-w-7xl w-full px-7 grid grid-cols-1 lg:grid-cols-2 gap-10'>
        {
          projet.map((x, i) => {
            return (
                <Projet key={i} {...x} />
            )
          })
        }
      </RevealGroup>
    </section>
  )
}

export default GridProjet
