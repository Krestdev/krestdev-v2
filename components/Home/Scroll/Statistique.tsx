import React from 'react'
import { useTranslations } from 'next-intl';
import Nombre from './Nombre';

const Statistique = () => {
    const t = useTranslations('Statistics');
    return (
        <div className='flex flex-col gap-10 py-[96px] '>
            <div className='flex flex-row items-center justify-center w-full'>
                <h2 className='text-black text-center'>
                    {t("title1")} <span className='font-mono font-normal'>{` ${t("title2")}`}</span>
                </h2>
            </div>
            <span className='flex flex-row items-center justify-between px-7'>
                <img src="/images/statistiques.png" alt="Statistique" className='w-[408px] h-[229.5px] object-cover' />
                <div className='flex flex-col  gap-5 max-w-[735px]'>
                    <p>{"Chez KrestDev, nous combinons expertise technique et créativité pour livrer des solutions sur-mesure. Chaque projet est l'occasion de repousser les limites de l'innovation digitale."}</p>
                    <div className='flex flex-row gap-7'>
                        <Nombre nombre={20} uni='+' title={"Projets livrés"} />
                        <Nombre nombre={95} uni='%' title={"Satisfaction client"} />
                        <Nombre nombre={12} title={"Clients accompagnés"} />
                    </div>
                </div>
            </span>
        </div>
    )
}

export default Statistique
