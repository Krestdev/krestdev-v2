import React from 'react'
import TemoignageComp from './TemoignageComp'
import { useTranslations } from 'next-intl'
import { AutoScroll } from '@/components/ui/AutoScroll'

interface Temoignage {
    image: string
    name: string
    description: string
    titre: string
}

const Temoignage = () => {

    const t = useTranslations("Temoignages");

    const temoignages: Temoignage[] = [
        {
            image: "/images/tem.jpeg",
            name: "Amadou Diop",
            titre: "CEO de AgroTech",
            description: "KrestDev a complètement transformé notre manière de gérer notre chaîne de production. Leur solution sur mesure est à la fois intuitive et puissante.",
        },
        {
            image: "/images/tem.jpeg",
            name: "Sarah Bensaid",
            titre: "Responsable Marketing chez MedyaPro",
            description: "Nous avons été impressionnés par le professionnalisme de l’équipe KrestDev. Leur application mobile a dopé notre engagement client.",
        },
        {
            image: "/images/tem.jpeg",
            name: "Jean-Luc Mbemba",
            titre: "Directeur Technique de FinanCiel",
            description: "Une équipe à l’écoute, réactive et techniquement au top. KrestDev a su s’adapter à nos exigences et livrer un produit de grande qualité.",
        },
        {
            image: "/images/tem.jpeg",
            name: "Fatoumata Diallo",
            titre: "Fondatrice de ShopNa",
            description: "Grâce à KrestDev, notre boutique en ligne est devenue bien plus performante. Les retours clients sont excellents depuis le lancement.",
        },
        {
            image: "/images/tem.jpeg",
            name: "Mohamed El Amrani",
            titre: "Chef de projet chez eHealth Solutions",
            description: "Leur approche centrée utilisateur nous a permis de créer une plateforme médicale vraiment efficace. Merci à toute l’équipe KrestDev !",
        },
        {
            image: "/images/tem.jpeg",
            name: "Mohamed El Amrani",
            titre: "Chef de projet chez eHealth Solutions",
            description: "Leur approche centrée utilisateur nous a permis de créer une plateforme médicale vraiment efficace. Merci à toute l’équipe KrestDev !",
        },
    ];

    return (
        <div className='flex flex-col py-[60px] md:py-[96px] gap-10 items-center'>
            <div className='flex flex-col items-center gap-2 px-7 max-w-[1280px]'>
                <h2 className='text-center w-full'>
                    {t("title1")} <span className='font-mono font-normal'>{` ${t("title2")}`}</span>
                </h2>
                <p className='subtitle'>{t("description")}</p>
            </div>
            <AutoScroll item={temoignages} />
        </div>
    )
}

export default Temoignage
