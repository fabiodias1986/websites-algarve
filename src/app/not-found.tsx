import Link from "next/link";
import { Button } from "@/components/ui/button";
import "./globals.css";

export default function NotFound() {
    return (
        <html lang="pt" className="dark">
            <body className="antialiased bg-background text-foreground flex flex-col min-h-screen">
                <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
                    <div className="text-center space-y-8 max-w-lg">
                        <div className="space-y-2">
                            <h1 className="text-9xl font-bold font-playfair text-emerald-500/20">404</h1>
                            <h2 className="text-3xl font-bold text-white">Página Não Encontrada</h2>
                            <p className="text-zinc-400">
                                Parece que se perdeu no espaço digital. A página que procura foi movida ou não existe.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/">
                                <Button className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-full px-8 py-6 w-full sm:w-auto">
                                    Voltar ao Início
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
