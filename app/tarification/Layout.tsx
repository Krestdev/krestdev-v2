// app/[locale]/login/layout.tsx
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {

  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Tarification" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function TarificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations("Tarification");

  return (
    <div>
      {/* <Heading title={t("title")} description={t("description")} /> */}
      {children}
    </div>
  );
}
