"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export function Navbar() {
    const t = useTranslations("Navbar");
    const [activeSection, setActiveSection] = useState("#hero");
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    useEffect(() => {
        const sectionMapping: Record<string, string> = {
            "hero": "#hero",
            "mission": "#hero",
            "performance": "#performance",
            "technologies": "#performance",
            "techstack": "#performance",
            "seo": "#seo",
            "impact": "#seo",
            "comparison": "#comparison",
            "process": "#process",
            "pricing": "#pricing",
            "contact": "#pricing",
            "faq": "#pricing",
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
                        const parentId = sectionMapping[entry.target.id];
                        if (parentId) {
                            setActiveSection(parentId);
                        }
                    }
                });
            },
            {
                threshold: [0.1, 0.5],
                rootMargin: "-20% 0px -40% 0px"
            }
        );

        // Observe all possible sections
        Object.keys(sectionMapping).forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const navLinks = [
        { href: "#hero", label: t("home") },
        { href: "#performance", label: t("performance") },
        { href: "#seo", label: t("seo") },
        { href: "#comparison", label: t("benchmarks") },
        { href: "#process", label: t("process") },
        { href: "#pricing", label: t("pricing") },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offset = 80; // Navbar height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <header className="fixed top-0 w-full z-50 px-4 pt-6 transition-all duration-300 pointer-events-none">
            <nav
                className={cn(
                    "max-w-6xl mx-auto rounded-full border border-white/10 transition-all duration-500 pointer-events-auto",
                    scrolled
                        ? "bg-black/80 backdrop-blur-xl py-2 md:py-3 px-6 md:px-8 shadow-2xl shadow-emerald-500/10"
                        : "bg-white/5 backdrop-blur-md py-3 md:py-4 px-6 md:px-10"
                )}
            >
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-lg font-bold tracking-tighter font-playfair flex items-center gap-2 group"
                    >
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center p-0.5 group-hover:rotate-12 transition-transform duration-300">
                            <div className="w-full h-full bg-black rounded-[6px] flex items-center justify-center text-[10px] font-mono text-emerald-400">
                                AW
                            </div>
                        </div>
                        <span className="text-white hidden sm:inline-block">ALGARVE<span className="text-emerald-400"> WEBSITES</span></span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className={cn(
                                    "px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] font-playfair transition-colors relative group",
                                    activeSection === link.href ? "text-emerald-400" : "text-zinc-400 hover:text-zinc-200"
                                )}
                            >
                                {link.label}
                                {activeSection === link.href && (
                                    <motion.span
                                        layoutId="active-nav-indicator"
                                        className="absolute bottom-1 left-5 right-5 h-0.5 bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,1)]"
                                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                    />
                                )}
                            </a>
                        ))}
                        <div className="w-px h-6 bg-white/10 mx-4" />
                        <LanguageSwitcher />
                    </div>

                    {/* Actions */}
                    <div className="hidden md:block">
                        <Button
                            variant="default"
                            size="sm"
                            onClick={(e) => {
                                const element = document.querySelector('#contact');
                                if (element) {
                                    const offset = 80;
                                    const bodyRect = document.body.getBoundingClientRect().top;
                                    const elementRect = element.getBoundingClientRect().top;
                                    const elementPosition = elementRect - bodyRect;
                                    const offsetPosition = elementPosition - offset;
                                    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                                }
                            }}
                            className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-full px-6 text-[10px] uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                        >
                            {t("contact")}
                        </Button>
                    </div>

                    {/* Mobile Nav Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <LanguageSwitcher />
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="top" className="h-full bg-black/95 backdrop-blur-2xl border-white/5 pt-20">
                                <div className="flex flex-col items-center justify-center gap-8 h-full">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            onClick={(e) => {
                                                scrollToSection(e, link.href);
                                                // Sheet close logic would go here if accessible, 
                                                // but standard Sheet component doesn't expose it easily in this pattern.
                                                // We'll rely on the default behavior for now.
                                            }}
                                            className="text-3xl font-bold tracking-tight text-white hover:text-emerald-400 transition-colors font-playfair"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                    <Button
                                        onClick={(e) => {
                                            const element = document.querySelector('#contact');
                                            if (element) {
                                                const offset = 80;
                                                const bodyRect = document.body.getBoundingClientRect().top;
                                                const elementRect = element.getBoundingClientRect().top;
                                                const elementPosition = elementRect - bodyRect;
                                                const offsetPosition = elementPosition - offset;
                                                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                                            }
                                        }}
                                        className="w-64 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-full py-6 text-lg uppercase tracking-wider mt-4"
                                    >
                                        {t("contact")}
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </header>
    );
}
