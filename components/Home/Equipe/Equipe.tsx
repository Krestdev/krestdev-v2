import { useTranslations } from 'next-intl'
import React from 'react'
import EquipeComp from './EquipeComp';
import { div } from 'framer-motion/client';
import { EquipeCar } from './EqupeCar';

const Equipe = () => {
    const t = useTranslations("Equipe");
    const equipe = [
        {
            nom: "Guidaye Viche",
            poste: t("chef"),
            image: "/images/viche.webp"
        },
        {
            nom: "Nguezet Jordan",
            poste: t("backend"),
            image: "/images/jordan.webp"
        },
        {
            nom: "Adiogo Hans",
            poste: t("frontend"),
            image: "/images/jason.webp"
        },
        {
            nom: "Nzogning Socrate",
            poste: t("frontend"),
            image: "/images/socrate.webp"
        },
    ]
    return (
        <div className='w-full flex flex-col items-center py-[60px] md:py-[96px] gap-10'
            style={{
                backgroundImage: `url("/images/bgEquipe.png")`,
                backgroundSize: 'cover',
                height: "765px",
            }}>
            <div className='flex flex-col items-center gap-2 px-7 max-w-[1280px] text-center'>
                <h2 className='text-white max-w-[489px] w-full'>
                    {t("title1")} <span className='font-mono font-normal'>{` ${t("title2")}`}</span>
                </h2>
                <p className='max-w-[640px] text-[#D9EBFF] subtitle text-[16px]'>{t("description")}</p>
            </div>
            <EquipeCar equipe={equipe} />
        </div>
    )
}

export default Equipe
