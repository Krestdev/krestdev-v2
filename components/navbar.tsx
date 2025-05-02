"use client"

import { useTranslations } from 'next-intl';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

function Navbar() {
  const t = useTranslations('Navbar');
  const router = useRouter();
  return (
    <div className='w-full h-[70px] flex justify-center bg-black '>
      <div className='flex flex-row items-center justify-between max-w-[1280px] w-full h-[70px] px-7'>
        <button className='cursor-pointer' onClick={() => router.push('/')}>
          <Image src={'/images/logo.png'} alt={'Logo'} width={161} height={32} />
        </button>
        <span className='text-white flex flex-row items-center gap-4'>
          <Link href={""} className='hover:underline font-medium' >{t("services")}</Link>
          <Link href={""} className='hover:underline font-medium' >{t("about")}</Link>
          <Link href={""} className='hover:underline font-medium' >{t("tarif")}</Link>
          <Link href={""} className='hover:underline font-medium' >{t("contact")}</Link>
        </span>
        <Button>{t("portofolio")}</Button>
      </div>
    </div>
  )
}

export default Navbar