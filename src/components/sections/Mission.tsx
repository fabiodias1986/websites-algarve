"use client";

import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Search, Gem, Sparkles, Lock, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

export function Mission() {
    const t = useTranslations("Mission");
    // Pagination logic: Toggle between page 0 and 1 (since we have 6 cards and show 3)
    const [page, setPage] = useState(0);
    const [mounted, setMounted] = useState(false);

    const allCards = [
        { key: "card_speed", icon: Zap, color: "text-yellow-400", bg: "bg-yellow-400/10" },
        { key: "card_design", icon: Gem, color: "text-purple-400", bg: "bg-purple-400/10" },
        { key: "card_seo", icon: Search, color: "text-blue-400", bg: "bg-blue-400/10" },
        { key: "card_security", icon: Lock, color: "text-red-400", bg: "bg-red-400/10" },
        { key: "card_ai", icon: Sparkles, color: "text-emerald-400", bg: "bg-emerald-400/10" },
        { key: "card_conversion", icon: TrendingUp, color: "text-orange-400", bg: "bg-orange-400/10" }
    ];

    useEffect(() => {
        setMounted(true);
        const interval = setInterval(() => {
            setPage((prev) => (prev === 0 ? 1 : 0));
        }, 6000); // Rotate every 6 seconds

        return () => clearInterval(interval);
    }, []);

    const visibleCards = allCards.slice(page * 3, (page + 1) * 3);

    return (
        <section id="mission" className="py-24 md:py-32 bg-zinc-950 relative min-h-[80vh] flex items-center justify-center scroll-mt-24">
            {/* Abstract Network Background - Preserved per user request */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <radialGradient id="grad" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <circle cx="50" cy="50" r="40" fill="url(#grad)" />
                    <path d="M-20,50 Q25,25 50,50 T120,50" stroke="#10b981" strokeWidth="0.2" fill="none" className="animate-pulse" />
                    <path d="M-20,30 Q25,80 50,30 T120,30" stroke="#3b82f6" strokeWidth="0.2" fill="none" className="animate-pulse" style={{ animationDelay: "1s" }} />
                    <path d="M-20,60 Q25,10 50,60 T120,60" stroke="#8b5cf6" strokeWidth="0.2" fill="none" className="animate-pulse" style={{ animationDelay: "2s" }} />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md mb-4"
                    >
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">{t('badge')}</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-bold mb-3 md:mb-6 font-playfair leading-[1.1] text-white text-balance">
                        {t.rich('title', {
                            highlight: (chunks) => <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">{chunks}</span>,
                            break: () => <br className="md:hidden" />
                        })}
                    </h2>
                    <p className="text-base md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto text-balance">
                        {t('description')}
                    </p>
                </div>

                {/* Cards Container with AnimatePresence for smooth transitions */}
                <div className="relative min-h-[340px]">
                    <AnimatePresence mode="wait">
                        {mounted && (
                            <motion.div
                                key={page}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="grid md:grid-cols-3 gap-8"
                            >
                                {visibleCards.map((card) => (
                                    <div
                                        key={card.key}
                                        className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-emerald-500/0 transition-all group h-[340px] flex flex-col"
                                    >
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl ${card.bg} ${card.color} group-hover:scale-110 transition-transform duration-300`}>
                                            <card.icon className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4">{t(`${card.key}_title`)}</h3>
                                        <p className="text-zinc-400 leading-relaxed text-sm">
                                            {t(`${card.key}_desc`)}
                                        </p>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
