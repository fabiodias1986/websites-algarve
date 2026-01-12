import { useTranslations } from "next-intl";
import { Rocket } from "lucide-react";
import { HeroClient } from "./HeroClient";

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
                    <div className="">
                        <h1 className="text-[3rem] leading-[0.9] md:text-7xl lg:text-8xl font-bold font-playfair tracking-tighter">
                            {t.rich('title', {
                                highlight: (chunks) => <span className="text-white relative inline-block">
                                    <span className="relative z-10">{chunks}</span>
                                    <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-2 md:h-3 bg-emerald-500/30 -z-0 -rotate-1"></span>
                                </span>,
                                break: () => <br className="md:hidden" />
                            })}
                        </h1>
                    </div>

                    <p
                        className="text-lg md:text-xl text-muted-foreground max-w-lg font-light leading-relaxed text-balance"
                    >
                        {t('subtitle')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a
                            href={`https://wa.me/351910908608?text=${encodeURIComponent(t('cta_plan_message'))}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center text-base md:text-lg px-8 h-12 md:h-14 rounded-full bg-emerald-500 text-black font-bold transition-all duration-300 hover:bg-emerald-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(52,211,153,0.4)]"
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
                <HeroClient />

            </div>
        </section>
    );
}
