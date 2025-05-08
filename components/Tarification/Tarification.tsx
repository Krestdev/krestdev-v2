import { useTarifData } from '@/data/data'
import { div } from 'framer-motion/client';
import { useTranslations } from 'next-intl'
import React from 'react'
import Tarif from './Tarif';

const Tarification = () => {
    const tarif = useTarifData();
    return (
        <div className='max-w-[1280px] px-7 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center py-[96px] h-auto'>
            {
                tarif.map((x, i) => {
                    return (
                        <div key={i} className='flex justify-center md:justify-normal'>
                            <Tarif tarif={x} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Tarification
