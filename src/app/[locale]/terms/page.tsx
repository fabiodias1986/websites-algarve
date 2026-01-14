
import { useTranslations } from "next-intl";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const baseUrl = 'https://www.websitesalgarve.pt';
    const path = '/terms';
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


export default function TermsPage() {
    const t = useTranslations("Terms");

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

                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-playfair prose-headings:font-semibold prose-headings:text-white prose-p:text-zinc-400 prose-p:leading-loose prose-li:text-zinc-400 prose-strong:text-white hover:prose-a:text-emerald-400">

                    <h2>{t('section1_title')}</h2>
                    <p>{t('section1_text')}</p>

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

                    <h2>{t('section4_title')}</h2>
                    <p>{t('section4_text')}</p>

                    <h2>{t('section5_title')}</h2>
                    <p>{t('section5_text')}</p>

                    <h2>{t('section6_title')}</h2>
                    <p>{t('section6_text')}</p>

                </div>
            </div>
        </div>
    );
}
