import { useTranslations } from 'next-intl'
import React from 'react'
import GridProcess from './GridProcess'
import { RevealGroup } from '../reveal'

const Processus = () => {
    const t = useTranslations("Services.Process")
    return (
        <section className='containerBloc flex flex-col items-center gap-10'>
            <RevealGroup y={15} blur={6} className='flex flex-col items-center'>
                    <h2 className='text-black text-center max-w-[844px] w-full'>
                        {t("title")}
                    </h2>
                <p className='subtitle text-center'>
                    {t("description")}
                </p>
            </RevealGroup>
            <GridProcess />
        </section>
    )
}

export default Processus
