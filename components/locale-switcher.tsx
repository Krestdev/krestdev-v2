import {useLocale} from 'next-intl';
import React from 'react'
import LocaleSelect from './locale-select';
import { locales } from '@/i18n/config';
import { SelectItem } from './ui/select';

function LocaleSwitcher() {
    const locale = useLocale();
  return (
    <LocaleSelect defaultValue={locale}>
        {locales.map((locale) => (
            <SelectItem key={locale} value={locale} className='uppercase'><img src={`/flags/${locale}.svg`} alt={locale} className='h-4 w-auto'/>{locale}</SelectItem>
        ))}
    </LocaleSelect>
  )
}

export default LocaleSwitcher