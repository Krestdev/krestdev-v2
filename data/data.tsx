// aboutData.ts (ou dans le même fichier)
import { iconBoxProps } from "@/components/Home/Scroll/icon-box";
import { useTranslations } from "next-intl"

export const aboutData:iconBoxProps[] = [
  {
    image: "/images/mission.png",
    title: "mission",
    description:"missionDescription",
  },
  {
    image: "/images/expertise.png",
    title:"expertise",
    description:"expertiseDescription",
  },
  {
    image: "/images/approche.png",
    title:"approche",
    description:"approachDescription",
  },
  {
    image: "/images/valeur.png",
    title:"valeurs",
    description:"valuesDescription",
  }
] 

export function useTeamData() {
  const t = useTranslations("Equipe");

  return  [
        {
            nom: "Guidaye Viche",
            poste: t("chef"),
            image: "/images/viche.webp"
        },
        {
            nom: "Nguezet Jordan",
            poste: t("backend"),
            image: "/images/jordan.webp"
        },
        {
            nom: "Adiogo Hans",
            poste: t("frontend"),
            image: "/images/jason.webp"
        },
        {
            nom: "Nzogning Socrate",
            poste: t("frontend"),
            image: "/images/socrate.webp"
        },
        {
            nom: "Makong Khareem",
            poste: t("graphic"),
            image: "/images/khareem.webp"
        },
        {
          nom: "Claude Sandra Deutou",
          poste: t("content"),
          image:"/images/deutou.webp"
        },
        {
          nom: "Prospert Woike",
          poste: t("communityManager"),
          image: "/images/prospert.webp"
        },
        {
          nom: "Get Nguessong",
          poste: t("marketing"),
          image: "/images/get.webp"
        }
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
    {
      nom: "LE CARINO PIZZERIA",
      preview: "/images/preCarino.webp",
      image: "/images/imCarino.webp",
      lien: "https://www.le-carino.com/",
      description: t("sept"),
      service: "Site Web",
      slug: "le_carino_pizzeria"
    },
  ]
}

export function useTestimonialData() {
  const t = useTranslations("Temoignages.Temoin")

  return [
    {
      image: "/images/aline.webp",
      name: "Nadia Ngouaka",
      titre: t("un.title"),
      description: t("un.message"),
    },
    {
      image: "/images/steve.webp",
      name: "Paule",
      titre: t("deux.title"),
      description: t("deux.message"),
    },
    {
      image: "/images/juliette.webp",
      name: "Francesco Feliziani",
      titre: t("trois.title"),
      description: t("trois.message"),
    },
    {
      image: "/images/eric.webp",
      name: "Fokou Jocelyne",
      titre: t("quartre.title"),
      description: t("quartre.message"),
    },
    {
      image: "/images/mireille.webp",
      name: "Ngo Typhanie",
      titre: t("cinq.title"),
      description: t("cinq.message"),
    }
  ]
}
