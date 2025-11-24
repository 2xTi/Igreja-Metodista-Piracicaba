"use client";

import { Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-stone-950 text-stone-400 py-8 border-t border-stone-900">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Catedral Metodista de Piracicaba. Todos os direitos reservados.
                </p>
                <p className="text-sm flex items-center gap-1">
                    Feito com <Heart size={14} className="text-red-500 fill-red-500" /> por Tiago Reis Almeida
                </p>
            </div>
        </footer>
    );
}
