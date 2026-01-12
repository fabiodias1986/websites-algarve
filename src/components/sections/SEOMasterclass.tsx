"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Search, Gauge, Smartphone, Share2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export function SEOMasterclass() {
    const t = useTranslations("SEOMasterclass");

    const factors = [
        { icon: Gauge, key: "speed", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
        { icon: Smartphone, key: "mobile", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
        { icon: Search, key: "structure", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
        { icon: Share2, key: "authority", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" }
    ];

    return (
        <section id="seo" className="py-24 bg-zinc-950 relative overflow-hidden scroll-mt-24">
            {/* Background Gradient from Hero */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <radialGradient id="grad-seo" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <circle cx="50" cy="50" r="40" fill="url(#grad-seo)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left: The Logic */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="flex w-fit mx-auto md:mx-0 items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md mb-4"
                        >
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            <span className="text-sm font-mono text-emerald-400 uppercase tracking-widest">{t('badge')}</span>
                        </motion.div>
                        <h2 className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-8 font-playfair leading-[1.1] text-center md:text-left text-balance">
                            {t.rich('title', {
                                highlight: (chunks) => <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">{chunks}</span>,
                                break: () => <br className="md:hidden" />
                            })}
                        </h2>
                        <p className="text-base md:text-lg text-zinc-400 leading-relaxed text-center md:text-left text-balance">
                            {t('description')}
                        </p>

                        <div className="space-y-6">
                            {factors.map((factor, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4 items-start group"
                                >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${factor.bg} ${factor.border} border transition-colors group-hover:scale-110 duration-300`}>
                                        <factor.icon className={`w-6 h-6 ${factor.color}`} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">
                                            {t(`${factor.key}_title`)}
                                        </h3>
                                        <p className="text-sm text-zinc-500 leading-relaxed">
                                            {t(`${factor.key}_desc`)}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: The Visualization */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        {/* Interactive Card Stack */}
                        <div className="relative z-10 grid gap-4">
                            <div className="absolute inset-0 bg-indigo-500/20 blur-3xl -z-10 rounded-full"></div>

                            <Card className="bg-zinc-900 border-white/10 p-6 backdrop-blur-md">
                                <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-4">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="text-xs font-mono text-zinc-500">google-bot-crawler.exe</div>
                                </div>
                                <div className="space-y-3 font-mono text-sm">
                                    <div className="flex justify-between text-zinc-400">
                                        <span>&gt; Scanning Core Vitals...</span>
                                        <span className="text-emerald-400">PASSED</span>
                                    </div>
                                    <div className="flex justify-between text-zinc-400">
                                        <span>&gt; Checking Mobile Layout...</span>
                                        <span className="text-emerald-400">OPTIMIZED</span>
                                    </div>
                                    <div className="flex justify-between text-zinc-400">
                                        <span>&gt; Analyzing HTML Structure...</span>
                                        <span className="text-emerald-400">SEMANTIC</span>
                                    </div>
                                    <div className="flex justify-between text-zinc-400">
                                        <span>&gt; Calculating Trust Score...</span>
                                        <span className="text-emerald-400">HIGH</span>
                                    </div>
                                    <div className="pt-4 border-t border-white/5 text-center">
                                        <span className="text-emerald-400 font-bold animate-pulse">&gt;&gt; RANKING POSITION: #1</span>
                                    </div>
                                </div>
                            </Card>

                            {/* Decorative Elements */}
                            <div className="absolute -right-8 top-12 p-4 bg-zinc-800 rounded-lg border border-white/10 shadow-xl hidden md:block animate-bounce" style={{ animationDuration: "3s" }}>
                                <div className="text-xs text-zinc-500 uppercase font-bold mb-1">CTR Impact</div>
                                <div className="text-2xl font-bold text-white">+240%</div>
                            </div>

                            <div className="absolute -left-8 bottom-12 p-4 bg-zinc-800 rounded-lg border border-white/10 shadow-xl hidden md:block animate-bounce" style={{ animationDuration: "4s" }}>
                                <div className="text-xs text-zinc-500 uppercase font-bold mb-1">Speed Index</div>
                                <div className="text-2xl font-bold text-emerald-400">0.4s</div>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section >
    );
}
