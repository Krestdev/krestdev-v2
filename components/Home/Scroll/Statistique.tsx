import React from 'react'
import { useTranslations } from 'next-intl';
import Nombre from './Nombre';

const Statistique = () => {
    const t = useTranslations('Statistics');
    return (
        <div className='flex flex-col items-center gap-10 py-[60px] md:py-[96px] max-w-[1280px] w-full'>
            <div className='flex flex-row items-center justify-center max-w-[844px] sm:max-w-[735px] w-full'>
                <h2 className='text-black text-center w-[393px] sm:w-full'>
                    {t("title1")} <span className='font-mono font-normal tracking-normal'>{` ${t("title2")}`}</span>
                </h2>
            </div>
            <span className='flex flex-col-reverse items-center lg:items-start lg:flex-row justify-between px-7 containerBloc py-0'>
                <img src="/images/statistiques.png" alt="Statistique" className='w-[408px] h-[229.5px] rounded-[12px] object-cover' />
                <div className='flex flex-col items-center lg::items-start justify-start gap-5 max-w-[735px] w-full'>
                    <p>{"Chez KrestDev, nous combinons expertise technique et créativité pour livrer des solutions sur-mesure. Chaque projet est l'occasion de repousser les limites de l'innovation digitale."}</p>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-7'>
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
