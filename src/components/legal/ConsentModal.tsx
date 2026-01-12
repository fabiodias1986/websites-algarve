"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, ShieldCheck, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

export function ConsentModal() {
    const t = useTranslations("Consent");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Function to handle reset event
        const handleReset = () => {
            localStorage.removeItem("cookie-consent");
            setIsVisible(true);
        };

        // Always listen for reset request
        window.addEventListener("reset-consent", handleReset);

        // Check if user has already consented
        const consent = localStorage.getItem("cookie-consent");
        let timer: NodeJS.Timeout;

        if (!consent) {
            // Small delay for better UX entrance
            timer = setTimeout(() => setIsVisible(true), 1000);
        }

        return () => {
            if (timer) clearTimeout(timer);
            window.removeEventListener("reset-consent", handleReset);
        };
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
        // Dispatch event for Analytics to pick up
        window.dispatchEvent(new CustomEvent("consent-update", { detail: "accepted" }));
    };

    const handleReject = () => {
        localStorage.setItem("cookie-consent", "rejected");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 20, opacity: 0, scale: 0.95 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 20, opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto z-50 flex justify-center md:block pointer-events-none"
                >
                    <div className="bg-zinc-950/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)] p-6 md:p-8 max-w-2xl w-full pointer-events-auto flex flex-col md:flex-row gap-6 items-start ring-1 ring-white/5">

                        {/* Icon */}
                        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 text-emerald-500 border border-emerald-500/20 shadow-[0_0_15px_-3px_rgba(16,185,129,0.15)]">
                            <Cookie className="w-6 h-6" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-3">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                {t('title')}
                                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                {t.rich('description', {
                                    link: (chunks) => (
                                        <a href="/cookies" className="text-emerald-400 hover:text-emerald-300 transition-colors border-b border-emerald-500/30 hover:border-emerald-400">
                                            {chunks}
                                        </a>
                                    ),
                                    linkPrivacy: (chunks) => (
                                        <a href="/privacy" className="text-emerald-400 hover:text-emerald-300 transition-colors border-b border-emerald-500/30 hover:border-emerald-400">
                                            {chunks}
                                        </a>
                                    )
                                })}
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-row md:flex-col gap-3 w-full md:w-auto shrink-0 pt-2 md:pt-0">
                            <button
                                onClick={handleAccept}
                                className="px-6 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-sm font-bold shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5 whitespace-nowrap"
                            >
                                {t('accept')}
                            </button>
                            <button
                                onClick={handleReject}
                                className="px-6 py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors whitespace-nowrap"
                            >
                                {t('reject')}
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
