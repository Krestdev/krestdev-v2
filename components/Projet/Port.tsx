import React from 'react'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { RevealGroup } from '../reveal'
import { Portfolio } from '@/data/data'

const Port = ({ nom, service, lien, description, image }: Portfolio) => {
    const t = useTranslations("Portfolio.Projet")
    return (
        <section className='containerBloc flex flex-col md:items-center gap-6 sm:gap-8 lg:gap-10'>
            <RevealGroup y={15} className='grid md:flex md:flex-row justify-center md:items-end gap-7 px-7'>
                <div className='flex flex-row items-center gap-3'>
                    <img src="/images/user.png" alt="" className='w-10 h-10 object-cover' />
                    <div className='flex flex-col'>
                        <p className='text-paragraph leading-[120%]'>{t("client")}</p>
                        <p className='text-black text-lg leading-[120%] font-semibold uppercase'>{nom}</p>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-3'>
                    <img src="/images/service.png" alt="" className='w-10 h-10 object-cover' />
                    <div className='flex flex-col'>
                        <p className='text-paragraph leading-[120%]'>{t("service")}</p>
                        <p className='text-black text-lg leading-[120%] font-semibold'>{service}</p>
                    </div>
                </div>
                {lien && <Link target='_blank' href={lien} className='cursor-pointer'>
                    <Button>{t("lien")}</Button>
                </Link>}
            </RevealGroup>
            <RevealGroup y={15} blur={6} className='flex flex-col gap-4'>
                <h1>{t("title")}</h1>
                <p className='text-center text-paragraph text-base max-w-5xl w-full'>{description}</p>
            </RevealGroup>
            <img src={image} alt={nom} className='max-w-4xl w-full h-auto' />
        </section>
    )
}

export default Port
