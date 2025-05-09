import React from 'react'
import { useTranslations } from 'next-intl';
import Nombre from './Nombre';

const Statistique = () => {
    const t = useTranslations('Statistics');
    const experience =(x: number) => {
        return (new Date()).getFullYear() - x
    }

    return (
        <div className='flex justify-center w-full bg-black'>
            <div className='flex flex-col items-center gap-10 py-10 md:py-[60px] lg:py-[96px] max-w-[1280px] w-full'>
            <div className='flex flex-row items-center justify-center max-w-[844px] sm:max-w-[735px] w-full'>
                <h2 className='text-white text-center w-[393px] sm:w-full'>
                    {t("title1")} <span className='font-mono font-normal tracking-normal'>{` ${t("title2")}`}</span>
                </h2>
            </div>
            <span className='flex flex-col-reverse items-center lg:items-start lg:flex-row justify-between px-7 containerBloc py-0'>
                <img src="/images/statistiques.png" alt="Statistique" className='w-[408px] h-[229.5px] rounded-[12px] object-cover' />
                <div className='flex flex-col items-center lg::items-start justify-start gap-5 max-w-[735px] w-full'>
                    <p>{t("description")}</p>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-7'>
                        <Nombre nombre={20} uni='+' title={t("livre")} />
                        <Nombre nombre={95} uni='%' title={t("clients")} />
                        <Nombre nombre={experience(2020)} title={t("annee")} />
                    </div>
                </div>
            </span>
        </div>
        </div>
    )
}

export default Statistique
