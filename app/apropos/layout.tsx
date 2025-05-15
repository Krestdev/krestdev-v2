import Heading from "@/components/ui/Heading";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: "Apropos" });

    return {
        title: t("title"),
        description: t("description"),
    };
}

export default function AproposLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const t = useTranslations("Apropos");

    return (
        <div>
            <Heading title={t("title")} description={t("description")} />
            {children}
        </div>
    );
}
