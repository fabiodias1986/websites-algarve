import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { ConsentModal } from "@/components/legal/ConsentModal";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import "../globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const outfit = Outfit({
    variable: "--font-playfair",
    subsets: ["latin"],
});

import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata' });

    const baseUrl = 'https://www.websitesalgarve.pt';
    const currentUrl = locale === 'pt' ? baseUrl : `${baseUrl}/${locale}`;

    return {
        title: t('title'),
        description: t('description'),
        keywords: t('keywords'),
        authors: [{ name: 'Websites Algarve' }],
        creator: 'Websites Algarve',
        publisher: 'Websites Algarve',
        metadataBase: new URL(baseUrl),
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        alternates: {
            canonical: currentUrl,
            languages: {
                'pt': `${baseUrl}`,
                'en': `${baseUrl}/en`,
                'es': `${baseUrl}/es`,
                'fr': `${baseUrl}/fr`,
                'de': `${baseUrl}/de`,
            },
        },
        openGraph: {
            title: t('title'),
            description: t('description'),
            url: currentUrl,
            siteName: 'Websites Algarve',
            locale: locale,
            type: 'website',
            images: [
                {
                    url: `${baseUrl}/images/logo2.svg`, // Ensure this image exists or use a variable
                    width: 1200,
                    height: 630,
                    alt: t('title'),
                },
            ],
            alternateLocales: ['pt', 'en', 'es', 'fr', 'de'].filter((l) => l !== locale),
        },
        twitter: {
            card: 'summary_large_image',
            title: t('title'),
            description: t('description'),
            creator: '@websitesalgarve', // Placeholder if no handle
            images: [`${baseUrl}/images/twitter-image.jpg`], // Ensure this image exists
        },
        verification: {
            google: '6olK5u3RrUAYu-T2RanJ5rj8eircfTmAcSkIGTbuqBs',
        },
    };
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const messages = await getMessages();

    return (
        <html lang={locale} className="dark" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}
            >
                <JsonLd locale={locale} />
                <NextIntlClientProvider messages={messages}>
                    <Navbar />
                    <main className="flex-grow">
                        {children}
                    </main>
                    <Footer />
                    <ConsentModal />
                    <GoogleAnalytics />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
