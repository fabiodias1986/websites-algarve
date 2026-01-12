"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { AlertTriangle, Zap, Check, X } from "lucide-react";

export function ProblemSolution() {
    const t = useTranslations("ProblemSolution");

    return (
        <section id="performance" className="relative w-full bg-zinc-950 overflow-hidden scroll-mt-24">
            <div className="grid lg:grid-cols-2 min-h-[80vh]">

                {/* PROBLEM SIDE - Chaos/Darkness */}
                <div className="relative flex flex-col justify-center p-8 md:p-12 lg:p-24 border-b lg:border-b-0 lg:border-r border-white/5 bg-gradient-to-br from-red-950/20 to-zinc-950">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 max-w-xl mx-auto lg:mx-0"
                    >
                        <div className="inline-flex items-center gap-2 text-red-500 mb-6">
                            <AlertTriangle className="w-5 h-5" />
                            <span className="font-mono uppercase tracking-widest text-xs">{t('problem_tag')}</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold font-playfair text-white mb-3 md:mb-8 leading-[1.1] text-balance">
                            {t.rich('problem_title', {
                                highlight: (chunks) => <span className="text-red-500">{chunks}</span>,
                                break: () => <br className="md:hidden" />
                            })}
                        </h2>

                        <p className="text-base md:text-lg text-zinc-400 leading-relaxed mb-12 text-balance">
                            {t('problem_desc')}
                        </p>

                        <div className="space-y-6">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-start gap-4 group">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 group-hover:bg-red-500/20 transition-colors">
                                        <X className="w-3 h-3 text-red-500" />
                                    </div>
                                    <p className="text-zinc-500 text-lg group-hover:text-zinc-400 transition-colors">
                                        {t(`problem_point_${i}`)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* SOLUTION SIDE - Order/Light */}
                <div className="relative flex flex-col justify-center p-12 lg:p-24 bg-zinc-900/30">
                    {/* Emerald Glow Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative z-10 max-w-xl mx-auto lg:mx-0"
                    >
                        <div className="inline-flex items-center gap-2 text-emerald-500 mb-6">
                            <Zap className="w-5 h-5" />
                            <span className="font-mono uppercase tracking-widest text-xs">{t('solution_tag')}</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold font-playfair text-white mb-3 md:mb-8 leading-[1.1] text-balance">
                            {t.rich('solution_title', {
                                highlight: (chunks) => <span className="text-emerald-400">{chunks}</span>,
                                break: () => <br className="md:hidden" />
                            })}
                        </h2>

                        <p className="text-base md:text-lg text-zinc-300 leading-relaxed mb-12 text-balance">
                            The ultimate upgrade for your digital presence.
                        </p>

                        <div className="space-y-6">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-start gap-4 group">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                                        <Check className="w-3 h-3 text-emerald-500" />
                                    </div>
                                    <p className="text-zinc-300 text-lg">
                                        {t(`solution_point_${i}`)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
