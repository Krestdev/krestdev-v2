import { contactData } from '@/data/config'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

function Footbar() {
  const t = useTranslations("Footer")
  return (
    <div className='flex flex-col items-center bg-radial-[at_50%_0%] from-[#000000] via-[#061D37] to-[#013B7D]  to-100% w-full'>
      <div className='flex flex-wrap gap-10  px-7 lg:px-0 justify-between pt-[96px] pb-10 max-w-[1280px] w-full'>
        <div className='flex flex-col gap-3 max-w-[299px] w-full'>
          <img src="/images/logo.png" alt="logo" className='h-8 w-[161px] object-cover' />
          <p className='text-[#D9EBFF] text-[14px] font-normal'>{t("description")}</p>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
          <p className='text-[#D9EBFF] text-[14px]'>{t("email")}</p>
            <Link href={`mailto:${contactData.email}`} className='text-white text-[16px] font-semibold'>{contactData.email}</Link>
          </div>
          <div className='flex flex-col gap-2'>
          <p className='text-[#D9EBFF] text-[14px]'>{t("phone")}</p>
            <Link href={`tel:${contactData.phone}`} className='text-white text-[16px] font-semibold'>{contactData.phone}</Link>
          </div>
          <div className='flex flex-col gap-2'>
          <p className='text-[#D9EBFF] text-[14px]'>{t("address")}</p>
            <p className='text-white text-[16px] font-semibold'>{contactData.address}</p>
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
      <div className='w-full flex items-center justify-center px-[10px] py-5 gap-[10px] border-t border-[#3684DB] '>
        <p className='text-[14px] text-[#D9EBFF]'>{t("copyright")}</p>
      </div>
    </div>
  )
}

export default Footbar