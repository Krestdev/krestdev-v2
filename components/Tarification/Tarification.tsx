import { useTarifData } from '@/data/data'
import { div } from 'framer-motion/client';
import { useTranslations } from 'next-intl'
import React from 'react'
import Tarif from './Tarif';
import { RevealGroup } from '../reveal';

const Tarification = () => {
    const tarif = useTarifData();
    return (
        <RevealGroup y={15} delayGap={0.40} className='containerBloc grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 lg:gap-10 items-stretch place-items-center'>
            {
                tarif.map((x, i) => {
                    return (
                            <Tarif key={i} tarif={x} />
                    )
                })
            }
        </RevealGroup>
    )
}

export default Tarification
