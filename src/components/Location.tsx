"use client";

import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

export default function Location() {
    return (
        <section id="location" className="py-20 bg-stone-900 text-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                            Onde Estamos
                        </h2>
                        <p className="text-stone-300 leading-relaxed mb-8 text-lg">
                            Nossa igreja fica localizada no centro da cidade de Piracicaba, bem em frente ao mercado municipal.
                            A Catedral também é reconhecida como a igreja do Mercadão, um marco histórico e patrimônio da cidade.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-amber-500 mt-1 shrink-0" />
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Endereço</h3>
                                    <p className="text-stone-400">
                                        Rua Governador Pedro de Toledo, Centro<br />
                                        Piracicaba - SP
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Clock className="text-amber-500 mt-1 shrink-0" />
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Horários Principais</h3>
                                    <p className="text-stone-400">
                                        Domingos às 9h e 10:30h<br />
                                        Quintas às 18:30h
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-[400px] rounded-xl overflow-hidden shadow-2xl border border-stone-700"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.9665178611162!2d-47.65195492565912!3d-22.729485831556733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c6310619cbe0e1%3A0xcec3a2f8decd96b8!2sCatedral%20Metodista%20De%20Piracicaba!5e0!3m2!1spt-BR!2sbr!4v1668891882230!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa de Localização"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
