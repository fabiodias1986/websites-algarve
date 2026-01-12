"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Smartphone, MapPin, Settings, Bot } from "lucide-react";

export function Features() {
    const t = useTranslations("Features");

    const features = [
        {
            key: "mobile_first",
            icon: Smartphone,
            className: "md:col-span-1 bg-gradient-to-br from-zinc-900 to-black border-zinc-800",
        },
        {
            key: "seo_local",
            icon: MapPin,
            className: "md:col-span-1 bg-zinc-900/50 border-zinc-800",
        },
        {
            key: "autonomous",
            icon: Settings,
            className: "md:col-span-1 bg-zinc-900/50 border-zinc-800",
        },
        {
            key: "ai_brain",
            icon: Bot,
            className: "md:col-span-1 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border-indigo-500/20",
        }
    ];

    return (
        <section id="features" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]"
                >
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.key}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={cn(feature.className, "rounded-3xl p-8 relative overflow-hidden group")}
                        >
                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="h-full flex flex-col justify-between relative z-10">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-playfair mb-2">{t(feature.key)}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {t(feature.key === 'mobile_first' ? 'mobile_desc' : feature.key === 'seo_local' ? 'seo_desc' : feature.key === 'autonomous' ? 'autonomous_desc' : 'ai_desc')}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
