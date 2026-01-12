import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://websitesalgarve.pt';
    const lastModified = new Date();

    // Supported locales from navigation config or hardcoded if simple
    const locales = ['pt', 'en', 'es', 'fr', 'de'];

    const routes = locales.flatMap((locale) => {
        // Root path for each locale
        const localePath = locale === 'pt' ? '' : `/${locale}`; // Assuming pt is default and at root, OR if using prefix based routing for all.
        // Actually, usually default locale is at root implies logic. 
        // Let's look at middleware/navigation. Usually it's /pt, /en etc. 
        // If strategy is prefix_always, then everything has prefix. 
        // If strategy is prefix_except_default, then default is root.

        // Safest bet for sitemap is explicit paths. 
        // Let's assume standard structure:
        // https://websitesalgarve.pt/ (default pt)
        // https://websitesalgarve.pt/en
        // https://websitesalgarve.pt/es
        // etc.

        return [
            {
                url: `${baseUrl}/${locale}`,
                lastModified,
                changeFrequency: 'weekly' as const,
                priority: 1,
            }
        ];
    });

    // Also add the absolute root if necessary, or rely on redirects. 
    // Usually sitemap should contain canonical URLs. 

    return routes;
}
