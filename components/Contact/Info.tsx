import { contactData } from '@/data/config'
import { useTranslations } from 'next-intl'
import React from 'react'

const Info = () => {
    const t = useTranslations("Contact.Form")
  return (
    <div className='flex flex-col gap-10 pt-5'>
      <img src="/images/contact.png" alt="Contact" className='hidden md:flex h-[348.75px] md:w-full lg:w-[620px] rounded-[20px] object-cover ' />
      <div className='flex flex-col gap-4 p-7 rounded-[20px] bg-[#D9EBFF] '>
        <div className='flex flex-row items-center gap-4 px-5 py-3 rounded-[12px] bg-white'>
            <img src="/images/email.png" alt="" className='w-10 h-10 rounded-[12px] object-cover' />
            <div className='flex flex-col gap-1'>
                <p className='text-black font-medium text-[18px]'>{t("email")}</p>
                <p className='text-black text-[16px]'>{contactData.email}</p>
            </div>
        </div>
        <div className='flex flex-row items-center gap-4 px-5 py-3 rounded-[12px] bg-white'>
            <img src="/images/phone.png" alt="" className='w-10 h-10 rounded-[12px] object-cover' />
            <div className='flex flex-col gap-1'>
                <p className='text-black font-medium text-[18px]'>{t("tel2")}</p>
                <p className='text-black text-[16px]'>{contactData.phone}</p>
            </div>
        </div>
        <div className='flex flex-row items-center gap-4 px-5 py-3 rounded-[12px] bg-white'>
            <img src="/images/address.png" alt="" className='w-10 h-10 rounded-[12px] object-cover' />
            <div className='flex flex-col gap-1'>
                <p className='text-black font-medium text-[18px]'>{t("localisation")}</p>
                <p className='text-black text-[16px]'>{contactData.address}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Info
