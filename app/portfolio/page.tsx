import Boost from '@/components/Home/Contact/boost'
import GridProjet from '@/components/Projet/GridProget'
import Heading from '@/components/ui/Heading'
import { getPageTitle } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import React from 'react'


const page = () => {
  
  const t = useTranslations("Portfolio");
  return (
    <div>
      <Heading title={t("title")} description={t("description")} />
      <GridProjet />
      <Boost />
    </div>
  )
}

export default page
