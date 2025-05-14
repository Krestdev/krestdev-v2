import { contactData } from '@/data/config'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

function Footbar() {
  const t = useTranslations("Footer")
  return (
    <div className='w-full flex flex-col items-center bg-radial-[at_50%_0%] from-black via-black-blue to-midnight-blue to-100%'>
      <div className='max-w-7xl w-full px-7 v-space pb-10 flex flex-wrap gap-10 justify-between'>
        <div className='max-w-[300px] w-full flex flex-col gap-3'>
          <img src="/images/logo.png" alt="logo" className='h-8 w-auto object-contain object-left' />
          <p className='text-subtitle-blue text-sm font-normal'>{t("description")}</p>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
          <p className='text-subtitle-blue text-sm'>{t("email")}</p>
            <Link href={`mailto:${contactData.email}`} className='text-white text-base font-semibold'>{contactData.email}</Link>
          </div>
          <div className='flex flex-col gap-2'>
          <p className='text-subtitle-blue text-sm'>{t("phone")}</p>
            <Link href={`tel:${contactData.phone}`} className='text-white text-base font-semibold'>{contactData.phone}</Link>
          </div>
          <div className='flex flex-col gap-2'>
          <p className='text-subtitle-blue text-sm'>{t("address")}</p>
            <p className='text-white text-base font-semibold'>{contactData.address}</p>
          </div>
        </div>
        <div className='flex flex-row gap-4'>
          <div className='flex gap-2'>
            <Link target='_blank' href={"https://www.linkedin.com/company/krestdev/"}>
              <img src="/images/linkedIn.png" alt="LinkedIn" className='h-fit w-fit object-cover' />
            </Link>
            <Link target='_blank' href={"https://www.facebook.com/share/16Dv6UE5J9/?mibextid=wwXIfr"}>
              <img src="/images/facebook.png" alt="Facebook" className='h-fit w-fit object-cover' />
            </Link>
            <Link target='_blank' href={"https://www.tiktok.com/@krestdev?_t=ZM-8wI18APFPpX&_r=1"}>
              <img src="/images/x.png" alt="X" className='h-fit w-fit object-cover' />
            </Link>
          </div>
        </div>
      </div>
      <div className='w-full flex items-center justify-center px-3 py-5 gap-3 border-t border-primary '>
        <p className='text-sm text-subtitle-blue'>{t("copyright")}</p>
      </div>
    </div>
  )
}

export default Footbar