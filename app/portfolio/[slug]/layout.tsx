// app/[locale]/login/layout.tsx

import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string, slug: string }> }): Promise<Metadata> {

  const { locale, slug } = await params
  const t = await getTranslations({ locale, namespace: "Portfolio.Projet" });

  return {
    title: `${t("title")} | ${slug}`,
    description: t("description"),
  };
}

export default function ProjetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
}
