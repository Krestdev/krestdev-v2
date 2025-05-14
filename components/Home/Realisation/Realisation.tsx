import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Projects from './Projects'
import { RevealGroup } from '@/components/reveal'

const Realisation = () => {
    const t = useTranslations("Realisation")
    return (
        <section className='containerBloc flex flex-col items-center gap-10 lg:gap-0 lg:items-start lg:flex-row justify-between'>
                <RevealGroup y={15} blur={6} className='max-w-[460px] w-full shrink-0 flex flex-col items-center lg:items-start gap-5'>
                    <h2 className='text-left'>
                        {t("title1")} <span className='cursive-text'>{` ${t("title2")}`}</span>
                    </h2>
                    <p className='subtitle lg:max-w-[408px] w-full text-center lg:text-start'>{t("description")}</p>
                    <Link href={"/portofolio"}>
                    <Button className='w-fit h-[40px] cursor-pointer'>{t("seeMore")}</Button>
                    </Link>
                </RevealGroup>
            <Projects />
        </section>
    )
}

export default Realisation
