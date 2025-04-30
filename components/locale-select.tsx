'use client'
import { Locale } from '@/i18n/config';
import { setUserLocale } from '@/services/locale';
import React from 'react';
import { Select, SelectContent, SelectTrigger, SelectValue } from './ui/select';

interface Props {
    defaultValue: string;
    children: React.ReactNode;
}

function LocaleSelect({defaultValue, children}: Props) {
    const [isPending, startTransition] = React.useTransition();
    function onChange(value: string) {
        const locale = value as Locale;
        startTransition(() => {
          setUserLocale(locale);
        });
      }
  return (
    <Select defaultValue={defaultValue} onValueChange={onChange} disabled={isPending}>
        <SelectTrigger className='w-fit uppercase rounded-none'>
            <SelectValue placeholder={defaultValue}/>
        </SelectTrigger>
        <SelectContent className='w-10'>
            {children}
        </SelectContent>
    </Select>
  )
}

export default LocaleSelect