import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";
import { config } from "@/data/config";

const primaryFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const secondaryFont = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: "italic"
});

export const metadata: Metadata = {
  title: {
    template: `%s - ${config.name}`,
    default: `${config.name} - Transformez vos ambitions digitales en réussites mesurables.`,
  },
  description: config.description,
  keywords: ["KrestDev", "Krest", "KrestDev.com", "Douala", "Cameroun", "Développement", "Web", "Digital", "Marketing", "SEO", "Site Web"],
  authors: [{ name: "KrestDev" }],
  creator: "KrestDev",
  publisher: "KrestDev",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph:{
    title: {
      template: `%s - ${config.name}`,
      default: `${config.name} - Transformez vos ambitions digitales en réussites mesurables.`
    },
    description: config.description,
    url: config.url,
    siteName: config.name,
    //images: []  to-do:add images for social media sharing
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${primaryFont.variable} ${secondaryFont.variable} antialiased`}
      >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
