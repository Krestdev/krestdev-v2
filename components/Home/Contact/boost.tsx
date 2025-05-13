"use client"

import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import React from 'react'

const Boost = () => {
    const t = useTranslations("Boost")
    const router = useRouter()
    return (
        <div className='flex flex-col items-center gap-10 py-[60px] md:py-[96px] bg-radial-[at_50%_0%] from-[#013B7D] via-[#000000] to-[#061D37] w-full '>
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
