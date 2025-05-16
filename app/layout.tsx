import Layout from "@/components/layout";
import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getTranslations } from 'next-intl/server';
import { Instrument_Serif, Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Toaster } from 'sonner'; // Import ajouté
import "./globals.css";

const primaryFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

const secondaryFont = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: "italic"
});

export async function generateMetadata():Promise<Metadata>{
  const t = await getTranslations("seo");
  const config = {
    name: "KrestDev",
    description: "description",
    version: "1.0.0",
    url:"https://krestdev.com",
}
  return {
  title: {
    template: `%s - ${config.name}`,
    default: `${config.name} - ${t("title")}.`,
  },
  description: t(config.description),
  keywords: ["KrestDev", "Krest", "KrestDev.com", "Douala", "Cameroun", "Développement", "Web", "Digital", "Marketing", "SEO", "Site Web", "website", "Cameroon"],
  authors: [{ name: "KrestDev" }],
  creator: "KrestDev",
  publisher: "KrestDev",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: {
      template: `%s - ${config.name}`,
      default: `${config.name} - ${t("title")}.`
    },
    description: t(config.description),
    url: config.url,
    siteName: config.name,
    images: [{
          url: "/og.webp",
          width: 1200,
          height: 630,
          alt: config.name,
        }]  
  }
}
}


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body
        className={`${primaryFont.variable} ${secondaryFont.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale}>
          <Layout>
            {children}
            <Toaster 
              position="top-center"
              richColors
              closeButton
              expand={false}
              visibleToasts={3}
            />
          </Layout>
          <GoogleAnalytics gaId="G-GQZ5DQE1LS"/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}