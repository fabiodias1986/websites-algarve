import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.websitesalgarve.pt';
    const lastModified = new Date();

    const locales = ['pt', 'en', 'es', 'fr', 'de'];
    const pages = ['', 'privacy', 'terms', 'cookies'];

    const routes = locales.flatMap((locale) => {
        return pages.map((page) => {
            // All locales now use a prefix (localePrefix: 'always')
            const localePath = `/${locale}`;
            const pagePath = page === '' ? '' : `/${page}`;

            const fullPath = `${localePath}${pagePath}`;

            return {
                url: `${baseUrl}${fullPath}`,
                lastModified,
                changeFrequency: 'weekly' as const,
                priority: page === '' ? 1 : 0.8,
            };
        });
    });

    return routes;
}

