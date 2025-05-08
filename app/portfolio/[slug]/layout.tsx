// app/[locale]/login/layout.tsx

import Heading from "@/components/ui/Heading";
import { getPageTitle } from "@/lib/utils";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string, slug: string }> }): Promise<Metadata> {

  const { locale, slug } = await params
  const t = await getTranslations({ locale, namespace: "Projet" });

  return {
    title: getPageTitle(t("title") + slug),
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
