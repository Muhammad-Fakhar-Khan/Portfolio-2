'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useMotionValueEvent, useTransform } from 'framer-motion';
import Overlay from './Overlay';

const FRAME_COUNT = 75;

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Map 0-1 scroll to 0-(FRAME_COUNT-1)
    const currentIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const promises: Promise<void>[] = [];

            for (let i = 0; i < FRAME_COUNT; i++) {
                const promise = new Promise<void>((resolve, reject) => {
                    const img = new Image();
                    img.src = `/sequence/frame_${i.toString().padStart(3, '0')}.png`;
                    img.onload = () => {
                        loadedImages[i] = img;
                        resolve();
                    };
                    img.onerror = reject;
                });
                promises.push(promise);
            }

            await Promise.all(promises);
            setImages(loadedImages);
            setIsLoaded(true);
        };

        loadImages();
    }, []);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !images[index]) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = images[index];

        // Canvas sizing logic for "cover"
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const imgRatio = img.width / img.height;
        const canvasRatio = canvasWidth / canvasHeight;

        let drawWidth = canvasWidth;
        let drawHeight = canvasHeight;
        let offsetX = 0;
        let offsetY = 0;

        if (imgRatio > canvasRatio) {
            // Image is wider than canvas
            drawHeight = canvasHeight;
            drawWidth = drawHeight * imgRatio;
            offsetX = (canvasWidth - drawWidth) / 2;
        } else {
            // Image is taller than canvas
            drawWidth = canvasWidth;
            drawHeight = drawWidth / imgRatio;
            offsetY = (canvasHeight - drawHeight) / 2;
        }

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    useMotionValueEvent(currentIndex, 'change', (latest) => {
        if (!isLoaded) return;
        const index = Math.floor(latest);
        requestAnimationFrame(() => renderFrame(index));
    });

    // Handle Resize and Initial Render
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // Re-render current frame
                if (isLoaded) {
                    const current = Math.floor(currentIndex.get());
                    renderFrame(current);
                }
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Init

        return () => window.removeEventListener('resize', handleResize);
    }, [isLoaded]);

    // Initial draw once loaded
    useEffect(() => {
        if (isLoaded) {
            renderFrame(0);
        }
    }, [isLoaded]);


    return (
        <div ref={containerRef} className="h-[500vh] relative bg-[#121212]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-white z-50">
                        Loading Sequence...
                    </div>
                )}
                <Overlay scrollYProgress={scrollYProgress} />
                <canvas
                    ref={canvasRef}
                    className="block w-full h-full object-cover"
                />
            </div>
        </div>
    );
}
