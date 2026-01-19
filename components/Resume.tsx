'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

export default function Resume() {
    return (
        <section className="bg-[#121212] py-16 md:py-24 px-4 md:px-12 relative z-20">
            <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">

                {/* Education Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-4 mb-4 md:mb-6">
                            <div className="p-3 rounded-full bg-purple-500/10 text-purple-400">
                                <GraduationCap size={32} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
                        </div>
                    </div>
                    <div className="md:col-span-2 space-y-8 md:space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-8 border-l border-gray-800"
                        >
                            <span className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-purple-500"></span>
                            <h3 className="text-xl md:text-2xl font-bold text-white">Bachelor of Science in Computer Science</h3>
                            <p className="text-purple-400 mb-2">Sir Syed University of Engineering and Technology</p>
                            <p className="text-gray-400 text-sm md:text-base">
                                Focus on Software Engineering, Web Development, and Human-Computer Interaction.
                                Active participant in InHouse Project Exhibitions.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Experience Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-4 mb-4 md:mb-6">
                            <div className="p-3 rounded-full bg-pink-500/10 text-pink-400">
                                <Briefcase size={32} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
                        </div>
                    </div>
                    <div className="md:col-span-2 space-y-8 md:space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-8 border-l border-gray-800"
                        >
                            <span className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-pink-500"></span>
                            <span className="text-sm text-gray-500 mb-1 block">Nov 2024 – Apr 2025</span>
                            <h3 className="text-xl md:text-2xl font-bold text-white">WordPress Developer</h3>
                            <p className="text-pink-400 mb-4">Stolidzone Technologies</p>
                            <p className="text-gray-400 text-sm md:text-base">
                                Specialized in building high-end eCommerce stores and corporate websites.
                                Optimized site performance and implemented responsive designs for mobile compatibility.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8 border-l border-gray-800"
                        >
                            <span className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-gray-700"></span>
                            <span className="text-sm text-gray-500 mb-1 block">Mar 2024 – Aug 2024</span>
                            <h3 className="text-xl md:text-2xl font-bold text-white">Web Development Intern</h3>
                            <p className="text-pink-400 mb-4">Cohexify</p>
                            <p className="text-gray-400 text-sm md:text-base">
                                Assisted in front-end development using React.js and Tailwind CSS.
                                Collaborated with senior developers to debug and refine user interfaces.
                            </p>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
}
