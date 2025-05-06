"use client"

import Boost from '@/components/Home/Contact/boost'
import Equipe from '@/components/Home/Equipe/Equipe'
import Section from '@/components/Home/Scroll/Section'
import Statistique from '@/components/Home/Scroll/Statistique'
import { HorizontalScrollCarousel } from '@/components/horizontal-scroll'
import { TextReveal } from '@/components/ui/text-reveal'
import { useAboutData } from '@/data/data'
import { useTranslations } from 'next-intl'
import React from 'react'

const page = () => {
    const t = useTranslations('About');
    const about = useAboutData();
    return (
        <div className='flex flex-col items-center justify-center overflow-clip'>
            <div className='containerBloc py-0 flex flex-col items-center justify-center'>
                <TextReveal text={t("description")} className='flex w-full justify-center' />
                <HorizontalScrollCarousel>
                    {about.map((item, i) => (
                        <span key={i}>
                            <Section title={item.title} description={item.content} image={item.image} />
                        </span>
                    ))}
                </HorizontalScrollCarousel>
                <Statistique />
            </div>
            <Equipe />
            <Boost />
        </div>
    )
}

export default page
