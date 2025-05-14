import { TarifItem } from '@/data/data'
import { useTranslations } from 'next-intl'
import React from 'react'


interface Props {
    tarif: TarifItem
}

const Tarif = ({ tarif }: Props) => {
    const t = useTranslations("Tarification.Grid");
    return (
        <div className='flex flex-col gap-8  max-w-[420px] h-full border border-subtitle-blue'>
            <div className='flex flex-row gap-4 w-full px-5 py-4 bg-subtitle-blue'>
                <img src={tarif.image} alt={tarif.title} className='h-20 w-20 rounded-full object-cover' />
                <div className='flex flex-col gap-2'>
                    <h3 className='text-black text-start'>{tarif.title}</h3>
                    <p className='subtitle text-black'>{tarif.description}</p>
                </div>
            </div>
            <div className='flex flex-col h-full justify-between px-10 pb-5'>
                <ul className="list-disc flex flex-col items-start marker:text-[#3684DB] text-[#606060]">
                    {tarif.offre.map((item, index) => (
                        <li key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
                <div className='flex flex-col gap-2 w-full'>
                    <p className='text-[14px] text-[#606060]'>{tarif.subDesc}</p>
                    {
                         <p className='text-[20px] font-semibold text-black'>{tarif.prix ? `${t("montantC")} ${tarif.prix}` : `${t("montantI")}`}</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Tarif
