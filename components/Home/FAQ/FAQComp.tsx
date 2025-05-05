import React from 'react'
import { AccordionComp } from './AccordionComp'
import { useTranslations } from 'next-intl'

const FAQ = () => {
    const t = useTranslations("FAQ")
    const items = [
        {
            trigger: t("Question1.title"),
            content: t("Question1.content"),
        },
        {
            trigger: t("Question2.title"),
            content: t("Question2.content"),
        },
        {
            trigger: t("Question3.title"),
            content: t("Question3.content"),
        },
        {
            trigger: t("Question4.title"),
            content: t("Question4.content"),
        },
        {
            trigger: t("Question5.title"),
            content: t("Question5.content"),
        },
    ]

    return (
        <div className="w-full py-[96px] flex flex-col gap-10 items-center justify-center">
            <h2>{"FAQ(Foire aux Question)"}</h2>
            <AccordionComp items={items} />
        </div>
    )
}

export default FAQ
