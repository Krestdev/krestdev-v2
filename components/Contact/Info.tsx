import { contactData } from '@/data/config'
import { useTranslations } from 'next-intl'
import React from 'react'
import Reveal, { RevealGroup } from '../reveal'

const Info = () => {
    const t = useTranslations("Contact.Form")
  return (
    <div className='flex flex-col gap-10'>
      <Reveal y={0} blur={6}>
        <img src="/images/contact.webp" alt="Contact" className='hidden sm:block w-full h-auto aspect-video rounded sm:rounded-sm lg:rounded-lg xl:rounded-2xl object-cover ' />
        </Reveal>
      <RevealGroup y={10} className='flex flex-col gap-4 p-7 rounded-[20px] bg-subtitle-blue '>
        <div className='flex flex-row items-center gap-4 px-5 py-3 rounded-xl bg-white'>
            <img src="/images/email.png" alt="" className='w-10 h-10 rounded-xl object-cover' />
            <div className='flex flex-col'>
                <p className='text-black font-medium text-[18px]'>{t("email")}</p>
                <p className='text-black text-base'>{contactData.email}</p>
            </div>
        </div>
        <div className='flex flex-row items-center gap-4 px-5 py-3 rounded-xl bg-white'>
            <img src="/images/phone.png" alt="" className='w-10 h-10 rounded-xl object-cover' />
            <div className='flex flex-col'>
                <p className='text-black font-medium text-[18px]'>{t("tel2")}</p>
                <p className='text-black text-base'>{contactData.phone}</p>
            </div>
        </div>
        <div className='flex flex-row items-center gap-4 px-5 py-3 rounded-xl bg-white'>
            <img src="/images/address.png" alt="" className='w-10 h-10 rounded-xl object-cover' />
            <div className='flex flex-col'>
                <p className='text-black font-medium text-[18px]'>{t("localisation")}</p>
                <p className='text-black text-base'>{contactData.address}</p>
            </div>
        </div>
      </RevealGroup>
    </div>
  )
}

export default Info
