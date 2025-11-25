"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-12 md:py-20 bg-stone-50 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* History Section */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-2xl md:text-4xl font-serif font-bold text-stone-900 mb-4 md:mb-6">
                            Nossa História
                        </h2>
                        <p className="text-stone-700 leading-relaxed mb-4 text-base md:text-lg">
                            A Igreja Metodista fundou seus trabalhos de evangelização em Piracicaba no dia 11 de setembro de 1881, numa
                            casa alugada na esquina da Rua do Rosário com a Rua São José, pelo Rev. James William Koger.
                        </p>
                        <p className="text-stone-700 leading-relaxed text-base md:text-lg">
                            O Templo da Catedral Metodista teve o início de sua construção com o lançamento da pedra fundamental em 7 de
                            setembro de 1922 e a inauguração em 7 de setembro de 1928. O projeto do eng. Wiley Theodore Clay foi
                            entregue a dois construtores locais, Paulo Caviolli e Jayme Blandi.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[250px] md:h-[400px] rounded-lg overflow-hidden shadow-xl"
                    >
                        <Image
                            src="/fotos/casa alugada.jpeg"
                            alt="Primeira casa alugada"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>

                {/* Architecture Section */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[250px] md:h-[400px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1"
                    >
                        <Image
                            src="/fotos/contrucao.jpeg"
                            alt="Construção do templo"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 md:order-2"
                    >
                        <h2 className="text-2xl md:text-4xl font-serif font-bold text-stone-900 mb-4 md:mb-6">
                            Arquitetura e Construção
                        </h2>
                        <p className="text-stone-700 leading-relaxed mb-4 text-base md:text-lg">
                            A característica tipológica predominante na fachada construída é neoromânica, mas há também elementos do
                            neogótico nas janelas superiores. Trata-se de um edifício Eclético, por reunir elementos de vários estilos
                            arquitetônicos e plásticos.
                        </p>
                        <p className="text-stone-700 leading-relaxed text-base md:text-lg">
                            A disposição interna original é tradicional, com planta semelhante à de igrejas católicas do período.
                            O pé direito tem aproximadamente 10 m, e na parede oposta ao púlpito, há uma galeria (coro) que dá acesso à torre principal.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
