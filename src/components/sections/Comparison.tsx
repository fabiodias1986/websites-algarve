"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useRef } from "react";
import { MoveHorizontal, Menu } from "lucide-react";
import { motion } from "framer-motion";

export function Comparison() {
    const t = useTranslations("Comparison");
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const leftScrollRef = useRef<HTMLDivElement>(null);
    const rightScrollRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    // Sync Scrolling
    const isSynchingLeft = useRef(false);
    const isSynchingRight = useRef(false);

    const handleScroll = (source: 'left' | 'right') => {
        const left = leftScrollRef.current;
        const right = rightScrollRef.current;
        if (!left || !right) return;

        if (source === 'left') {
            if (isSynchingRight.current) {
                isSynchingRight.current = false;
                return;
            }
            isSynchingLeft.current = true;
            right.scrollTop = left.scrollTop;
        } else {
            if (isSynchingLeft.current) {
                isSynchingLeft.current = false;
                return;
            }
            isSynchingRight.current = true;
            left.scrollTop = right.scrollTop;
        }
    };

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;
        setSliderPosition(percentage);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging.current) {
            handleMove(e.clientX);
        }
    };

    return (
        <section id="comparison" className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden scroll-mt-24">
            {/* Background Gradient */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <radialGradient id="grad-comparison" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <circle cx="50" cy="50" r="40" fill="url(#grad-comparison)" />
                    <path d="M-20,50 Q25,25 50,50 T120,50" stroke="#10b981" strokeWidth="0.2" fill="none" className="animate-pulse" />
                    <path d="M-20,30 Q25,80 50,30 T120,30" stroke="#3b82f6" strokeWidth="0.2" fill="none" className="animate-pulse" style={{ animationDelay: "1s" }} />
                    <path d="M-20,60 Q25,10 50,60 T120,60" stroke="#8b5cf6" strokeWidth="0.2" fill="none" className="animate-pulse" style={{ animationDelay: "2s" }} />
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
                        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">{t('badge')}</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-bold mb-3 md:mb-6 font-playfair leading-[1.1] text-white text-balance">
                        {t.rich('title', {
                            highlight: (chunks) => <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">{chunks}</span>,
                            break: () => <br />
                        })}
                    </h2>
                    <p className="text-base md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto text-balance">
                        {t('subtitle')}
                    </p>
                </div>

                <div
                    ref={containerRef}
                    className="relative w-full max-w-5xl mx-auto h-[600px] md:h-[700px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/10 shadow-2xl bg-black touch-pan-y"
                    style={{ touchAction: 'pan-y' }}
                    onMouseDown={() => isDragging.current = true}
                    onMouseUp={() => isDragging.current = false}
                    onMouseLeave={() => isDragging.current = false}
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                    onClick={(e) => handleMove(e.clientX)}
                >

                    {/* RIGHT SIDE (PREMIUM / AFTER) */}
                    <div
                        ref={rightScrollRef}
                        onScroll={() => handleScroll('right')}
                        className="absolute inset-0 bg-zinc-950 flex flex-col overflow-hidden md:overflow-y-auto no-scrollbar touch-pan-y"
                        style={{ touchAction: 'pan-y' }}
                    >
                        <div className="sticky top-0 z-10 py-4 md:py-6 border-b border-white/5 flex items-center justify-between px-4 md:px-8 bg-black/50 backdrop-blur-md">
                            <span className="font-playfair text-lg md:text-xl font-bold text-white tracking-widest">ALGARVE ESTATES</span>
                            <div className="flex gap-8 text-xs font-mono text-zinc-400 uppercase tracking-widest hidden md:flex">
                                <span>Collection</span>
                                <span>Services</span>
                                <span>Contact</span>
                            </div>
                            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                                <Menu className="w-4 h-4 text-white" />
                            </div>
                        </div>

                        <div className="flex-col min-h-[100%] md:min-h-[150vh]">
                            <div className="relative h-full md:h-[500px] flex-1 w-full bg-zinc-900 group overflow-hidden flex flex-col justify-center">
                                <Image
                                    src="/images/premium_villa.png"
                                    alt="Premium Villa"
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-black/30"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>

                                <div className="relative z-10 w-full flex flex-col justify-center px-8 md:px-24 space-y-6 md:space-y-8 mt-12 md:mt-0">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="inline-flex items-center gap-2 self-start px-3 py-1 border border-white/20 rounded-full bg-white/5 backdrop-blur-md"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                                        <span className="text-white/90 text-[10px] md:text-xs font-mono uppercase tracking-widest">Private Collection</span>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                        className="text-4xl md:text-6xl font-playfair text-white leading-[1.1] drop-shadow-2xl"
                                    >
                                        The Art of <br />
                                        <span className="text-white italic font-light">Living Well.</span>
                                    </motion.div>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-white/70 text-sm md:text-base max-w-sm leading-relaxed"
                                    >
                                        Experience the pinnacle of luxury real estate in the heart of the Algarve.
                                    </motion.p>

                                    <motion.button
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                        className="group/btn relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs md:text-sm w-fit overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-emerald-400 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></div>
                                        <span className="relative z-10 group-hover/btn:text-black transition-colors">Explore Villas</span>
                                    </motion.button>
                                </div>
                            </div>

                            <div className="bg-black py-20 px-12 space-y-16 hidden md:block">
                                <div className="space-y-6">
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        className="text-emerald-500 font-mono text-xs uppercase tracking-widest"
                                    >
                                        About Us
                                    </motion.p>
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        className="text-3xl font-playfair text-white"
                                    >
                                        Unmatched Elegance
                                    </motion.div>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        className="text-zinc-400 text-sm leading-relaxed max-w-lg"
                                    >
                                        Founded on the principles of integrity and excellence, Algarve Estates has been the premier choice for luxury property in the region for over two decades. We don't just sell homes; we curate lifestyles.
                                    </motion.p>
                                </div>

                                <div className="space-y-6">
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        className="text-emerald-500 font-mono text-xs uppercase tracking-widest"
                                    >
                                        Our Services
                                    </motion.p>
                                    <div className="grid gap-4">
                                        {[
                                            { title: "Exclusive Sales", icon: "Home" },
                                            { title: "Buyer Representation", icon: "Search" },
                                            { title: "Luxury Rentals", icon: "Key" },
                                            { title: "Legal Consultation", icon: "Scale" }
                                        ].map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: 20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex items-center gap-4 p-4 border border-white/10 rounded hover:border-emerald-500/50 transition-colors cursor-pointer group bg-white/5"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-emerald-500 group-hover:shadow-[0_0_10px_#10b981] transition-shadow"></div>
                                                <span className="text-white text-sm font-medium">{item.title}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-zinc-900 border-t border-white/5 py-12 px-12">
                                <div className="flex justify-between items-center opacity-60 hover:opacity-100 transition-opacity duration-500">
                                    <span className="font-playfair text-white text-lg">LUXURY ESTATES</span>
                                    <div className="flex gap-4 text-xs font-mono text-zinc-500 uppercase">
                                        <span>Privacy</span>
                                        <span>Terms</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* LEFT SIDE (STANDARD / AVERAGE) */}
                    <div
                        className="absolute inset-0 z-20 overflow-hidden pointer-events-none"
                        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                    >
                        <div
                            ref={leftScrollRef}
                            onScroll={() => handleScroll('left')}
                            className="bg-[#f0f0f0] w-full h-full overflow-hidden md:overflow-y-auto pointer-events-auto border-r-4 border-white font-sans no-scrollbar touch-pan-y"
                            style={{ touchAction: 'pan-y' }}
                        >
                            <div className="sticky top-0 z-50 h-20 bg-[#000080] border-b-4 border-[#0000FF] flex items-center justify-between px-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-red-600 border border-white"></div>
                                    <span className="font-arial text-xl font-bold text-white tracking-tighter">ALGARVE ESTATES</span>
                                </div>
                                <div className="hidden md:flex gap-4 text-sm text-white font-arial underline decoration-1">
                                    <span>Home</span>
                                    <span>Listings</span>
                                    <span>About Us</span>
                                </div>
                            </div>

                            <div className="flex-col min-h-[150vh]">
                                <div className="relative h-[500px] flex flex-col justify-center items-center text-center p-8 bg-white border-b-4 border-black">
                                    <Image
                                        src="/images/standard_house.png"
                                        alt="Standard House"
                                        fill
                                        className="object-cover opacity-80"
                                        style={{
                                            filter: "contrast(1.2) saturation(1.5)"
                                        }}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="max-w-md w-full bg-[#E0E0E0]/90 p-6 border-2 border-black space-y-4 text-center relative z-10 shadow-none">
                                        <div className="text-3xl font-arial text-[#0000FF] font-bold uppercase underline decoration-2">
                                            VILLAS FOR SALE
                                        </div>
                                        <p className="text-black text-lg font-times font-bold leading-normal">
                                            WE HAVE THE BEST HOUSES IN ALGARVE.<br />
                                            CLICK BUTTON FOR SEE MORE.
                                        </p>
                                        <div className="bg-[#FF0000] text-yellow-300 text-xl p-4 font-bold border-4 border-yellow-300 rounded-none cursor-pointer hover:bg-red-700 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                            ENTER SITE HERE &gt;&gt;
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-8 border-b border-gray-400">
                                    <div className="text-xl font-arial font-bold text-black border-b border-black mb-4 inline-block">About Us</div>
                                    <p className="text-black font-times text-sm leading-relaxed text-justify">
                                        Welcome to Algarve Estates. We are real estate agents selling homes since 1999. We have many options for you.
                                        Contact us on the number below. Our office is open 9am to 6pm. We are very professional and have good houses.
                                        Buying a house is important. Trust us. We have keys.
                                        <br /><br />
                                        Our history is long. We started in a small office. Now we have a bigger office. We like houses.
                                    </p>
                                </div>

                                <div className="bg-[#EFEFEF] p-8">
                                    <div className="text-xl font-arial font-bold text-black mb-4">Our Services:</div>
                                    <ul className="list-disc pl-6 text-black font-arial text-sm space-y-1">
                                        <li>Selling Homes</li>
                                        <li>Buying Homes</li>
                                        <li>Renting Homes</li>
                                        <li>Paperwork</li>
                                        <li>Keys</li>
                                    </ul>
                                </div>

                                <div className="bg-[#CCCCCC] p-8 text-center border-t border-black">
                                    <span className="font-arial font-bold text-black text-xs">Copyright 2005 Algarve Estates. All Rights Reserved.</span>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Slider Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-white z-20 cursor-ew-resize flex items-center justify-center -ml-[2px]"
                        style={{ left: `${sliderPosition}%` }}
                    >
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] text-black border-4 border-zinc-900">
                            <MoveHorizontal className="w-5 h-5" />
                        </div>
                    </div>

                    {/* Labels */}
                    <div className="absolute top-4 left-4 md:top-auto md:bottom-6 md:left-6 z-30 pointer-events-none">
                        <span className="px-3 py-1.5 md:px-4 md:py-2 bg-black/90 backdrop-blur-md text-white text-[10px] md:text-sm font-mono uppercase tracking-widest rounded-lg border border-white/20 shadow-lg shadow-black/50">
                            {t('before_label')}
                        </span>
                    </div>
                    <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-30 pointer-events-none">
                        <span className="px-3 py-1.5 md:px-4 md:py-2 bg-emerald-500 text-black text-[10px] md:text-sm font-mono uppercase tracking-widest rounded-lg font-bold shadow-lg shadow-emerald-500/20">
                            {t('after_label')}
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
}
