"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

export function FAQ() {
    const t = useTranslations("FAQ");

    return (
        <section id="faq" className="py-24 bg-zinc-950 relative overflow-hidden">
            {/* Background Gradient from Hero */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <radialGradient id="grad-faq" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <circle cx="50" cy="50" r="40" fill="url(#grad-faq)" />
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
                        <span className="text-sm font-mono text-emerald-400 uppercase tracking-widest">{t('badge')}</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-bold mb-6 font-playfair leading-[1.1] text-white">
                        {t.rich('title', {
                            highlight: (chunks) => <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">{chunks}</span>,
                            break: () => <br />
                        })}
                    </h2>
                    <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {(() => {
                        const [mounted, setMounted] = useState(false);
                        useEffect(() => setMounted(true), []);

                        if (!mounted) {
                            return (
                                <div className="space-y-4">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="h-24 w-full bg-white/5 rounded-lg border border-white/5 animate-pulse" />
                                    ))}
                                </div>
                            );
                        }

                        return (
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
                                    <AccordionItem key={i} value={`item-${i}`} className="border border-white/5 bg-white/5 px-6 rounded-lg data-[state=open]:border-emerald-500/30 transition-all overflow-hidden group">
                                        <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-emerald-400 text-white py-6 text-left">
                                            {t(`q${i}`)}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-zinc-400 leading-relaxed pb-6 text-base">
                                            {t(`a${i}`)}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        );
                    })()}
                </div>
            </div>
        </section>
    );
}
