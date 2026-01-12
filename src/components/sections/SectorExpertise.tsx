"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Palmtree, Gem, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function SectorExpertise() {
    const t = useTranslations("SectorExpertise");
    const [activeSector, setActiveSector] = useState("real_estate");

    const sectors = [
        {
            id: "real_estate",
            icon: Building2,
            color: "text-amber-400",
            bg: "bg-amber-500/10",
            gradient: "from-amber-500/20 to-orange-500/5",
            borderColor: "border-amber-500/30"
        },
        {
            id: "tourism",
            icon: Palmtree,
            color: "text-cyan-400",
            bg: "bg-cyan-500/10",
            gradient: "from-cyan-500/20 to-blue-500/5",
            borderColor: "border-cyan-500/30"
        },
        {
            id: "luxury",
            icon: Gem,
            color: "text-purple-400",
            bg: "bg-purple-500/10",
            gradient: "from-purple-500/20 to-pink-500/5",
            borderColor: "border-purple-500/30"
        }
    ];

    return (
        <section className="py-32 bg-zinc-950 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">

                <div className="mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold font-playfair text-white mb-6">
                        {t('title')}
                    </h2>
                    <div className="h-1 w-24 bg-zinc-800"></div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* LEFT: Navigation List */}
                    <div className="lg:col-span-4 space-y-2">
                        {sectors.map((sector) => (
                            <button
                                key={sector.id}
                                onClick={() => setActiveSector(sector.id)}
                                onMouseEnter={() => setActiveSector(sector.id)}
                                className={cn(
                                    "w-full text-left p-6 rounded-xl transition-all duration-300 group relative overflow-hidden border border-transparent",
                                    activeSector === sector.id
                                        ? "bg-zinc-900 border-white/10"
                                        : "hover:bg-zinc-900/50"
                                )}
                            >
                                <div className="flex items-center justify-between relative z-10">
                                    <span className={cn(
                                        "text-xl font-bold transition-colors",
                                        activeSector === sector.id ? "text-white" : "text-zinc-500 group-hover:text-zinc-300"
                                    )}>
                                        {t(`${sector.id}_title`)}
                                    </span>
                                    {activeSector === sector.id && (
                                        <motion.div layoutId="activeArrow">
                                            <ArrowRight className="w-5 h-5 text-emerald-500" />
                                        </motion.div>
                                    )}
                                </div>
                                {activeSector === sector.id && (
                                    <motion.div
                                        layoutId="activeGlow"
                                        className="absolute inset-0 bg-white/5"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* RIGHT: Content Display area */}
                    <div className="lg:col-span-8 min-h-[400px]">
                        <AnimatePresence mode="wait">
                            {sectors.map((sector) => {
                                if (sector.id !== activeSector) return null;
                                return (
                                    <motion.div
                                        key={sector.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="relative h-full"
                                    >
                                        {/* Glowing Backdrop */}
                                        <div className={`absolute -inset-4 bg-gradient-to-br ${sector.gradient} blur-3xl opacity-30`}></div>

                                        <div className="relative h-full border-l border-white/10 pl-8 md:pl-16 py-4">

                                            {/* Icon & Badge */}
                                            <div className="flex items-center gap-4 mb-8">
                                                <div className={`p-4 rounded-2xl ${sector.bg} ${sector.borderColor} border`}>
                                                    <sector.icon className={`w-8 h-8 ${sector.color}`} />
                                                </div>
                                                <div className="px-3 py-1 rounded-full border border-white/10 bg-zinc-900/50 text-xs font-mono text-zinc-400 uppercase tracking-widest">
                                                    Architecture v2.0
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                                {t(`${sector.id}_desc`)}
                                            </h3>

                                            {/* Specs */}
                                            <div className="space-y-4 pt-4">
                                                <div className={`flex items-center gap-4 text-zinc-300`}>
                                                    <CheckCircle2 className={`w-5 h-5 ${sector.color}`} />
                                                    <span className="text-lg font-light">{t(`${sector.id}_spec1`)}</span>
                                                </div>
                                                <div className={`flex items-center gap-4 text-zinc-300`}>
                                                    <CheckCircle2 className={`w-5 h-5 ${sector.color}`} />
                                                    <span className="text-lg font-light">{t(`${sector.id}_spec2`)}</span>
                                                </div>
                                            </div>

                                            {/* Action Hint */}
                                            <div className="pt-12 flex items-center gap-2 text-sm font-mono text-zinc-500">
                                                <ChevronRight className="w-4 h-4" />
                                                <span>DEPLOY_MODULE_{sector.id.toUpperCase()}</span>
                                            </div>

                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                </div>

            </div>
        </section>
    );
}
