import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import React from 'react'
import Projects from './Projects'

const Realisation = () => {
    const t = useTranslations("Realisation")
    return (
        <div className='flex flex-row justify-between containerBloc'>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col w-[517px] px-7 gap-5'>
                    <h2 className='text-start max-w-[489px] w-full'>
                        {t("title1")} <span className='font-mono font-normal'>{` ${t("title2")}`}</span>
                    </h2>
                    <p className='subtitle max-w-[408px]'>{t("description")}</p>
                    <Button className='w-fit'>{t("seeMore")}</Button>
                </div>
            </div>
            <Projects />
        </div>
    )
}

export default Realisation
