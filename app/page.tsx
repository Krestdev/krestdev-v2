import Hero from '@/components/Home/Hero';
import { ScrollCarousel } from '@/components/Home/Scroll/ScrollCarousel';
import Section from '@/components/Home/Scroll/Section';
import LocaleSwitcher from '@/components/locale-switcher';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
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
    <div>
      <Hero />
      <div className='py-[96px]'>
      <ScrollCarousel
        containerHeight="750vh" // Diminue pour éviter trop de vide
        stickyHeight="1000px"    // La hauteur visible du carousel pendant le scroll
      >
        {
          about.map((x, i) => (
            <span key={i}>
              <Section title={x.title} description={x.content} image={x.image} />
            </span>
          ))
        }
      </ScrollCarousel>
      </div>
      <h1>{t("title")}</h1>
      <LocaleSwitcher />
      <span className="font-mono">Instrument sans</span>
      <p className="text-primary">primary text</p>
      <div className="my-3 ml-2 w-sm h-10 flex items-center justify-center border border-gray-border">border gray</div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ea explicabo sed eligendi, reiciendis odio possimus non aspernatur hic, doloribus libero ipsam obcaecati amet, nobis necessitatibus quam saepe eius mollitia?</p>
    </div>
  );
}
