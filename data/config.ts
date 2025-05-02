import { Config, Contact } from "@/types/config";
import { useTranslations } from "next-intl";

export const config:Config = {
    name: "KrestDev",
    description: "Votre Partenaire Digital Stratégique. Basés à Douala, nous transformons vos ambitions digitales en réussites mesurables.",
    version: "1.0.0",
    url:"https://krestdev.com",
}

export const contactData:Contact = {
    email: "contact@krestdev.com",
    phone: "+237 6 99 99 99 99",
    address: "Tradex Bonamoussadi, Douala Cameroun"
}