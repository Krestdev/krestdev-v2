import { useTranslations } from 'next-intl'
import React from 'react'
import GridProcess from './GridProcess'

const Processus = () => {
    const t = useTranslations("Services.Process")
    return (
        <div className='w-full py-[96px] flex flex-col items-center gap-10 '>
            <div className='flex flex-col items-center max-w-[1280px] w-full px-7'>
                    <h2 className='text-black text-center max-w-[844px] w-full'>
                        {t("title")}
                    </h2>
                <p className='text-[#606060] text-[14px] text-center w-[645px] '>
                    {t("description")}
                </p>
            </div>
            <GridProcess />
        </div>
    )
}

export default Processus
