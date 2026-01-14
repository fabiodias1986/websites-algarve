import { Cookie, Info } from "lucide-react";
import { Metadata } from 'next';
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const baseUrl = 'https://www.websitesalgarve.pt';
    const path = '/cookies';
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

import { useTranslations } from "next-intl";

export default function CookiesPage() {
    const t = useTranslations("Cookies");

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

                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-playfair prose-headings:font-semibold prose-headings:text-white prose-p:text-zinc-400 prose-p:leading-loose prose-li:text-zinc-400 prose-strong:text-white">

                    <h2>{t('section1_title')}</h2>
                    <p>{t('section1_text')}</p>

                    <h2>{t('section2_title')}</h2>
                    <p>{t('section2_text')}</p>

                    <div className="overflow-hidden my-12 border border-white/5 rounded-2xl bg-white/[0.02]">
                        <table className="min-w-full text-left text-sm whitespace-nowrap m-0">
                            <thead className="uppercase tracking-wider border-b border-white/5 font-semibold text-white/50 bg-white/[0.02]">
                                <tr>
                                    <th scope="col" className="px-6 py-4 font-medium">{t('table_name')}</th>
                                    <th scope="col" className="px-6 py-4 font-medium">{t('table_type')}</th>
                                    <th scope="col" className="px-6 py-4 font-medium">{t('table_duration')}</th>
                                    <th scope="col" className="px-6 py-4 font-medium">{t('table_desc')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="px-6 py-4 font-mono text-emerald-400/80">cookie-consent</td>
                                    <td className="px-6 py-4 text-zinc-400">Essential</td>
                                    <td className="px-6 py-4 text-zinc-400">1 year</td>
                                    <td className="px-6 py-4 text-zinc-400">{t('cookie1_desc')}</td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="px-6 py-4 font-mono text-emerald-400/80">NEXT_LOCALE</td>
                                    <td className="px-6 py-4 text-zinc-400">Functional</td>
                                    <td className="px-6 py-4 text-zinc-400">Session</td>
                                    <td className="px-6 py-4 text-zinc-400">{t('cookie2_desc')}</td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="px-6 py-4 font-mono text-emerald-400/80">{t('cookie3_name')}</td>
                                    <td className="px-6 py-4 text-zinc-400">{t('cookie3_type')}</td>
                                    <td className="px-6 py-4 text-zinc-400">{t('cookie3_duration')}</td>
                                    <td className="px-6 py-4 text-zinc-400">{t('cookie3_desc')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
}
