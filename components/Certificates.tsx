'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Medal, X } from 'lucide-react';
import Image from 'next/image';

const categories = {
    "University Certificates": [
        { title: "CIPE '25", image: "/Assets/Certificates/CIPE'25.jpg" },
        { title: "SSUET InHouse Exhibition", image: "/Assets/Certificates/SSUET InHouse Project Exhibition'22.jpg" },
        { title: "School Certificate 1", image: "/Assets/Certificates/School/School Certificates_page-0001.jpg" },
        { title: "School Certificate 2", image: "/Assets/Certificates/School/School Certificates_page-0002.jpg" },
    ],
    "Courses Certificates": [
        { title: "Generative AI", image: "/Assets/Certificates/Generative AI/Generative AI.jpg" },
        { title: "OCI AI Foundations", image: "/Assets/Certificates/OCI AI Fundation/OCI25AICFA.jpeg" },
        { title: "Tailwind CSS", image: "/Assets/Certificates/Tailwind CSS/Muhammad Fakhar Khan-1.png" },
        { title: "CodeAlpha Internship", image: "/Assets/Certificates/CodeAlpha/Muhammad Fakhar Khan(Code Alpha)_page-0001.jpg" },
        { title: "Young Dev Internship", image: "/Assets/Certificates/Young Dev/Muhammad Fakhar Khan.png" },
    ],
    "Event Certificates": [
        { title: "Technova '25", image: "/Assets/Certificates/Technova/Muhamad Fakhar Khan.png" },
        { title: "40th IEEP", image: "/Assets/Certificates/40th IEEP/40th IEEP Certificate.png" },
        { title: "39th IEEP", image: "/Assets/Certificates/39th IEEP.jpg" },
        { title: "Young Techno Fest", image: "/Assets/Certificates/Young Techno Fest'23.jpg" },
    ],
    "Other Certificates": [
        { title: "Ramadan Drive '24", image: "/Assets/Certificates/Ramadan Drive'24.jpg" },
        { title: "Rashan & Eid Gift Drive", image: "/Assets/Certificates/Rashan & Eid Gift Drive.jpg" },
    ]
};

type CategoryName = keyof typeof categories;

export default function Certificates() {
    const [activeTab, setActiveTab] = useState<CategoryName>("University Certificates");
    const [selectedCert, setSelectedCert] = useState<{ title: string; image: string } | null>(null);

    return (
        <section className="bg-[#121212] py-16 md:py-24 px-4 md:px-12 relative z-20 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">

                {/* Centered Creative Header */}
                <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 relative">
                    {/* Decorative Blur */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        className="p-3 md:p-4 rounded-full bg-gradient-to-br from-yellow-400/20 to-purple-500/20 border border-white/10 backdrop-blur-md relative z-10"
                    >
                        <Medal size={40} className="text-yellow-400 drop-shadow-lg scale-75 md:scale-100" />
                    </motion.div>

                    <h2 className="text-3xl md:text-6xl font-bold text-white tracking-tight relative z-10">
                        Achievements & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Certificates</span>
                    </h2>

                    <p className="text-sm md:text-base text-gray-400 max-w-lg relative z-10 px-4">
                        A collection of milestones, awards, and certifications throughout my journey.
                    </p>
                </div>

                {/* Creative Navigation Menu - Scrollable on Mobile */}
                <div className="flex justify-center sticky top-4 z-30 px-4">
                    <div className="flex flex-nowrap md:flex-wrap overflow-x-auto md:overflow-hidden justify-start md:justify-center gap-2 p-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl max-w-full no-scrollbar">
                        {Object.keys(categories).map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat as CategoryName)}
                                className="relative px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 outline-none focus:outline-none whitespace-nowrap flex-shrink-0"
                            >
                                {activeTab === cat && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className={`relative z-10 ${activeTab === cat ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
                                    {cat}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 px-2 md:px-4"
                >
                    <AnimatePresence mode='popLayout'>
                        {categories[activeTab].map((item, index) => (
                            <motion.div
                                key={`${activeTab}-${index}`} // Unique key for presence animation
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                onClick={() => setSelectedCert(item)}
                                whileHover={{ y: -10 }}
                                className="group relative aspect-[4/3] bg-gray-900 rounded-xl md:rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-purple-500/50 transition-colors shadow-2xl"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                                <div className="absolute bottom-0 inset-x-0 p-4 transform translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 transition-transform">
                                    <p className="text-white text-xs md:text-sm font-medium text-center drop-shadow-md">{item.title}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Modal Popup */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-5xl w-full flex flex-col items-center"
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute -top-16 right-0 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all backdrop-blur-md border border-white/10"
                            >
                                <X size={24} />
                            </button>

                            <div className="relative w-full h-[60vh] md:h-[75vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#1a1a1a]">
                                <Image
                                    src={selectedCert.image}
                                    alt={selectedCert.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <div className="mt-8 text-center space-y-2">
                                <h3 className="text-xl md:text-3xl font-bold text-white">{selectedCert.title}</h3>
                                <span className="inline-block px-4 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs md:text-sm border border-purple-500/30">
                                    {activeTab}
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
