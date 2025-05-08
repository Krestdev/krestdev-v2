import Boost from '@/components/Home/Contact/boost'
import Tarification from '@/components/Tarification/Tarification'
import Heading from '@/components/ui/Heading'
import { useTranslations } from 'next-intl'
import React from 'react'

const page = () => {
  const t = useTranslations("Tarification");
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <Heading title={t("title")} description={t("description")} />
      <Tarification />
      <Boost />
    </div>
  )
}

export default page
