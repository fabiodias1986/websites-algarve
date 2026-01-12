"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export function Hero() {
    const t = useTranslations("Hero");

    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-12 md:pt-20 overflow-hidden bg-zinc-950 scroll-mt-24">
            {/* Background Gradient from Mission (No Lines) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <radialGradient id="grad-hero" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <circle cx="50" cy="50" r="40" fill="url(#grad-hero)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Text Content */}
                <div className="space-y-8 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-[3rem] leading-[0.9] md:text-7xl lg:text-8xl font-bold font-playfair tracking-tighter">
                            {t.rich('title', {
                                highlight: (chunks) => <span className="text-white relative inline-block">
                                    <span className="relative z-10">{chunks}</span>
                                    <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-2 md:h-3 bg-emerald-500/30 -z-0 -rotate-1"></span>
                                </span>,
                                break: () => <br className="md:hidden" />
                            })}
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-muted-foreground max-w-lg font-light leading-relaxed text-balance"
                    >
                        {t('subtitle')}
                    </motion.p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a
                            href={`https://wa.me/351910908608?text=${encodeURIComponent(t('cta_plan_message'))}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center text-base md:text-lg px-8 h-12 md:h-14 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(52,211,153,0.6)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                {t('cta_plan')}
                                <Rocket className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </span>
                        </a>
                        <a
                            href={`https://wa.me/351910908608?text=${encodeURIComponent(t('cta_portfolio_message'))}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center text-base md:text-lg px-8 h-12 md:h-14 rounded-full border border-white/10 hover:bg-white/5 hover:text-white hover:border-white/30 transition-all"
                        >
                            {t('cta_portfolio')}
                        </a>
                    </div>
                </div>

                {/* 3D Mockup Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotateX: 20, rotateY: -20 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 10, rotateY: -15 }}
                    transition={{ duration: 1, delay: 0.2, type: "spring" }}
                    className="relative perspective-1000 group"
                >
                    {/* Floating effect container */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative transform-style-3d rotate-y-[-12deg] rotate-x-[10deg] shadow-2xl rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 to-black p-4"
                    >
                        {/* Visual Representation of a "Machine" / High Perf Site */}
                        <div className="aspect-[16/10] rounded-lg overflow-hidden bg-slate-950 relative border border-white/5 flex flex-col">
                            {/* Browser Header */}
                            <div className="w-full h-8 bg-slate-900 flex items-center px-4 gap-2 border-b border-white/5 shrink-0">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                <div className="mx-auto w-1/2 h-4 rounded-full bg-white/5 text-[10px] flex items-center justify-center text-white/20 font-mono">algarve-premium.com</div>
                            </div>

                            {/* Website Mockup Content */}
                            <div className="relative flex-1 bg-zinc-950 p-6 flex flex-col gap-4">
                                {/* Mini Navbar */}
                                <div className="w-full h-4 flex justify-between items-center">
                                    <div className="w-8 h-3 bg-white/20 rounded-sm"></div>
                                    <div className="flex gap-2">
                                        <div className="w-6 h-2 bg-white/10 rounded-sm"></div>
                                        <div className="w-6 h-2 bg-white/10 rounded-sm"></div>
                                    </div>
                                </div>
                                {/* Mini Hero */}
                                <div className="w-full h-32 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-md border border-white/5 flex items-center p-4 gap-4">
                                    <div className="flex-1 space-y-2">
                                        <div className="w-3/4 h-3 bg-white/20 rounded-sm"></div>
                                        <div className="w-1/2 h-3 bg-white/20 rounded-sm"></div>
                                        <div className="w-1/3 h-6 mt-2 bg-emerald-500/20 rounded-md border border-emerald-500/30"></div>
                                    </div>
                                    <div className="w-20 h-20 bg-white/5 rounded-md"></div>
                                </div>
                                {/* Mini Grid */}
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="h-16 bg-white/5 rounded-md border border-white/5"></div>
                                    <div className="h-16 bg-white/5 rounded-md border border-white/5"></div>
                                    <div className="h-16 bg-white/5 rounded-md border border-white/5"></div>
                                </div>

                                {/* Floating Performance Badge Overlay */}
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 1, type: "spring" }}
                                    className="absolute bottom-4 right-4 bg-zinc-900/90 backdrop-blur-md border border-emerald-500/30 p-2 rounded-lg flex items-center gap-3 shadow-2xl z-20"
                                >
                                    <div className="relative w-10 h-10 flex items-center justify-center">
                                        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                                            <path className="text-emerald-900" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                                            <path className="text-emerald-500" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                                        </svg>
                                        <span className="absolute text-xs font-bold text-emerald-400">100</span>
                                    </div>
                                    <div className="text-xs">
                                        <div className="font-bold text-white">Performance</div>
                                        <div className="text-emerald-400">Perfect Score</div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-20 blur-3xl"></div>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
