"use client"

import { useTranslations } from 'next-intl';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import LocaleSwitcher from './locale-switcher';
import { LucideMenu } from 'lucide-react';

function Navbar() {
  const t = useTranslations('Navbar');
  const router = useRouter();
  return (
    <div className='w-full h-[70px] flex justify-center bg-black '>
      <div className='flex flex-row items-center justify-between max-w-[1280px] w-full h-[70px] px-7'>
        <div className='flex items-center gap-2'>
          <LucideMenu className='flex md:hidden gap-2 px-2 size-10 text-white' />
          <Link href={"/"}>
            <img src={'/images/logo.png'} alt={'Logo'} className='h-[32px] w-auto object-cover flex gap-2' />
          </Link>
        </div>
        <span className='text-white hidden md:flex flex-row items-center gap-4'>
          <Link href={"/services"} className='hover:underline font-medium' >{t("services")}</Link>
          <Link href={"/apropos"} className='hover:underline font-medium' >{t("about")}</Link>
          <Link href={"/tarification"} className='hover:underline font-medium' >{t("tarif")}</Link>
          <Link href={""} className='hover:underline font-medium' >{t("porto")}</Link>
        </span>
        <div className='flex items-center gap-3'>
          <LocaleSwitcher />
          <Button onClick={() => router.push("/contacts")} className='h-[40px] hidden sm:flex'>{t("contact")}</Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar