import React from 'react'
import TemoignageComp from './TemoignageComp'
import { useTranslations } from 'next-intl'
import { AutoScroll } from '@/components/ui/AutoScroll'
import { useTestimonialData } from '@/data/data'

interface Temoignage {
    image: string
    name: string
    description: string
    titre: string
}

const Temoignage = () => {
    const t = useTranslations("Temoignages");
    const temoignages = useTestimonialData()
    return (
        <div className='containerBloc flex flex-col gap-10 items-center'>
            <div className='flex flex-col items-center gap-2 px-7 max-w-[844px]'>
                <h2 className='text-center'>
                    {t("title1")} <span className='font-mono font-normal'>{` ${t("title2")}`}</span>
                </h2>
                <p className='subtitle'>{t("description")}</p>
            </div>
            <AutoScroll item={temoignages} />
        </div>
    )
}

export default Temoignage
