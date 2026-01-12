"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Search, Code2, Rocket } from "lucide-react";

export function Process() {
    const t = useTranslations("Process");

    const steps = [
        { icon: Search, key: "step1" },
        { icon: Code2, key: "step2" },
        { icon: Rocket, key: "step3" }
    ];

    return (
        <section id="process" className="py-24 bg-zinc-950 relative border-t border-white/5 overflow-hidden scroll-mt-24">
            {/* Background Gradient from Hero */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <radialGradient id="grad-process" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <circle cx="50" cy="50" r="40" fill="url(#grad-process)" />
                </svg>
            </div>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-playfair text-white mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-muted-foreground">{t('subtitle')}</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            <div className="w-24 h-24 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center mb-6 relative z-10 group-hover:border-emerald-500/30 transition-colors shadow-2xl">
                                <step.icon className="w-10 h-10 text-emerald-400" />
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-xs font-mono text-muted-foreground">
                                    0{i + 1}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{t(`${step.key}_title`)}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                                {t(`${step.key}_desc`)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
