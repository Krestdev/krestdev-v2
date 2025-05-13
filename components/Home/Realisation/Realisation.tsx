"use client"
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import React from 'react'
import Projects from './Projects'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Realisation = () => {
    const t = useTranslations("Realisation")
    const router = useRouter()
    return (
        <div className='flex flex-col items-center gap-10 lg:gap-0 lg:items-start lg:flex-row justify-between containerBloc'>
            <div className='flex flex-row justify-between w-full lg:max-w-[517px]'>
                <div className='flex flex-col items-center lg:items-start px-7 gap-5'>
                    <h2 className='text-start max-w-[489px] w-full'>
                        {t("title1")} <span className='cursive-text'>{` ${t("title2")}`}</span>
                    </h2>
                    <p className='subtitle lg:max-w-[408px] w-full text-center lg:text-start'>{t("description")}</p>
                    <Link href={"/portofolio"}>
                    <Button className='w-fit h-[40px] cursor-pointer'>{t("seeMore")}</Button>
                    </Link>
                </div>
            </div>
            <Projects />
        </div>
    )
}

export default Realisation
