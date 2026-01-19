'use client';

import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "MindScape VR",
        category: "Unity / VR / C#",
        description: "A VR-based educational experience combining immersive storytelling with 3D exploration.",
        color: "from-purple-600 to-cyan-500"
    },
    {
        id: 2,
        title: "Expense Tracker",
        category: "Next.js / React / Tailwind",
        description: "A responsive application for tracking daily expenses with dynamic visual analytics and a clean UI.",
        color: "from-emerald-500 to-teal-400"
    },
    {
        id: 3,
        title: "Saving Heaven",
        category: "eCommerce / WordPress",
        description: "Elegant eCommerce site with seamless shopping UX.",
        color: "from-blue-600 to-indigo-500"
    },
    {
        id: 4,
        title: "Rose Thobes",
        category: "Luxury Fashion / WordPress",
        description: "Luxury store with mobile-first design.",
        color: "from-rose-500 to-pink-500"
    },
    {
        id: 5,
        title: "CodeTec Solutions",
        category: "Business / WordPress",
        description: "Modern business site optimized for conversions.",
        color: "from-violet-600 to-purple-500"
    },
    {
        id: 6,
        title: "Oceanic Logistics",
        category: "Corporate / WordPress",
        description: "Corporate-focused service architecture.",
        color: "from-cyan-600 to-blue-500"
    },
    {
        id: 7,
        title: "Rock Paper Scissor",
        category: "HTML / CSS / JS",
        description: "Interactive game featuring smooth animations and a user-friendly interface.",
        color: "from-orange-500 to-red-400"
    }
];

export default function Projects() {
    return (
        <section className="min-h-screen bg-[#121212] py-24 px-4 md:px-12 relative z-20">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-16 text-white tracking-tight"
                >
                    Selected Works
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
                        >
                            {/* Glassmorphism Card */}
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20" />

                            {/* Glow Gradient */}
                            <div className={`absolute -inset-1 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />

                            <div className="relative h-full p-8 flex flex-col justify-end z-10">
                                <span className="text-sm font-light text-gray-400 mb-2">{project.category}</span>
                                <h3 className="text-3xl font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
