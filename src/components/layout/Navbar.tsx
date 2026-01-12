"use client";

import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export function Navbar() {
    const t = useTranslations("Navbar");
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState("#hero");
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    useEffect(() => {
        setMounted(true);
        // If we are navigating from another page with a hash, we might want to scroll there
        // But default browser behavior might handle it if we use standard Links.

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

        // Cleanup hash from URL if present (UX: Cleaner URLs)
        if (window.location.hash) {
            // Wait a tiny bit for browser to potentially scroll, then clean
            setTimeout(() => {
                history.replaceState(null, "", window.location.pathname);
            }, 100);
        }

        return () => observer.disconnect();
    }, []);

    // Cleanup hash when returning to home from another page
    useEffect(() => {
        if (pathname === "/" && window.location.hash) {
            setTimeout(() => {
                history.replaceState(null, "", window.location.pathname);
            }, 500); // Slightly longer delay to ensure scroll happens first
        }
    }, [pathname]);

    const navLinks = [
        { href: "#hero", label: t("home") },
        { href: "#performance", label: t("performance") },
        { href: "#seo", label: t("seo") },
        { href: "#comparison", label: t("benchmarks") },
        { href: "#process", label: t("process") },
        { href: "#pricing", label: t("pricing") },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (pathname !== "/") return; // Allow default navigation on subpages

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
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-zinc-950/80 backdrop-blur-md border-b border-white/10 py-4"
                : "bg-transparent py-6 border-b border-transparent"
                }`}
        >
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between">
                    {/* Brand */}
                    <Link
                        href="/"
                        className="text-xl font-bold tracking-tighter font-geist flex items-center gap-2 group"
                    >
                        <div className="relative w-12 h-12 group-hover:rotate-12 transition-transform duration-300 flex items-center justify-center">
                            <img
                                src="/logo2.svg"
                                alt="Websites Algarve Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <span className="text-white">WEBSITES<span className="text-emerald-400"> ALGARVE</span></span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1 rounded-full bg-white/5 border border-white/10 p-1.5 backdrop-blur-sm">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href;
                            const isHomePage = pathname === "/";
                            const href = isHomePage ? link.href : `/${link.href}`;

                            return (
                                <Link
                                    key={link.href}
                                    href={href}
                                    onClick={(e) => isHomePage && scrollToSection(e, link.href)}
                                    className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full ${isActive && isHomePage
                                        ? "text-black bg-emerald-400"
                                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="https://wa.me/351910908608"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-emerald-500 hover:bg-emerald-400 text-black px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(52,211,153,0.5)] active:scale-95 flex items-center gap-2 group"
                        >
                            <FaWhatsapp className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                            {t("contact")}
                        </a>
                        {mounted && <LanguageSwitcher />}
                    </div>

                    {/* Mobile Nav Button */}
                    <div className="md:hidden flex items-center gap-2">
                        {mounted && <LanguageSwitcher />}
                        {mounted ? (
                            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full" aria-label="Toggle menu">
                                        <Menu className="h-5 w-5" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="top" className="h-full bg-black/95 backdrop-blur-2xl border-white/5 pt-20">
                                    <div className="flex flex-col items-center justify-center gap-8 h-full">
                                        {navLinks.map((link) => {
                                            const isHomePage = pathname === "/";
                                            const href = isHomePage ? link.href : `/${link.href}`;

                                            return (
                                                <Link
                                                    key={link.href}
                                                    href={href}
                                                    onClick={(e) => {
                                                        if (isHomePage) {
                                                            scrollToSection(e, link.href);
                                                        }
                                                        setMobileMenuOpen(false);
                                                    }}
                                                    className="text-3xl font-bold tracking-tight text-white hover:text-emerald-400 transition-colors font-playfair"
                                                >
                                                    {link.label}
                                                </Link>
                                            );
                                        })}
                                        <a
                                            href="https://wa.me/351910908608"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-64 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-full py-6 text-lg uppercase tracking-wider mt-4 flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(52,211,153,0.5)] active:scale-95 group"
                                        >
                                            <FaWhatsapp className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                                            {t("contact")}
                                        </a>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        ) : (
                            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full" aria-label="Toggle menu">
                                <Menu className="h-5 w-5" />
                            </Button>
                        )}
                    </div>

                </div>
            </div>
        </nav>
    );
}
