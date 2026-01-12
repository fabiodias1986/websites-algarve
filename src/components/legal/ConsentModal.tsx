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
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 flex justify-center pointer-events-none"
                >
                    <div className="bg-zinc-950/90 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 max-w-4xl w-full pointer-events-auto flex flex-col md:flex-row gap-6 md:gap-12 items-center md:items-start text-center md:text-left">

                        {/* Icon */}
                        <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 text-emerald-500">
                            <Cookie className="w-6 h-6" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-2">
                            <h3 className="text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
                                {t('title')}
                                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                                {t('description')}
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                            <button
                                onClick={handleReject}
                                className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 text-zinc-400 hover:text-white text-sm font-medium transition-colors"
                            >
                                {t('reject')}
                            </button>
                            <button
                                onClick={handleAccept}
                                className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-sm font-bold shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all transform hover:-translate-y-0.5"
                            >
                                {t('accept')}
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
