'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section className="py-24 px-4 md:px-12 bg-[#121212] relative z-20">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-12 text-white"
                >
                    About Me
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="prose prose-lg prose-invert text-gray-300"
                >
                    <p className="text-xl leading-relaxed">
                        A passionate developer and designer specializing in building modern, responsive, and creative web experiences.
                        Expertise spans across Front-End development (Next.js, React), Web/Graphic Design, and Computer Engineering.
                        Experienced in delivering high-quality commercial projects and immersive 3D/VR experiences.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
