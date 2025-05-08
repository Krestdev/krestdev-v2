import { getPageTitle } from "@/lib/utils";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {

  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Portfolio" });

  return {
    title: getPageTitle(t("title")),
    description: t("description"),
  };
}

export default function PortfolioLayout({
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
