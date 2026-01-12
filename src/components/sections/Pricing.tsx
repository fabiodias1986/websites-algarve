"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Check, Zap, Shield, Gauge, MessageCircle, Globe, BarChart, MapPin, Key, ShieldCheck, Rocket, Smartphone, Palette, Search, Layers, PenTool, Layout, Bot, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function Pricing() {
    const t = useTranslations("Pricing");

    const plans = [
        {
            key: "landing_page",
            price: "350€",
            originalPrice: "590€",
            subscription: "50€",
            features: ["essential_1", "essential_2", "essential_7", "design_responsive", "design_premium", "essential_3", "essential_5", "essential_8", "growth_12"],
            popular: false
        },
        {
            key: "business_site",
            price: "650€",
            originalPrice: "990€",
            subscription: "50€",
            features: ["growth_1", "growth_2", "growth_7", "design_responsive", "design_premium", "growth_8", "growth_9", "growth_10", "growth_11", "growth_12"],
            popular: false
        }
    ];

    const featureIcons: { [key: string]: React.ElementType } = {
        "essential_1": Rocket,
        "essential_2": Zap,
        "essential_7": Globe,
        "design_responsive": Smartphone,
        "design_premium": Palette,
        "essential_3": Layers,
        "essential_4": Smartphone,
        "essential_5": MessageCircle,
        "essential_8": MapPin,
        "growth_12": Key,

        "growth_1": Layout,
        "growth_2": MapPin,
        "growth_7": Globe,
        "growth_8": PenTool,
        "growth_9": MessageCircle,
        "growth_10": BarChart,
        "growth_11": MapPin,
        "guarantee_perf": ShieldCheck,
    };

    return (
        <section id="pricing" className="py-24 md:py-32 relative overflow-hidden bg-zinc-950 scroll-mt-24">
            {/* Background Gradient from Hero */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <radialGradient id="grad-pricing-hero" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <circle cx="50" cy="50" r="50" fill="url(#grad-pricing-hero)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16 md:mb-24 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md mb-4"
                    >
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">{t('badge')}</span>
                    </motion.div>

                    <h2 className="text-3xl md:text-6xl font-bold mb-3 md:mb-6 font-playfair leading-[1.1] text-white text-balance">
                        {t.rich('title', {
                            highlight: (chunks) => <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">{chunks}</span>,
                            break: () => <br />
                        })}
                    </h2>
                    <p className="text-base md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto text-balance">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
                    {plans.map((plan) => (
                        <Card
                            key={plan.key}
                            className={cn(
                                "relative overflow-hidden border-zinc-800 bg-zinc-900/50 backdrop-blur-sm flex flex-col transition-all duration-500 hover:scale-[1.02] group",
                                plan.popular ? "border-emerald-500/50 shadow-[0_0_50px_-12px_rgba(16,185,129,0.2)]" : "hover:border-emerald-500/30",
                                "hover:shadow-2xl hover:shadow-emerald-900/20"
                            )}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-500 to-emerald-600 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-xl shadow-lg z-20">
                                    {t('most_popular')}
                                </div>
                            )}

                            {/* Online Discount Badge */}
                            <div className="absolute top-4 left-0 right-0 flex justify-center z-20 pointer-events-none">
                                <span className="bg-emerald-500/10 text-emerald-400 text-xs font-black px-4 py-1.5 uppercase tracking-wider rounded-full border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.3)] backdrop-blur-md animate-pulse">
                                    {t('online_discount')}
                                </span>
                            </div>

                            <CardHeader className="pt-14 pb-4 text-center relative z-10">
                                <CardTitle className="text-xl font-bold text-white mb-1 font-playfair tracking-wide">
                                    {t(plan.key)}
                                </CardTitle>
                                <CardDescription className="text-zinc-400 text-xs">
                                    {t(`${plan.key}_desc`)}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 space-y-5 relative z-10">
                                <div className="text-center space-y-1">
                                    <div className="text-zinc-500 line-through text-xs font-medium opacity-70">
                                        {plan.originalPrice}
                                    </div>
                                    <div className="text-4xl md:text-5xl font-black text-white font-outfit tracking-tighter drop-shadow-lg">
                                        {plan.price}
                                    </div>
                                    <div className="text-[10px] text-emerald-400 font-medium bg-emerald-950/30 inline-block px-2 py-0.5 rounded-full border border-emerald-500/10">
                                        + {plan.subscription} {t('month')}
                                    </div>
                                </div>
                                <ul className="space-y-2.5">
                                    {plan.features.map((feature) => {
                                        const IconComponent = featureIcons[feature] || Check;
                                        return (
                                            <li key={feature} className="flex items-start gap-2.5 group/item">
                                                <div className="mt-0.5 w-4 h-4 rounded-full bg-black/50 border border-zinc-800 flex items-center justify-center group-hover/item:border-emerald-500/50 transition-colors">
                                                    <IconComponent className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                                                </div>
                                                <span className="text-zinc-300 text-xs md:text-sm font-light group-hover/item:text-white transition-colors">
                                                    {t(feature)}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </CardContent>
                            <CardFooter className="flex flex-col items-center pb-6 relative z-10 px-6">
                                {(() => {
                                    const message = t(`${plan.key}_msg`);
                                    const whatsappUrl = `https://wa.me/351910908608?text=${encodeURIComponent(message)}`;

                                    return (
                                        <Button asChild className={cn("w-full py-6 text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-500 transform shadow-xl group relative overflow-hidden rounded-xl",
                                            plan.popular
                                                ? "bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 text-white shadow-[0_20px_40px_-15px_rgba(16,185,129,0.5)] hover:shadow-[0_30px_60px_-20px_rgba(16,185,129,0.7)] hover:-translate-y-1.5 border-0"
                                                : "bg-zinc-900 hover:bg-zinc-800 text-emerald-400 border border-emerald-500/20 hover:border-emerald-500/40 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.2)]"
                                        )}>
                                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                                <div className="flex items-center justify-center gap-3 relative z-10 transition-transform duration-500 ease-out">
                                                    <span className="tracking-[0.1em]">{t('cta')}</span>
                                                    <div className="flex items-center w-0 overflow-hidden group-hover:w-[130px] transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
                                                        <span className="bg-white/20 text-white text-[10px] px-3 py-1 rounded-full whitespace-nowrap font-bold backdrop-blur-sm border border-white/10 shadow-lg">
                                                            {t('cta_discount')}
                                                        </span>
                                                    </div>
                                                </div>
                                                {/* Subtle internal shine effect */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none"></div>
                                            </a>
                                        </Button>
                                    );
                                })()}
                                <div className="mt-3 flex items-center justify-center gap-1.5 transition-opacity cursor-help font-medium text-zinc-400">
                                    <ShieldCheck className="w-3 h-3 text-emerald-500 shrink-0" />
                                    <span className="text-[10px] text-center">{t('guarantee')}</span>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>





                {/* Subscription Details Section - High Contrast */}
                <div className="mt-24 bg-gradient-to-br from-emerald-950/20 to-black border border-emerald-500/10 rounded-2xl p-8 md:p-12 relative overflow-hidden max-w-5xl mx-auto">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-3xl rounded-full pointer-events-none"></div>

                    <h3 className="text-2xl md:text-3xl font-bold font-playfair text-white text-center mb-12">
                        {t('subscription_title')}
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Hosting */}
                        <div className="space-y-3">
                            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-2">
                                <Zap className="w-5 h-5" />
                            </div>
                            <h4 className="text-lg font-bold text-white">{t('subs_hosting_title')}</h4>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                {t('subs_hosting_desc')}
                            </p>
                        </div>

                        {/* Security */}
                        <div className="space-y-3">
                            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-2">
                                <Shield className="w-5 h-5" />
                            </div>
                            <h4 className="text-lg font-bold text-white">{t('subs_security_title')}</h4>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                {t('subs_security_desc')}
                            </p>
                        </div>

                        {/* Performance */}
                        <div className="space-y-3">
                            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-2">
                                <Gauge className="w-5 h-5" />
                            </div>
                            <h4 className="text-lg font-bold text-white">{t('subs_perf_title')}</h4>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                {t('subs_perf_desc')}
                            </p>
                        </div>

                        {/* Support - Centered on mobile, aligned on grid */}
                        <div className="space-y-3 lg:col-start-1 lg:ml-auto">
                            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-2">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <h4 className="text-lg font-bold text-white">{t('subs_support_title')}</h4>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                {t('subs_support_desc')}
                            </p>
                        </div>

                        {/* Domain - Centered on mobile, aligned on grid */}
                        <div className="space-y-3 lg:col-start-2 lg:mr-auto">
                            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-2">
                                <Globe className="w-5 h-5" />
                            </div>
                            <h4 className="text-lg font-bold text-white">{t('subs_domain_title')}</h4>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                {t('subs_domain_desc')}
                            </p>
                        </div>

                        {/* Analytics */}
                        <div className="space-y-3">
                            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-2">
                                <BarChart className="w-5 h-5" />
                            </div>
                            <h4 className="text-lg font-bold text-white">{t('subs_analytics_title')}</h4>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                {t('subs_analytics_desc')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


