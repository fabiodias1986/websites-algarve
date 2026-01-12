"use client";

import { useEffect } from "react";
import Script from "next/script";

const GA_MEASUREMENT_ID = "G-6D7SJ302S3";

export function GoogleAnalytics() {
    useEffect(() => {
        // Check initial consent status
        const consent = localStorage.getItem("cookie-consent");
        if (consent === "accepted") {
            loadGoogleAnalytics();
        }

        // Listen for consent updates
        const handleConsentUpdate = (event: Event) => {
            const customEvent = event as CustomEvent;
            if (customEvent.detail === "accepted") {
                loadGoogleAnalytics();
            }
        };

        window.addEventListener("consent-update", handleConsentUpdate);

        return () => {
            window.removeEventListener("consent-update", handleConsentUpdate);
        };
    }, []);

    const loadGoogleAnalytics = () => {
        if (typeof window === "undefined" || (window as any).gtag) return;

        const script1 = document.createElement("script");
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        script1.async = true;
        document.head.appendChild(script1);

        const script2 = document.createElement("script");
        script2.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
            });
        `;
        document.head.appendChild(script2);

        // Add Click Tracking
        document.addEventListener("click", handleGlobalClick);
    };

    const handleGlobalClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const clickable = target.closest("a, button");

        if (clickable) {
            const elementType = clickable.tagName.toLowerCase();
            const text = clickable.textContent?.slice(0, 50).trim() || "No Text";
            const url = (clickable as HTMLAnchorElement).href || undefined;

            // Send event to GA
            if ((window as any).gtag) {
                (window as any).gtag('event', 'user_interaction', {
                    event_category: 'Click',
                    event_label: text,
                    element_type: elementType,
                    destination: url
                });
            }
        }
    };

    return null; // Component does not render anything visible
}
