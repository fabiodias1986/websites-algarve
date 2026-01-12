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

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleLocaleChange = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
    };

    const flags: Record<string, string> = {
        pt: "🇵🇹",
        en: "🇺🇸",
        es: "🇪🇸",
        fr: "🇫🇷",
        de: "🇩🇪",
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full w-8 h-8 bg-white/5 hover:bg-white/10">
                    <span className="text-lg">{flags[locale] || <Globe className="h-4 w-4" />}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-[#0A0A0A] border-slate-800">
                {Object.entries(flags).map(([key, flag]) => (
                    <DropdownMenuItem
                        key={key}
                        onClick={() => handleLocaleChange(key)}
                        className="cursor-pointer text-slate-200 hover:bg-slate-800 focus:bg-slate-800"
                    >
                        <span className="mr-2">{flag}</span>
                        <span className="uppercase text-xs font-bold">{key}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
