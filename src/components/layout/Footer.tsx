"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
    const t = useTranslations("Navbar"); // Reusing navbar links for simplicity or create new scope
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-zinc-950 border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative w-14 h-14 transition-transform duration-300 group-hover:rotate-12 flex items-center justify-center">
                                <img
                                    src="/logo2.svg"
                                    alt="Websites Algarve Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="text-2xl font-bold tracking-tighter font-geist text-white">
                                WEBSITES<span className="text-white/50"> ALGARVE</span>
                            </span>
                        </Link>
                        <p className="text-muted-foreground max-w-sm">
                            Helping Algarve businesses dominate the digital world with high-performance websites and AI integration.
                        </p>
                        <div className="flex gap-4 pt-4">
                            {[
                                { icon: Twitter, name: "Twitter" },
                                { icon: Instagram, name: "Instagram" },
                                { icon: Linkedin, name: "LinkedIn" },
                                { icon: Facebook, name: "Facebook" }
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
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Menu</h4>
                        <ul className="space-y-4">
                            {[
                                { key: 'home', href: '#hero' },
                                { key: 'performance', href: '#performance' },
                                { key: 'seo', href: '#seo' },
                                { key: 'benchmarks', href: '#comparison' },
                                { key: 'process', href: '#process' },
                                { key: 'pricing', href: '#pricing' },
                            ].map((link) => (
                                <li key={link.key}>
                                    <Link href={link.href} className="text-muted-foreground hover:text-white transition-colors capitalize">
                                        {t(link.key)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-muted-foreground hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-white transition-colors">Cookie Policy</Link></li>
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
