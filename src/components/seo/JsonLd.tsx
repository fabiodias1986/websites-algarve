import { getTranslations } from 'next-intl/server';

interface JsonLdProps {
    locale: string;
}

export async function JsonLd({ locale }: JsonLdProps) {
    const t = await getTranslations({ locale });
    const baseUrl = 'https://websitesalgarve.pt';
    const currentUrl = locale === 'pt' ? baseUrl : `${baseUrl}/${locale}`;

    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Websites Algarve',
        url: baseUrl,
        logo: `${baseUrl}/logo2.svg`,
        sameAs: [
            'https://www.instagram.com/websitesalgarve',
            'https://www.linkedin.com/company/websitesalgarve'
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+351910908608',
            contactType: 'customer service',
            areaServed: 'PT',
            availableLanguage: ['Portuguese', 'English']
        },
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Algarve',
            addressCountry: 'PT'
        }
    };

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: t('Metadata.title'),
        description: t('Metadata.description'),
        url: currentUrl,
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${baseUrl}/search?q={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
        }
    };

    // Helper to strip rich text tags for JSON-LD
    const sanitize = (text: any) => {
        if (typeof text !== 'string') return String(text);
        return text
            .replace(/<break\s*\/?>|<\/break>/g, ' ')
            .replace(/<highlight>|<\/highlight>/g, '')
            .trim();
    };

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Web Design & Development',
        provider: {
            '@type': 'Organization',
            name: 'Websites Algarve'
        },
        areaServed: {
            '@type': 'Place',
            name: 'Algarve'
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: sanitize(t.raw('Pricing.title')),
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: t('Pricing.landing_page'),
                        description: t('Pricing.landing_page_desc')
                    },
                    price: '350.00',
                    priceCurrency: 'EUR'
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: t('Pricing.business_site'),
                        description: t('Pricing.business_site_desc')
                    },
                    price: '650.00',
                    priceCurrency: 'EUR'
                }
            ]
        }
    };

    // Generate FAQ Schema dynamically
    const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11'];
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqKeys.map(key => ({
            '@type': 'Question',
            name: t(`FAQ.${key}`),
            acceptedAnswer: {
                '@type': 'Answer',
                text: t(`FAQ.${key.replace('q', 'a')}`)
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    );
}
