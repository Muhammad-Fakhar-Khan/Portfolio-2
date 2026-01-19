'use client';

import { motion } from 'framer-motion';

const experiences = [
    {
        role: "WordPress Developer",
        company: "Stolidzone Technologies",
        period: "Nov 2024 – Apr 2025",
        points: [
            "Developed and maintained responsive websites for multiple international clients.",
            "Delivered high-quality projects under tight deadlines."
        ]
    },
    {
        role: "Web Development Intern",
        company: "Cohexify",
        period: "Mar 2024 – Aug 2024",
        points: [
            "Assisted in the design and deployment of client-facing websites.",
            "Collaborated with senior developers to optimize site performance."
        ]
    }
];

export default function Experience() {
    return (
        <section className="py-24 px-4 md:px-12 bg-[#121212] relative z-20">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-white"
                >
                    Work Experience
                </motion.h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="border-l-2 border-purple-500/30 pl-8 relative"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500" />

                            <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4 text-gray-400">
                                <span className="font-semibold text-purple-400">{exp.company}</span>
                                <span className="hidden md:block">•</span>
                                <span>{exp.period}</span>
                            </div>
                            <ul className="list-disc list-inside space-y-2 text-gray-300">
                                {exp.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
