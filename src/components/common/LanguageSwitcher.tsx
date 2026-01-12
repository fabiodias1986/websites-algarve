"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation"; // We need to create this
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

import { US, PT, ES, FR, DE } from 'country-flag-icons/react/3x2';

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleLocaleChange = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
    };

    const flags = {
        pt: <PT title="Português" className="w-5 h-5 rounded-[2px]" />,
        en: <US title="English" className="w-5 h-5 rounded-[2px]" />,
        es: <ES title="Español" className="w-5 h-5 rounded-[2px]" />,
        fr: <FR title="Français" className="w-5 h-5 rounded-[2px]" />,
        de: <DE title="Deutsch" className="w-5 h-5 rounded-[2px]" />,
    };

    const CurrentFlag = flags[locale as keyof typeof flags];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full w-8 h-8 bg-white/5 hover:bg-white/10 transition-colors">
                    {CurrentFlag || <Globe className="h-4 w-4 text-zinc-400" />}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-zinc-950/90 backdrop-blur-xl border-white/10 p-1 min-w-[140px]">
                {Object.entries(flags).map(([key, flag]) => (
                    <DropdownMenuItem
                        key={key}
                        onClick={() => handleLocaleChange(key)}
                        className={`
                            cursor-pointer flex items-center gap-3 px-3 py-2 rounded-md transition-colors
                            ${locale === key ? 'bg-white/10 text-white' : 'text-zinc-400 hover:text-white hover:bg-white/5'}
                        `}
                    >
                        {flag}
                        <span className="uppercase text-xs font-bold tracking-wider">{key}</span>
                        {locale === key && (
                            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400 box-shadow-glow" />
                        )}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
