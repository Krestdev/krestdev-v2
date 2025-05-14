"use client"

import Reveal, { RevealGroup } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const Boost = () => {
    const t = useTranslations("Boost")
    return (
        <section className='flex flex-col items-center gap-10 py-[60px] md:py-[96px] bg-radial-[at_50%_0%] from-[#013B7D] via-[#000000] to-[#061D37] w-full '>
            <RevealGroup y={15} blur={6} className='flex flex-col items-center gap-2 px-7 max-w-[1280px] text-center'>
                <h2 className='text-white max-w-[844px] w-full'>
                    {t("title1")} <span className='cursive-text'>{` ${t("title2")}`}</span>
                </h2>
                <p className='max-w-[540px] subtitle text-subtitle-blue'>{t("description")}</p>
            </RevealGroup>
            <Reveal y={20} delay={0.4}>
                <Link href={"/contact"}>
                    <Button variant={"white"} size={"hero"}>{t("button")}</Button>
                </Link>
            </Reveal>
        </section>
    )
}

export default Boost
