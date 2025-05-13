import React from "react";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[120px] xl:pt-[180px] relative">
      <img
        src="/images/hero.webp"
        alt="hero"
        className="absolute top-0 left-0 -z-10 w-full h-full max-h-full sm:max-h-[80%] object-cover"
      />
      <div className="w-full max-w-[1400px] mx-auto px-7 flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-5 w-full">
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
              <Link href={"/portofolio"}>
                <Button size={"hero"}>{t("portfolio")}</Button>
              </Link>
            </div>
        </div>
          <img
            src="/images/hero-image.webp"
            alt="projet"
            className="w-full h-auto"
          />
      </div>
    </section>
  );
};

export default Hero;
