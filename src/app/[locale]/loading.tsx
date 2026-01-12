export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950">
            <div className="relative flex items-center justify-center">
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full animate-pulse"></div>

                {/* Spinner Ring */}
                <div className="w-16 h-16 border-4 border-white/5 border-t-emerald-500 rounded-full animate-spin"></div>

                {/* Inner Logo/Dot */}
                <div className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>

            {/* Loading Text */}
            <div className="absolute mt-24 text-sm font-mono text-emerald-500/50 uppercase tracking-[0.3em] animate-pulse">
                Carregando
            </div>
        </div>
    );
}
