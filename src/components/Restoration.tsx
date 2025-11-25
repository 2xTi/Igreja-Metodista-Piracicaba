"use client";

import { motion } from "framer-motion";
import { Calendar, CreditCard, FileText, Landmark, Calculator, Send } from "lucide-react";

export default function Restoration() {
    return (
        <section id="restoration" className="py-12 md:py-20 bg-stone-100 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-10 md:mb-16"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-xs md:text-sm font-semibold mb-4">
                        Lei Rouanet (Art. 18) • PRONAC nº 2416522
                    </span>
                    <h2 className="text-2xl md:text-4xl font-serif font-bold text-stone-900 mb-4 max-w-4xl mx-auto">
                        Projeto Arquitetônico de Restauro da Catedral Metodista de Piracicaba
                    </h2>
                    <p className="text-stone-600 max-w-2xl mx-auto text-base md:text-lg">
                        Contribua para a preservação deste patrimônio histórico. Seu apoio é fundamental para restaurarmos nossa catedral.
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-amber-700 font-medium bg-amber-50 px-4 py-2 rounded-lg border border-amber-200 text-sm md:text-base">
                        <Calendar className="w-5 h-5" />
                        <span>Prazo: 30 de Dezembro de 2025 (para dedução fiscal em 2026)</span>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
                    {/* Banking Details Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-stone-200 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 bg-amber-500 text-white px-4 py-1 rounded-bl-lg font-medium text-sm">
                            Dados Bancários
                        </div>

                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                                <Landmark size={24} className="md:w-8 md:h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-stone-900">Faça sua Doação</h3>
                                <p className="text-stone-500 text-sm md:text-base">Depósito Identificado</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-stone-50 p-4 rounded-xl border border-stone-100">
                                <p className="text-sm text-stone-500 mb-1">Banco</p>
                                <p className="text-lg font-bold text-stone-900">Banco do Brasil (001)</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-stone-50 p-4 rounded-xl border border-stone-100">
                                    <p className="text-sm text-stone-500 mb-1">Agência</p>
                                    <p className="text-lg font-bold text-stone-900">3552-1</p>
                                </div>
                                <div className="bg-stone-50 p-4 rounded-xl border border-stone-100">
                                    <p className="text-sm text-stone-500 mb-1">Conta Captação</p>
                                    <p className="text-lg font-bold text-stone-900">36.291-3</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* How to Donate Steps */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-stone-900 mb-6 md:mb-8">Como Doar (Passo a Passo)</h3>

                        <div className="space-y-6 md:space-y-8">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">1</div>
                                <div>
                                    <h4 className="text-base md:text-lg font-bold text-stone-900 mb-1 md:mb-2 flex items-center gap-2">
                                        <Calculator className="w-4 h-4 md:w-5 md:h-5 text-amber-600" /> Calcular
                                    </h4>
                                    <p className="text-stone-600 text-sm md:text-base">
                                        Pessoas Físicas podem deduzir até <strong>6%</strong> do IR devido. Empresas (Lucro Real) podem deduzir até <strong>4%</strong>.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">2</div>
                                <div>
                                    <h4 className="text-base md:text-lg font-bold text-stone-900 mb-1 md:mb-2 flex items-center gap-2">
                                        <CreditCard className="w-4 h-4 md:w-5 md:h-5 text-amber-600" /> Depositar
                                    </h4>
                                    <p className="text-stone-600 text-sm md:text-base">
                                        Faça a transferência ou depósito identificado para a conta específica do projeto (dados ao lado).
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">3</div>
                                <div>
                                    <h4 className="text-base md:text-lg font-bold text-stone-900 mb-1 md:mb-2 flex items-center gap-2">
                                        <Send className="w-4 h-4 md:w-5 md:h-5 text-amber-600" /> Enviar Comprovante
                                    </h4>
                                    <p className="text-stone-600 text-sm md:text-base">
                                        Envie o comprovante + Nome, CPF e Endereço para <a href="mailto:contato@engenhocultural.com" className="text-amber-700 font-medium hover:underline">contato@engenhocultural.com</a> para receber o "Recibo de Mecenato".
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">4</div>
                                <div>
                                    <h4 className="text-base md:text-lg font-bold text-stone-900 mb-1 md:mb-2 flex items-center gap-2">
                                        <FileText className="w-4 h-4 md:w-5 md:h-5 text-amber-600" /> Declarar
                                    </h4>
                                    <p className="text-stone-600 text-sm md:text-base">
                                        Utilize o código <strong>"41 - Incentivo à Cultura"</strong> na sua declaração de imposto de renda.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
