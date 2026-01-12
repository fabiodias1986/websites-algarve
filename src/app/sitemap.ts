import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://websitesalgarve.pt';
    const lastModified = new Date();

    return [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: 'weekly',
            priority: 1,
        },
        // We can add more routes here if they exist, like /about, /contact etc.
        // Assuming single page mostly for now, but adding locale variants if needed.
    ];
}
