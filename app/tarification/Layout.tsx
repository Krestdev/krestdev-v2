// app/[locale]/login/layout.tsx
import Heading from "@/components/ui/Heading";
import { getPageTitle } from "@/lib/utils";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {

  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Tarification" });

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
  const t = useTranslations("Tarification");

  return (
    <div>
      <Heading title={t("title")} description={t("description")} />
      {children}
    </div>
  );
}
