'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Saving Heaven",
        category: "eCommerce / WordPress",
        description: "An elegant eCommerce site with stunning product layouts and seamless shopping experience.",
        color: "from-blue-600 to-indigo-500",
        type: "wordpress",
        image: "/Assets/saving heavenavif.avif",
        siteUrl: "https://savingheaven.com"
    },
    {
        id: 2,
        title: "Rose Thobes",
        category: "Luxury Fashion",
        description: "A luxurious WordPress store with refined UI and mobile-first design for premium attire.",
        color: "from-rose-500 to-pink-500",
        type: "wordpress",
        image: "/Assets/Rosethobes.png",
        siteUrl: "https://rosethobes.com"
    },
    {
        id: 3,
        title: "Precission Engineering",
        category: "Corporate",
        description: "Professional corporate website showcasing service-based architecture and engineering solutions.",
        color: "from-slate-600 to-gray-500",
        type: "wordpress",
        image: "/Assets/Precision-Engineering.png",
        siteUrl: "#"
    },
    {
        id: 4,
        title: "Oceanic Logistics",
        category: "Logistics",
        description: "Clean and efficient logistics website focused on navigation and tracking services.",
        color: "from-cyan-600 to-blue-500",
        type: "wordpress",
        image: "/Assets/oceanic.png",
        siteUrl: "#"
    },
    {
        id: 5,
        title: "CodeTec Solutions",
        category: "Agency",
        description: "Modern business website built with Elementor illustrating digital services.",
        color: "from-violet-600 to-purple-500",
        type: "wordpress",
        image: "/Assets/codetec Solutions.png",
        siteUrl: "https://codetecsolutions.com"
    },
    {
        id: 6,
        title: "MindScape VR",
        category: "Virtual Reality",
        description: "VR-based educational experience with 3D exploration and interactive learning modules.",
        color: "from-purple-600 to-cyan-500",
        type: "custom",
        image: "/Assets/MindScape-VR.png",
        githubUrl: "https://github.com/Muhammad-Fakhar-Khan"
    },
    {
        id: 7,
        title: "Expense Tracker",
        category: "Next.js App",
        description: "Responsive React application with dynamic visual analytics and real-time data handling.",
        color: "from-emerald-500 to-teal-400",
        type: "custom",
        image: "/Assets/ExpenseTracker.png",
        githubUrl: "https://github.com/Muhammad-Fakhar-Khan"
    },
    {
        id: 8,
        title: "Rock Paper Scissor",
        category: "Interactive Game",
        description: "Interactive game with smooth JavaScript animations and game logic.",
        color: "from-orange-500 to-red-400",
        type: "custom",
        image: "/Assets/Rock Paper Scissor.png",
        githubUrl: "https://github.com/Muhammad-Fakhar-Khan",
        siteUrl: "https://muhammad-fakhar-khan.github.io/rock_paper_scissor/"
    }
];

export default function ProjectList({ type, title }: { type: 'wordpress' | 'custom', title: string }) {
    const filteredProjects = projects.filter(p => p.type === type);

    return (
        <section className="bg-[#121212] py-16 md:py-24 px-4 md:px-12 relative z-20 border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Centered Creative Header */}
                <div className="flex flex-col items-center text-center space-y-6 relative mb-12 md:mb-20">
                    {/* Decorative Blur */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-6xl font-bold text-white tracking-tight relative z-10"
                    >
                        {title}
                    </motion.h2>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative z-10"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative h-[400px] md:h-[450px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl"
                        >
                            {/* Image Background */}
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-90 transition-opacity duration-500" />

                            {/* Glow Gradient */}
                            <div className={`absolute -inset-1 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />

                            <div className="relative h-full p-6 md:p-8 flex flex-col justify-end z-10">
                                <span className="text-xs md:text-sm font-light text-cyan-400 mb-2">{project.category}</span>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 transform translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 transition-transform duration-500">
                                    {project.title}
                                </h3>
                                <p className="text-sm md:text-base text-gray-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500 delay-100 mb-6">
                                    {project.description}
                                </p>

                                {/* Action Buttons - Visible on Mobile, Hover on Desktop */}
                                <div className="flex gap-4 transform translate-y-0 md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-500 delay-200 opacity-100 md:opacity-0 md:group-hover:opacity-100">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white text-xs md:text-sm backdrop-blur-sm transition-colors"
                                        >
                                            <Github size={16} /> GitHub
                                        </a>
                                    )}
                                    {project.siteUrl && project.siteUrl !== '#' && (
                                        <a
                                            href={project.siteUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white text-xs md:text-sm transition-colors"
                                        >
                                            <ExternalLink size={16} /> Visit Site
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
