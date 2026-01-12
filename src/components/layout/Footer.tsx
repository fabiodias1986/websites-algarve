"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Twitter, Instagram, Linkedin, Facebook, Mail, Phone, MessageCircle } from "lucide-react";

export function Footer() {
    const t = useTranslations("Footer"); // Reusing navbar links for simplicity or create new scope
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-zinc-950 border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-12 mb-12">
                    {/* Brand & Socials */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative w-14 h-14 transition-transform duration-300 group-hover:rotate-12 flex items-center justify-center">
                                <img
                                    src="/logo2.svg"
                                    alt="Websites Algarve Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="text-2xl font-bold tracking-tighter font-geist text-white">
                                WEBSITES<span className="text-emerald-400"> ALGARVE</span>
                            </span>
                        </Link>
                        <p className="text-base text-muted-foreground max-w-sm">
                            {t('slogan')}
                        </p>
                        {/* <div className="flex gap-4 pt-4">
                            {[
                                { icon: Instagram, name: "Instagram" },
                                { icon: Linkedin, name: "LinkedIn" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    aria-label={`Visit our ${social.name} page`}
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div> */}
                    </div>

                    {/* Contacts */}
                    <div>
                        <h4 className="font-bold text-white mb-6">{t('contacts.title')}</h4>
                        <div className="flex flex-col gap-4">
                            <div>
                                <a href="tel:+351910908608" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors group">
                                    <span className="w-8 h-8 rounded bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                        <Phone className="w-4 h-4" />
                                    </span>
                                    <span>+351 910 908 608</span>
                                </a>
                                <p className="text-[10px] text-zinc-500 ml-11 mt-1">{t('contacts.call_cost')}</p>
                            </div>

                            <a href="https://wa.me/351910908608" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors group">
                                <span className="w-8 h-8 rounded bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                    <MessageCircle className="w-4 h-4" />
                                </span>
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li><Link href="/privacy" className="text-muted-foreground hover:text-white transition-colors">{t('privacy')}</Link></li>
                            <li><Link href="/terms" className="text-muted-foreground hover:text-white transition-colors">{t('terms')}</Link></li>
                            <li><Link href="/cookies" className="text-muted-foreground hover:text-white transition-colors">{t('cookies')}</Link></li>
                            <li>
                                <button
                                    onClick={() => window.dispatchEvent(new Event("reset-consent"))}
                                    className="text-muted-foreground hover:text-emerald-400 transition-colors text-left"
                                >
                                    Reset Cookies
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; {currentYear} Websites Algarve. {t('rights')}</p>
                    <p>Made with ❤️ in Algarve.</p>
                </div>
            </div>
        </footer>
    );
}
