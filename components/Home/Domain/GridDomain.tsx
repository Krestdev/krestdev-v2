import React from 'react'
import Domain from './Domain'
import { useTranslations } from 'next-intl'
import { iconBoxProps } from '../Scroll/icon-box'
import Reveal, { RevealGroup } from '@/components/reveal'

const GridDomain = () => {

    const t = useTranslations("Domain")

    const domain: iconBoxProps[] = [
        {
            title: t("web"),
            description: t("webDescription"),
            image: "/images/websiteIcon2.svg"
        },
        {
            title: t("design"),
            description: t("designDescription"),
            image: "/images/designIcon.svg"
        },
        {
            title: t("marketing"),
            description: t("marketingDescription"),
            image: "/images/marketingIcon.svg"
        },
        {
            title: t("mobileWeb"),
            description: t("mobileWebDescription"),
            image: "/images/webdevIcon.svg"
        },
        {
            title: t("branding"),
            description: t("brandingDescription"),
            image: "/images/brandingIcon.svg"
        },
        {
            title: t("reseaux"),
            description: t("reseauxDescription"),
            image: "/images/networkIcon.svg"
        },
    ]
    return (
        <div className='w-full flex flex-col items-center bg-gradient-to-b from-black via-black-blue to-midnight-blue'>
            <div className='containerBloc flex flex-col items-center gap-10'>
                <RevealGroup y={15} blur={6} className='w-full flex flex-col gap-2 items-center lg:items-start lg:flex-row justify-between'>
                        <h2 className='text-white text-left max-w-[489px]'>
                            {t("title1")} <span className='cursive-text'>{` ${t("title2")}`}</span>
                        </h2>
                    <p className='subtitle text-subtitle-blue lg:max-w-[408px] text-center lg:text-left'>
                        {t("description")}
                    </p>
                </RevealGroup>
                <RevealGroup y={15} blur={4} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
                    {
                        domain.map((x, i) => {
                            return (
                                    <Domain key={i} {...x} />
                            )
                        })
                    }
                </RevealGroup>
            </div>
        </div>
    )
}

export default GridDomain
