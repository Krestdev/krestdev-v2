import { contactData } from '@/data/config'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

function Footbar() {
  const t = useTranslations("Footer")
  return (
    <div className='flex flex-col items-center bg-gradient-to-b from-[#000000] via-[#061D37] to-[#013B7D] w-full '>
      <div className='flex flex-row gap-10 justify-between pt-[96px] pb-10 max-w-[1280px] w-full'>
        <div className='flex flex-col gap-3 max-w-[299px] w-full'>
          <img src="/images/logo.png" alt="logo" className='h-8 w-[161px] object-cover' />
          <p className='text-[#D9EBFF] text-[14px] leading-[100%] tracking-normal font-normal'>{t("description")}</p>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <p>{t("email")}</p>
            <Link href={`mailto:${contactData.email}`} className='text-white text-[16px] font-semibold'>{contactData.email}</Link>
          </div>
          <div className='flex flex-col gap-2'>
            <p>{t("phone")}</p>
            <Link href={`tel:${contactData.phone}`} className='text-white text-[16px] font-semibold'>{contactData.phone}</Link>
          </div>
          <div className='flex flex-col gap-2'>
            <p>{t("addresse")}</p>
            <p className='text-white text-[16px] font-semibold'>{contactData.address}</p>
          </div>
        </div>
        <div className='flex flex-row gap-4'>
          <div className='flex gap-2'>
            <Link target='_blank' href={"https://www.linkedin.com/company/krestdev/"}>
              <img src="/images/linkedIn.png" alt="LinkedIn" className='size-10' />
            </Link>
            <Link target='_blank' href={"https://www.facebook.com/share/16Dv6UE5J9/?mibextid=wwXIfr"}>
              <img src="/images/facebook.png" alt="Facebook" className='size-10' />
            </Link>
            <Link target='_blank' href={""}>
              <img src="/images/x.png" alt="X" className='size-10' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footbar