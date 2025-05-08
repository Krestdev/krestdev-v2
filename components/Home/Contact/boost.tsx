"use client"

import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import React from 'react'

const Boost = () => {
    const t = useTranslations("Boost")
    const router = useRouter()
    return (
        <div className='flex flex-col items-center gap-10 py-[60px] md:py-[96px] bg-gradient-to-t from-[#000000] via-[#061D37] to-[#013B7D] w-full '>
            <div className='flex flex-col items-center gap-2 px-7 max-w-[1280px] text-center'>
                <h2 className='text-white max-w-[844px] w-full'>
                    {t("title1")} <span className='font-mono font-normal'>{` ${t("title2")}`}</span>
                </h2>
                <p className='max-w-[540px] w-full text-[#D9EBFF] subtitle text-[16px]'>{t("description")}</p>
            </div>
            <Button onClick={() => router.push("/contacts")}  className='w-fit bg-white text-black'>{t("button")}</Button>
        </div>
    )
}

export default Boost
