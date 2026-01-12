"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedCounter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <span ref={ref} className="tabular-nums">
            {isInView ? (
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {value}
                </motion.span>
            ) : "0"}{suffix}
        </span>
    );
};

export function ImpactStats() {
    const t = useTranslations("ImpactStats");

    const stats = [
        { key: "stat1", value: 300, suffix: "%" },
        { key: "stat2", value: 0.1, suffix: "s" }, // Special case, handled manually if needed or string
        { key: "stat3", value: 100, suffix: "%" },
        { key: "stat4", value: 24, suffix: "/7" }
    ];

    return (
        <section id="impact" className="py-24 bg-zinc-950 relative overflow-hidden border-y border-white/5 text-center md:text-left">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-24 max-w-3xl mx-auto">
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

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 items-center justify-between">

                    {/* Stat 1: Retention */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-2 text-center"
                    >
                        <div className="text-5xl md:text-7xl font-playfair font-bold text-white tracking-tight flex justify-center">
                            +<AnimatedCounter value={300} suffix="%" />
                        </div>
                        <p className="text-sm font-mono text-emerald-400 uppercase tracking-widest">{t('stat1_label')}</p>
                        <p className="text-zinc-500 text-sm px-4">{t('stat1_desc')}</p>
                    </motion.div>

                    {/* Stat 2: Speed */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="space-y-2 text-center"
                    >
                        <div className="text-5xl md:text-7xl font-playfair font-bold text-white tracking-tight flex justify-center">
                            &lt; 0.1s
                        </div>
                        <p className="text-sm font-mono text-emerald-400 uppercase tracking-widest">{t('stat2_label')}</p>
                        <p className="text-zinc-500 text-sm px-4">{t('stat2_desc')}</p>
                    </motion.div>

                    {/* Stat 3: SEO */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-2 text-center"
                    >
                        <div className="text-5xl md:text-7xl font-playfair font-bold text-white tracking-tight flex justify-center">
                            <AnimatedCounter value={100} suffix="%" />
                        </div>
                        <p className="text-sm font-mono text-emerald-400 uppercase tracking-widest">{t('stat3_label')}</p>
                        <p className="text-zinc-500 text-sm px-4">{t('stat3_desc')}</p>
                    </motion.div>

                    {/* Stat 4: Availability */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="space-y-2 text-center"
                    >
                        <div className="text-5xl md:text-7xl font-playfair font-bold text-white tracking-tight flex justify-center">
                            24/7
                        </div>
                        <p className="text-sm font-mono text-emerald-400 uppercase tracking-widest">{t('stat4_label')}</p>
                        <p className="text-zinc-500 text-sm px-4">{t('stat4_desc')}</p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
