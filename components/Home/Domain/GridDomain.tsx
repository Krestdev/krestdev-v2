import React from 'react'
import Domain from './Domain'
import { useTranslations } from 'next-intl'
import { iconBoxProps } from '../Scroll/icon-box'

const GridDomain = () => {

    const t = useTranslations("Domain")

    const domain: iconBoxProps[] = [
        {
            title: t("web"),
            description: t("webDescription"),
            image: "/images/webSiteIcon2.svg"
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
        <div className='flex flex-col items-center bg-gradient-to-b from-black via-[#061B7D] to-[#013B7D] w-screen px-7 sm:px-0'>
            <div className='flex flex-col items-center gap-10 containerBloc'>
                <div className='flex flex-col items-center lg:items-start lg:flex-row justify-between max-w-[1280px] w-full px-7'>
                    <div className='max-w-[489px]'>
                        <h2 className='text-white text-start'>
                            {t("title1")} <span className='cursive-text'>{` ${t("title2")}`}</span>
                        </h2>
                    </div>
                    <p className='text-subtitle-blue text-xs sm:text-sm lg:text-base text-start lg:max-w-[408px] w-full'>
                        {t("description")}
                    </p>
                </div>
                <span className='grid grid-cols-1 lg:grid-cols-3 gap-7'>
                    {
                        domain.map((x, i) => {
                            return (
                                <div key={i}>
                                    <Domain image={x.image} title={x.title} description={x.description} />
                                </div>
                            )
                        })
                    }
                </span>
            </div>
        </div>
    )
}

export default GridDomain
