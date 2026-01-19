'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'WordPress', id: 'wordpress' },
    { name: 'Custom Apps', id: 'custom' },
    { name: 'Certificates', id: 'certificates' },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    // Handle smooth scroll
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    // Update active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Simple intersection check could be enhanced, simplified logic for now
            const sections = navItems.map(item => document.getElementById(item.id));

            for (const section of sections) {
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= 300) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${scrolled ? '' : ''}`}>
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex items-center gap-1 p-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl overflow-x-auto max-w-full no-scrollbar"
            >
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="relative px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 outline-none focus:outline-none whitespace-nowrap"
                    >
                        {activeSection === item.id && (
                            <motion.div
                                layoutId="active-nav-pill"
                                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className={`relative z-10 ${activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
                            {item.name}
                        </span>
                    </button>
                ))}
            </motion.div>
        </nav>
    );
}
