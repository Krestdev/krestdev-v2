import React from "react";
import { useTranslations } from "next-intl";
import Nombre from "./Nombre";
import Reveal, { RevealGroup } from "@/components/reveal";

const Statistique = () => {
  const t = useTranslations("Statistics");
  const experience = (x: number) => {
    return new Date().getFullYear() - x;
  };

  return (
    <section className="w-full bg-black">
      <div className="containerBloc flex flex-col items-center gap-10">
          <Reveal y={15} blur={6}>
            <h2 className="text-white max-w-[844px]">
              {`${t("title1")} `}
              <span className="cursive-text">{t(
                "title2"
              )}</span>
            </h2>
          </Reveal>
        <RevealGroup y={20} delayGap={.5} className="w-full flex flex-col-reverse items-center xl:items-start xl:flex-row justify-between gap-7">
          <img
            src="/images/keyboard.webp"
            alt="keyboard"
            className="max-w-[408px] w-full h-auto aspect-video rounded-xl object-cover"
          />
          <div className="max-w-[735px] w-full flex flex-col items-center lg:items-start justify-start gap-5">
            <p className="text-center xl:text-left">{t("description")}</p>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-7">
              <Nombre nombre={20} uni="+" title={t("livre")} />
              <Nombre nombre={95} uni="%" title={t("clients")} />
              <Nombre nombre={experience(2020)} title={t("annee")} />
            </div>
          </div>
        </RevealGroup>
      </div>
    </section>
  );
};

export default Statistique;
