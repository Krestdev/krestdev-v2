import Heading from "@/components/ui/Heading";
import { getPageTitle } from "@/lib/utils";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: "Apropos" });

    return {
        title: getPageTitle(t("title")),
        description: t("description"),
    };
}

export default function LogInLayout({
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
