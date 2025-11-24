"use client";

import { motion } from "framer-motion";
import { Calendar, Music, Users, BookOpen } from "lucide-react";

const services = [
    {
        title: "Cultos",
        icon: Calendar,
        items: ["Domingo às 9h (Matutino)"],
        description: "Momentos de adoração e comunhão com Deus.",
    },
    {
        title: "Escola Dominical",
        icon: BookOpen,
        items: ["Domingo às 10:30h"],
        description: "Estudo bíblico e crescimento espiritual para todas as idades.",
    },
    {
        title: "Sociedade de Mulheres",
        icon: Users,
        items: ["Terça-feira às 14:30", "3ª Quarta-feira (Reunião nas casas)"],
        description: "Comunhão, oração e serviço entre as mulheres da igreja.",
    },
    {
        title: "Coral",
        icon: Music,
        items: ["Ensaios Quinta-feira às 18:30"],
        description: "Louvor através da música com o Coro Reverendo James William Koger.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
                        Nossas Atividades
                    </h2>
                    <p className="text-stone-600 max-w-2xl mx-auto">
                        Participe de nossos encontros semanais e fortaleça sua fé em comunhão.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-stone-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-stone-100"
                        >
                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6 text-amber-700">
                                <service.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-stone-900 mb-3">{service.title}</h3>
                            <p className="text-stone-600 mb-4 text-sm">{service.description}</p>
                            <ul className="space-y-2">
                                {service.items.map((item, i) => (
                                    <li key={i} className="text-stone-800 font-medium text-sm border-l-2 border-amber-500 pl-3">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
