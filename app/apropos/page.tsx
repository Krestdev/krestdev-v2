"use client"

import Boost from '@/components/Home/Contact/boost'
import Equipe from '@/components/Home/Equipe/Equipe'
import IconBox from '@/components/Home/Scroll/icon-box'
import Statistique from '@/components/Home/Scroll/Statistique'
import { HorizontalScrollCarousel } from '@/components/horizontal-scroll'
import { TextReveal } from '@/components/ui/text-reveal'
import { aboutData } from '@/data/data'
import { useTranslations } from 'next-intl'

const page = () => {
    const t = useTranslations('About');
    return (
        <div className='flex flex-col items-center justify-center overflow-clip'>
            {/* <div className='containerBloc'>
                <img src={"/images/about.webp"} alt='about-image' className='mx-auto max-w-7xl w-full h-auto aspect-[2/1] object-cover rounded-md lg:rounded-xl'/>
            </div> */}
            <div className="containerBloc flex flex-col items-center justify-center gap-10 sm:gap-[60px]">
        <TextReveal
          text={t("description")}
          className="flex w-full justify-center"
        />
        <HorizontalScrollCarousel>
          {aboutData.map((item, i) => (
            <IconBox key={i} {...item} />
          ))}
        </HorizontalScrollCarousel>
      </div>
            <Statistique />
            <Equipe />
            <Boost />
        </div>
    )
}

export default page
