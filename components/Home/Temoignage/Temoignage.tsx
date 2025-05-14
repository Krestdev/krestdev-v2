import { RevealGroup } from '@/components/reveal'
import { AutoScroll } from '@/components/ui/AutoScroll'
import { useTestimonialData } from '@/data/data'
import { useTranslations } from 'next-intl'

interface Temoignage {
    image: string
    name: string
    description: string
    titre: string
}

const Temoignage = () => {
    const t = useTranslations("Temoignages");
    const temoignages = useTestimonialData()
    return (
        <div className='containerBloc flex flex-col gap-10 items-center'>
            <RevealGroup y={15} blur={6} className='flex flex-col items-center gap-2 px-7 max-w-[844px]'>
                <h2 className='text-center'>
                    {t("title1")} <span className='cursive-text'>{` ${t("title2")}`}</span>
                </h2>
                <p className='subtitle'>{t("description")}</p>
            </RevealGroup>
            <AutoScroll item={temoignages} />
        </div>
    )
}

export default Temoignage
