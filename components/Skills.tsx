'use client';

import { motion } from 'framer-motion';

const skills = {
    "Languages": ["TypeScript", "JavaScript", "HTML", "SQL"],
    "Frameworks & Libraries": ["React.js", "Next.js", "Flutter", "Prisma", "Three.js", "Framer Motion"],
    "Styling": ["Tailwind CSS", "Vanilla CSS"],
    "Development Tools": ["Node.js ecosystem", "ESLint", "Git/GitHub"],
    "Design & 3D": ["Blender", "Unity (C#)", "Graphic Design", "Logo Design"],
    "CMS": ["WordPress (Elementor expert)"]
};

export default function Skills() {
    return (
        <section className="py-24 px-4 md:px-12 bg-[#121212] relative z-20">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-white"
                >
                    Technical Skills
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-purple-400 mb-4">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((item) => (
                                    <span
                                        key={item}
                                        className="bg-white/10 px-3 py-1 rounded-full text-sm text-gray-200 hover:bg-white/20 transition-colors"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
