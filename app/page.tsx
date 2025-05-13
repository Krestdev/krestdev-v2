"use client";

import Boost from "@/components/Home/Contact/boost";
import GridDomain from "@/components/Home/Domain/GridDomain";
import Equipe from "@/components/Home/Equipe/Equipe";
import FAQ from "@/components/Home/FAQ/FAQComp";
import Hero from "@/components/Home/Hero";
import Realisation from "@/components/Home/Realisation/Realisation";
import IconBox from "@/components/Home/Scroll/icon-box";
import Statistique from "@/components/Home/Scroll/Statistique";
import Temoignage from "@/components/Home/Temoignage/Temoignage";
import { HorizontalScrollCarousel } from "@/components/horizontal-scroll";
import { TextReveal } from "@/components/ui/text-reveal";
import { aboutData } from "@/data/data";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("About");
  return (
    <div className="flex flex-col items-center justify-center overflow-clip">
      <Hero />
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
      <GridDomain />
      <Realisation />
      <Temoignage />
      <Equipe />
      <FAQ />
      <Boost />
    </div>
  );
}
