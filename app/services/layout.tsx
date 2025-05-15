// app/[locale]/login/layout.tsx
import Heading from "@/components/ui/Heading";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Services" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations("Services");

  return (
    <div>
      <Heading title={t("title")} description={t("description")} />
      {children}
    </div>
  );
}
