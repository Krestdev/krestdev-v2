import { useTeamData } from '@/data/data';
import { useTranslations } from 'next-intl';
import { EquipeCar } from './EqupeCar';
import { RevealGroup } from '@/components/reveal';

const Equipe = () => {
    const t = useTranslations("Equipe");
    const equipe = useTeamData();
    return (
        <section className='w-full v-space flex flex-col items-center gap-10'
            style={{
                backgroundImage: `url("/images/team-background.webp")`,
                backgroundSize: 'cover',
            }}>
            <RevealGroup y={15} blur={6} className='max-w-7xl px-7 w-full flex flex-col items-center gap-2'>
                <h2 className='text-white max-w-[489px] w-full'>
                    {t("title1")} <span className='cursive-text'>{` ${t("title2")}`}</span>
                </h2>
                <p className='max-w-[640px] subtitle text-subtitle-blue text-center'>{t("description")}</p>
            </RevealGroup>
            <EquipeCar equipe={equipe} />
        </section>
    )
}

export default Equipe
