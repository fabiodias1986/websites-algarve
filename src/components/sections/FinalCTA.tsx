"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight, Star } from "lucide-react";

export function FinalCTA() {
    const t = useTranslations("FinalCTA");

    return (
        <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-zinc-950 flex items-center justify-center scroll-mt-24">
            {/* Background Gradient from Hero */}
            {/* Background Gradient from Hero - High Intensity for Highlight */}
            <div className="absolute inset-0 opacity-60 pointer-events-none">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <radialGradient id="grad-finalcta" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <circle cx="50" cy="50" r="40" fill="url(#grad-finalcta)" />
                </svg>
            </div>
            {/* Added extra glow to separate from previous sections */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-12">

                    {/* Header Group */}
                    <div className="space-y-3 md:space-y-6">
                        {/* Minimalist Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 text-emerald-500 font-mono text-xs uppercase tracking-[0.2em]"
                        >
                            <Star className="w-3 h-3 fill-current" />
                            <span>Premium Service</span>
                            <Star className="w-3 h-3 fill-current" />
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-7xl font-bold font-playfair text-white leading-[1.1] text-balance"
                        >
                            {t.rich('title', {
                                highlight: (chunks) => <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">{chunks}</span>,
                                break: () => <br className="md:hidden" />
                            })}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-base md:text-xl text-zinc-400 font-light max-w-2xl mx-auto text-balance"
                        >
                            {t('subtitle')}
                        </motion.p>
                    </div>

                    {/* Buttons - Preserved as requested */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        {/* WhatsApp Button */}
                        <a
                            href="https://wa.me/351910908608"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-8 py-5 bg-emerald-500 hover:bg-emerald-400 text-black rounded-full font-bold text-lg flex items-center gap-3 transition-all shadow-[0_0_0_1px_rgba(16,185,129,0.2)] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] w-full sm:w-auto justify-center"
                        >
                            <MessageCircle className="w-6 h-6 fill-current" />
                            <span>{t('whatsapp_button')}</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>

                        {/* Phone Button */}
                        <a
                            href="tel:+351910908608"
                            className="group px-8 py-5 bg-transparent border border-white/20 hover:border-white text-white rounded-full font-medium text-lg flex items-center gap-3 transition-all hover:bg-white/5 w-full sm:w-auto justify-center"
                        >
                            <Phone className="w-6 h-6" />
                            <span>{t('phone_button')}</span>
                        </a>
                    </motion.div>

                    {/* Trust Indicator - Cleaner */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="pt-8 flex items-center justify-center gap-3 text-sm text-zinc-500 font-mono"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        {t('availability')}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
