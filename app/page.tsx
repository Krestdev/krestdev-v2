import Boost from '@/components/Home/Contact/boost';
import GridDomain from '@/components/Home/Domain/GridDomain';
import Equipe from '@/components/Home/Equipe/Equipe';
import FAQ from '@/components/Home/FAQ/FAQComp';
import Hero from '@/components/Home/Hero';
import Realisation from '@/components/Home/Realisation/Realisation';
import { ScrollCarousel } from '@/components/Home/Scroll/ScrollCarousel';
import Section from '@/components/Home/Scroll/Section';
import Statistique from '@/components/Home/Scroll/Statistique';
import Temoignage from '@/components/Home/Temoignage/Temoignage';
import { HorizontalScrollCarousel } from '@/components/horizontal-scroll';
import LocaleSwitcher from '@/components/locale-switcher';
import { TextReveal } from '@/components/ui/text-reveal';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('About');
  const t1 = useTranslations('HomePage');
  const about = [
    {
      image: "/images/mission.png",
      title: t("mission"),
      content: t("missionDescription")
    },
    {
      image: "/images/expertise.png",
      title: t("expertise"),
      content: t("expertiseDescription")
    },
    {
      image: "/images/approche.png",
      title: t("approche"),
      content: t("approachDescription")
    },
    {
      image: "/images/valeur.png",
      title: t("valeurs"),
      content: t("valuesDescription")
    },
  ]

  return (
    <div className='flex flex-col items-center justify-center overflow-clip'>
      <Hero />
      <div className='containerBloc py-0 lg:py-[96px] flex flex-col items-center justify-center'>
        <TextReveal text={t("description")} className='flex w-full justify-center' />
        <HorizontalScrollCarousel>
          {about.map((item, i) => (
            <span key={i}>
              <Section title={item.title} description={item.content} image={item.image} />
            </span>
          ))}
        </HorizontalScrollCarousel>
        <Statistique />
        <GridDomain />
        <Realisation />
        <Temoignage />
      </div>
      <Equipe />
      <FAQ />
      <Boost />
    </div>
  );
}
