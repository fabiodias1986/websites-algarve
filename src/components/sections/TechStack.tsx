"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Zap, Server, Globe, Code2, MousePointerClick } from "lucide-react";

export function TechStack() {
    const t = useTranslations("TechStack");

    return (
        <section id="techstack" className="py-24 bg-zinc-950 relative overflow-hidden">
            {/* Background Gradient from Hero */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <radialGradient id="grad-techstack" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <circle cx="50" cy="50" r="40" fill="url(#grad-techstack)" />
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
                            break: () => <br />
                        })}
                    </h2>
                    <p className="text-base md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto text-balance">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Modern Performance Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-full"
                    >
                        <div className="relative h-full rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 flex flex-col justify-between overflow-hidden group">

                            {/* Glow Effect */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] -z-10 rounded-full pointer-events-none"></div>

                            {/* Header */}
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                        <span className="text-emerald-400 font-mono text-xs tracking-widest uppercase">System Online</span>
                                    </div>
                                    <h3 className="text-2xl font-playfair font-bold text-white">{t('performance_audit')}</h3>
                                </div>
                                <div className="text-right">
                                    <span className="block text-4xl font-bold text-white tracking-tight">100</span>
                                    <span className="text-xs text-zinc-500 font-mono">LIGHTHOUSE SCORE</span>
                                </div>
                            </div>

                            {/* Main Metric Visualization */}
                            <div className="grid grid-cols-3 gap-2 mb-6">
                                {[
                                    { label: "LCP", value: "0.8s", desc: t('cwv_lcp') },
                                    { label: "FID", value: "0ms", desc: t('cwv_fid') },
                                    { label: "CLS", value: "0.00", desc: t('cwv_cls') }
                                ].map((metric, i) => (
                                    <div key={i} className="bg-black/20 rounded-2xl p-4 border border-white/5 text-center">
                                        <div className="text-emerald-400 font-mono text-xl font-bold mb-1">{metric.value}</div>
                                        <div className="text-white font-bold text-sm mb-1">{metric.label}</div>
                                        <div className="text-[10px] text-zinc-500 leading-tight hidden md:block">{metric.desc}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Comparison Section */}
                            <div className="space-y-6 pt-6 border-t border-white/5">
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-white font-medium">Next.js (A Tecnologia que usamos)</span>
                                        <span className="text-emerald-400 font-mono">0.8s</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "95%" }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                                        ></motion.div>
                                    </div>
                                </div>

                                <div className="space-y-3 opacity-50">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-zinc-400">Standard WordPress</span>
                                        <span className="text-red-400 font-mono">4.2s</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "20%" }}
                                            transition={{ duration: 1, delay: 0.7 }}
                                            className="h-full bg-red-500"
                                        ></motion.div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                    {/* Feature List (Why Next.js?) */}
                    <div className="space-y-8">
                        {[
                            { icon: Server, title: t('ssr_title'), desc: t('ssr_desc') },
                            { icon: Globe, title: t('caching_title'), desc: t('caching_desc') },
                            { icon: Zap, title: t('optimization_title'), desc: t('optimization_desc') },
                            { icon: Code2, title: t('code_splitting_title'), desc: t('code_splitting_desc') },
                            { icon: MousePointerClick, title: t('prefetching_title'), desc: t('prefetching_desc') }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.2 }}
                                className="flex gap-4"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-emerald-400">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1 text-white">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
