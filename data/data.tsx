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
      prix: "100 000 FCFA",
      offre: [
        t("Support.offres.un"),
        t("Support.offres.deux"),
        t("Support.offres.trois"),
        t("Support.offres.quatre"),
      ],
    },
  ]
};

interface Portfolio {
  slug: string,
  nom: string,
  preview: string,
  image: string,
  lien: string,
  description: string,
  service: string
}

export function useProjetData(): Portfolio[] {
  const t = useTranslations("Portfolio.Projet.desc")

  return [
    {
      nom: "CREACONSULT",
      preview: "/images/preCrea.webp",
      image: "/images/imCrea.png",
      lien: "https://www.betcreaconsult.com/",
      description: t("un"),
      service: "Site Web",
      slug: "crea_consult"
    },
    {
      nom: "TYJU INFOSPORTS",
      preview: "/images/preTyju.webp",
      image: "/images/imTyju.png",
      lien: "https://www.tyjuinfosport.com/",
      description: t("deux"),
      service: "Site Web",
      slug: "tyju_infosport"
    },
    {
      nom: "FONDATION JEANNE CAROLINE",
      preview: "/images/preFondation.webp",
      image: "/images/imFondation.png",
      lien: "https://www.fondationjeannecarolinemfege.org/",
      description: t("trois"),
      service: "Site Web",
      slug: "fondationjeannecaroline"
    },
    {
      nom: "COTRAF",
      preview: "/images/preCotraf.webp",
      image: "/images/imCotraf.png",
      lien: "https://cotraf-cm.com/",
      description: t("quartre"),
      service: "Site Web",
      slug: "cotraf"
    },
    {
      nom: "SAGA AFRICA",
      preview: "/images/preSaga.webp",
      image: "/images/imSaga.png",
      lien: "https://www.saga-africa.com/",
      description: t("cinq"),
      service: "Site Web",
      slug: "saga_africa"
    },
    {
      nom: "KREST HOLDING",
      preview: "/images/preKrest.webp",
      image: "/images/imKrest.png",
      lien: "https://www.krestholding.com/",
      description: t("six"),
      service: "Site Web",
      slug: "krest_holding"
    },
  ]
}

export function useTestimonialData() {
  const t = useTranslations("Temoignages.Temoin")

  return [
    {
      image: "/images/aline.webp",
      name: "Aline Ndjemba",
      titre: t("un.title"),
      description: t("un.message"),
    },
    {
      image: "/images/steve.webp",
      name: "Steve Mbarga",
      titre: t("deux.title"),
      description: t("deux.message"),
    },
    {
      image: "/images/juliette.webp",
      name: "Juliette Nguimatsia",
      titre: t("trois.title"),
      description: t("trois.message"),
    },
    {
      image: "/images/eric.webp",
      name: "Eric Fokou",
      titre: t("quartre.title"),
      description: t("quartre.message"),
    },
    {
      image: "/images/mireille.webp",
      name: "Mireille Essomba",
      titre: t("cinq.title"),
      description: t("cinq.message"),
    }
  ]
}
