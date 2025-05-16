import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "../ui/button";
import Reveal, { RevealGroup } from "../reveal";

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <section className="w-full py-12 sm:pb-16 md:py-20 lg:pb-24 xl:pb-[120px] pt-24 sm:pt-32 xl:pt-[180px] relative">
      <img
        src="/images/hero.webp"
        alt="hero"
        className="absolute top-0 left-0 -z-10 w-full h-full max-h-full sm:max-h-[80%] object-cover"
      />
      <div className="w-full max-w-[1400px] mx-auto px-7 flex flex-col items-center justify-center gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20">
        <RevealGroup y={15} blur={8} opacity={0} delay={0} delayGap={0.2} className="flex flex-col items-center justify-center gap-5 w-full">
            <h1 className="text-white max-w-[735px]">
              {t("title1")}
              <span className="cursive-text">{t("title2")}</span>
            </h1>
            <p className="hero-subtitle">
              {t("description")}
            </p>
            <div className="w-full flex flex-wrap gap-4 items-center justify-center sm:gap-7">
              <Link href={"/services"}>
                <Button size={"hero"} variant={"white"}>
                  {t("services")}
                </Button>
              </Link>
              <Link href={"/portfolio"}>
                <Button size={"hero"}>{t("portfolio")}</Button>
              </Link>
            </div>
        </RevealGroup>
        <Reveal y={20} delay={0.4}>
          <img
            src="/images/hero-image.webp"
            alt="projet"
            className="w-full h-auto"
          />
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
