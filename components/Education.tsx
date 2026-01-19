'use client';

import { motion } from 'framer-motion';

const certifications = {
    "University & Events": [
        "CIPE '25",
        "Generative AI Certificate",
        "SSUET InHouse Project Exhibition '22",
        "Technova '25",
        "39th Multi-Topic International Symposium 2025"
    ],
    "Professional Courses": [
        "OCI (Oracle Cloud Infrastructure) AI Foundations",
        "Tailwind CSS Specialist"
    ],
    "Volunteer Work": [
        "Ramadan Drive 2024"
    ]
};

export default function Education() {
    return (
        <section className="py-24 px-4 md:px-12 bg-[#121212] relative z-20">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Education Column */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-12 text-white"
                        >
                            Education
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white/5 p-8 rounded-2xl border border-white/10"
                        >
                            <h3 className="text-2xl font-bold text-white mb-2">Computer Engineering</h3>
                            <p className="text-purple-400">Sir Syed University of Engineering and Technology</p>
                            <p className="text-gray-400 mt-2 text-sm italic">(Implied by certifications)</p>
                        </motion.div>
                    </div>

                    {/* Certifications Column */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-12 text-white"
                        >
                            Achievements
                        </motion.h2>
                        <div className="space-y-8">
                            {Object.entries(certifications).map(([category, items], index) => (
                                <motion.div
                                    key={category}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-xl font-bold text-purple-400 mb-4">{category}</h3>
                                    <ul className="space-y-2">
                                        {items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-gray-300">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
