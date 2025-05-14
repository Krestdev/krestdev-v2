import React from 'react'
import { AccordionComp } from './AccordionComp'
import { useTranslations } from 'next-intl'
import Reveal from '@/components/reveal'

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
        <div className="w-full v-space flex flex-col gap-10 items-center justify-center">
            <Reveal y={15} blur={6}>
                <h2>{`FAQ (${t("title")})`}</h2>
            </Reveal>
            <AccordionComp items={items} />
        </div>
    )
}

export default FAQ
