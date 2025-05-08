import { useProjetData } from '@/data/data'
import { div } from 'framer-motion/client';
import React from 'react'
import Projet from './Projet';

const GridProjet = () => {
  const projet = useProjetData();

  return (
    <div className='w-full py-[96px] px-7 flex justify-center items-center bg-gradient-to-b from-[#000000] via-[#061D37] to-[#013B7D] '>
      <div className='max-w-[1280px] w-fit grid grid-cols-1 lg:grid-cols-2 gap-10'>
        {
          projet.map((x, i) => {
            return (
              <div key={i} className='flex flex-col justify-center w-fit'>
                <Projet {...x} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default GridProjet
