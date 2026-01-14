import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    locales: ['en', 'pt', 'es', 'fr', 'de'],
    defaultLocale: 'pt',
    localePrefix: 'always',
    localeDetection: false
});


export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
