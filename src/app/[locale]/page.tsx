import dynamic from 'next/dynamic';
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { ProblemSolution } from "@/components/sections/ProblemSolution";

const SEOMasterclass = dynamic(() => import("@/components/sections/SEOMasterclass").then(mod => mod.SEOMasterclass));
const ImpactStats = dynamic(() => import("@/components/sections/ImpactStats").then(mod => mod.ImpactStats));
const TechStack = dynamic(() => import("@/components/sections/TechStack").then(mod => mod.TechStack));
const Technologies = dynamic(() => import("@/components/sections/Technologies").then(mod => mod.Technologies));
// const Features = dynamic(() => import("@/components/sections/Features").then(mod => mod.Features)); // Removed per user request
const Comparison = dynamic(() => import("@/components/sections/Comparison").then(mod => mod.Comparison));
const Process = dynamic(() => import("@/components/sections/Process").then(mod => mod.Process));
const Pricing = dynamic(() => import("@/components/sections/Pricing").then(mod => mod.Pricing));
const FAQ = dynamic(() => import("@/components/sections/FAQ").then(mod => mod.FAQ));
const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA").then(mod => mod.FinalCTA));

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Hero />
            <Mission />
            <ProblemSolution />
            <Technologies />
            <TechStack />
            <SEOMasterclass />
            <ImpactStats />
            <Comparison />
            <Process />
            <Pricing />
            <FinalCTA />
            <FAQ />
        </main>
    );
}
