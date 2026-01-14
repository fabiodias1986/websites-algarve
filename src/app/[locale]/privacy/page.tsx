import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Shield, Lock } from "lucide-react";

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const baseUrl = 'https://www.websitesalgarve.pt';
    const path = '/privacy';
    const currentUrl = `${baseUrl}/${locale}${path}`;

    return {
        alternates: {
            canonical: currentUrl,
            languages: {
                'pt': `${baseUrl}/pt${path}`,
                'en': `${baseUrl}/en${path}`,
                'es': `${baseUrl}/es${path}`,
                'fr': `${baseUrl}/fr${path}`,
                'de': `${baseUrl}/de${path}`,
                'x-default': `${baseUrl}/pt${path}`,
            },
        }
    };
}

export default function PrivacyPage() {
    const t = useTranslations("Privacy");

    return (
        <div className="bg-zinc-950 min-h-screen pt-32 pb-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10 max-w-3xl">
                <div className="mb-16 text-left">
                    <h1 className="text-4xl md:text-5xl font-bold font-playfair text-white mb-6">
                        {t('title')}
                    </h1>
                    <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
                        {t('subtitle')}
                    </p>
                    <p className="text-sm text-zinc-600 mt-6 font-medium tracking-wide uppercase">
                        {t('last_updated')}
                    </p>
                </div>

                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-playfair prose-headings:font-semibold prose-headings:text-white prose-p:text-zinc-400 prose-p:leading-loose prose-li:text-zinc-400 prose-strong:text-white prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline">

                    <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 mb-16">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3 mt-0">
                            <Lock className="w-5 h-5 text-emerald-500" />
                            {t('summary_title')}
                        </h3>
                        <p className="text-base text-zinc-300 m-0">
                            {t('summary_text')}
                        </p>
                    </div>

                    <h2>{t('section1_title')}</h2>
                    <p>{t('section1_text')}</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>{t('section1_li1')}</li>
                        <li>{t('section1_li2')}</li>
                        <li>{t('section1_li3')}</li>
                    </ul>

                    <h2>{t('section2_title')}</h2>
                    <p>{t('section2_text')}</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>{t('section2_li1')}</li>
                        <li>{t('section2_li2')}</li>
                        <li>{t('section2_li3')}</li>
                        <li>{t('section2_li4')}</li>
                    </ul>

                    <h2>{t('section3_title')}</h2>
                    <p>{t('section3_text')}</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>{t('section3_li1')}</li>
                        <li>{t('section3_li2')}</li>
                        <li>{t('section3_li3')}</li>
                    </ul>

                    <h2>{t('section4_title')}</h2>
                    <p>{t('section4_text')}</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>{t('section4_li1')}</li>
                        <li>{t('section4_li2')}</li>
                    </ul>

                    <h2>{t('section5_title')}</h2>
                    <p>{t('section5_text')}</p>

                    <h2>{t('section6_title')}</h2>
                    <p>{t('section6_text')}</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>{t('section6_li1').split(':')[0]}:</strong> {t('section6_li1').split(':')[1]}</li>
                        <li><strong>{t('section6_li2').split(':')[0]}:</strong> {t('section6_li2').split(':')[1]}</li>
                        <li><strong>{t('section6_li3').split(':')[0]}:</strong> {t('section6_li3').split(':')[1]}</li>
                        <li><strong>{t('section6_li4').split(':')[0]}:</strong> {t('section6_li4').split(':')[1]}</li>
                        <li><strong>{t('section6_li5').split(':')[0]}:</strong> {t('section6_li5').split(':')[1]}</li>
                    </ul>

                    <h2>{t('section7_title')}</h2>
                    <p>{t('section7_text')}</p>
                </div>
            </div>
        </div>
    );
}
