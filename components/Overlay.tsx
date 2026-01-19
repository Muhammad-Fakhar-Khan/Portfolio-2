'use client';

import { MotionValue, motion, useTransform } from 'framer-motion';

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {

    // Section 1: Intro (0% - 25%)
    const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);
    const scale1 = useTransform(scrollYProgress, [0, 0.25], [1, 0.8]);

    // Section 2: Experiences (25% - 50%)
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
    const x2 = useTransform(scrollYProgress, [0.25, 0.55], [-50, 0]); // Slide in from left

    // Section 3: Philosophy (55% - 85%)
    const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
    const x3 = useTransform(scrollYProgress, [0.55, 0.85], [50, 0]); // Slide in from right

    return (
        <div className="absolute inset-0 z-10 pointer-events-none w-full h-full text-white md:mix-blend-difference">
            {/* Section 1 - Left Aligned */}
            <motion.div
                style={{ opacity: opacity1, y: y1, scale: scale1 }}
                className="absolute inset-0 flex flex-col items-start justify-end md:justify-center text-left p-6 pb-12 md:p-24"
            >
                <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 text-white md:text-transparent md:bg-clip-text md:bg-gradient-to-r md:from-purple-400 md:to-pink-600 drop-shadow-xl md:drop-shadow-none">
                    MUHAMMAD <br /> FAKHAR KHAN
                </h1>
                <p className="text-xl md:text-2xl font-light text-white md:text-gray-300 mb-8 drop-shadow-lg md:drop-shadow-none">
                    Front End Developer | Computer Engineer | <br /> UI/UX Designer
                </p>
                <motion.a
                    href="/Assets/Fakhar_Khan_CV.pdf"
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="pointer-events-auto px-6 py-3 md:px-8 md:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-base md:text-lg font-bold rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                >
                    Download Resume
                </motion.a>
            </motion.div>

            {/* Section 2 - Left */}
            <motion.div
                style={{ opacity: opacity2, x: x2 }}
                className="absolute inset-0 flex items-center justify-start p-6 md:p-24"
            >
                <div className="max-w-2xl">
                    <h2 className="text-4xl md:text-7xl font-bold leading-tight">
                        Building digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            realities.
                        </span>
                    </h2>
                    <p className="mt-6 md:mt-8 text-lg md:text-xl text-gray-400">
                        From luxury WordPress stores to immersive web applications.
                    </p>
                </div>
            </motion.div>

            {/* Section 3 - Right */}
            <motion.div
                style={{ opacity: opacity3, x: x3 }}
                className="absolute inset-0 flex items-center justify-end p-6 md:p-24 text-right"
            >
                <div className="max-w-2xl">
                    <h2 className="text-4xl md:text-7xl font-bold leading-tight">
                        Bridging design <br />
                        <span className="italic font-serif text-gray-400">&</span> Engineering.
                    </h2>
                </div>
            </motion.div>

        </div>
    );
}
