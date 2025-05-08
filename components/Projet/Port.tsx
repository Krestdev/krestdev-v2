import React from 'react'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

interface Props {
    slug: string,
    nom: string,
    service: string,
    desc: string,
    image: string,
    lien: string,
}

const Port = ({ nom, service, desc, image, lien }: Props) => {
    const t = useTranslations("Portfolio.Projet")
    return (
        <div className='flex flex-col md:items-center gap-10 py-10 md:py-[60px] lg:py-[96px] px-7 '>
            <div className='flex flex-col md:flex-row md:justify-center gap-7 px-7'>
                <div className='flex flex-row items-center gap-3'>
                    <img src="/images/user.png" alt="" className='w-10 h-10 object-cover' />
                    <div className='flex flex-col'>
                        <p className='text-[16px] text-[#606060]'>{t("client")}</p>
                        <p className='text-[18px] text-black font-semibold uppercase'>{nom}</p>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-3'>
                    <img src="/images/service.png" alt="" className='w-10 h-10 object-cover' />
                    <div className='flex flex-col'>
                        <p className='text-[16px] text-[#606060]'>{t("service")}</p>
                        <p className='text-[18px] text-black font-semibold'>{service}</p>
                    </div>
                </div>
                <Link target='_blank' href={lien} className='cursor-pointer'>
                    <Button>{t("lien")}</Button>
                </Link>
            </div>
            <div className='flex flex-col gap-4'>
                <h1>{t("title")}</h1>
                <p className='text-center text-[#606060] text-[16px] max-w-[1024px] w-full'>{desc}</p>
            </div>
            <img src={image} alt={nom} className='w-full lg:w-[897px] max-h-[1456px] h-full object-cover' />
        </div>
    )
}

export default Port
