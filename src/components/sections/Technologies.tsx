"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Database, Layout, Globe, Code, Zap, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export function Technologies() {
    const t = useTranslations("Technologies");

    const techStack = [
        {
            key: "nextjs",
            icon: Globe,
            color: "text-white",
            bg: "bg-black",
            border: "border-white/10"
        },
        {
            key: "supabase",
            icon: Database,
            color: "text-emerald-400",
            bg: "bg-emerald-950/20",
            border: "border-emerald-500/20"
        },
        {
            key: "tailwind",
            icon: Layout,
            color: "text-blue-400",
            bg: "bg-blue-950/20",
            border: "border-blue-500/20"
        },
        {
            key: "typescript",
            icon: Code,
            color: "text-blue-300",
            bg: "bg-blue-900/10",
            border: "border-blue-400/10"
        }
    ];

    return (
        <section id="technologies" className="py-24 bg-zinc-950 relative overflow-hidden">
            {/* Background Gradient from Hero */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <radialGradient id="grad-technologies" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <circle cx="50" cy="50" r="40" fill="url(#grad-technologies)" />
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

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {techStack.map((tech, i) => (
                        <motion.div
                            key={tech.key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={cn(
                                "group p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 relative overflow-hidden",
                                tech.bg,
                                tech.border
                            )}
                        >
                            <div className="relative z-10">
                                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-2xl bg-white/5 border border-white/5", tech.color)}>
                                    <tech.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{t(`${tech.key}_title`)}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                                    {t(`${tech.key}_desc`)}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full bg-white/5 text-white/50 border border-white/5">
                                        {t(`${tech.key}_tag`)}
                                    </span>
                                </div>
                            </div>

                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
