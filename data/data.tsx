// aboutData.ts (ou dans le même fichier)
import { useTranslations } from "next-intl"

export function useAboutData() {
  const t = useTranslations("About")

  return [
    {
      image: "/images/mission.png",
      title: t("mission"),
      content: t("missionDescription"),
    },
    {
      image: "/images/expertise.png",
      title: t("expertise"),
      content: t("expertiseDescription"),
    },
    {
      image: "/images/approche.png",
      title: t("approche"),
      content: t("approachDescription"),
    },
    {
      image: "/images/valeur.png",
      title: t("valeurs"),
      content: t("valuesDescription"),
    },
  ]
}
export interface TarifItem {
  image: string
  subDesc: string
  title: string
  description: string
  prix?: string
  offre: string[]
}

export function useTarifData(): TarifItem[] {
  const t = useTranslations("Tarification.Grid")

  return [
    {
      image: "/images/start.png",
      subDesc: t("Start.sub"),
      title: t("Start.title"),
      description: t("Start.description"),
      prix: "300 000 FCFA",
      offre: [
        t("Start.offres.un"),
        t("Start.offres.deux"),
        t("Start.offres.trois"),
        t("Start.offres.quatre"),
      ],
    },
    {
      image: "/images/boost.png",
      subDesc: t("Boost.sub"),
      title: t("Boost.title"),
      description: t("Boost.description"),
      prix: "800 000 FCFA",
      offre: [
        t("Boost.offres.un"),
        t("Boost.offres.deux"),
        t("Boost.offres.trois"),
        t("Boost.offres.quatre"),
        t("Boost.offres.cinq"),
      ],
    },
    {
      image: "/images/scale.png",
      subDesc: t("Scale.sub"),
      title: t("Scale.title"),
      description: t("Scale.description"),
      offre: [
        t("Scale.offres.un"),
        t("Scale.offres.deux"),
        t("Scale.offres.trois"),
        t("Scale.offres.quatre"),
        t("Scale.offres.cinq"),
      ],
    },
    {
      image: "/images/support.png",
      subDesc: t("Support.sub"),
      title: t("Support.title"),
      description: t("Support.description"),
      prix: "300 000 FCFA",
      offre: [
        t("Support.offres.un"),
        t("Support.offres.deux"),
        t("Support.offres.trois"),
        t("Support.offres.quatre"),
      ],
    },
  ]
}
