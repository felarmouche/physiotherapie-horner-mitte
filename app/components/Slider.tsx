"use client";

import React, {JSX, useState} from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageType {
    id: number;
    src: string;
    alt: string;
}

const images: ImageType[] = [
    { id: 1, src: "/images/1.webp", alt: "Praxis Impression 1" },
    { id: 2, src: "/images/2.webp", alt: "Praxis Impression 2" },
    { id: 3, src: "/images/3.webp", alt: "Praxis Impression 3" },
    { id: 4, src: "/images/4.webp", alt: "Praxis Impression 4" },
    { id: 5, src: "/images/4.webp", alt: "Praxis Impression 5" },
    { id: 6, src: "/images/6.webp", alt: "Praxis Impression 6" },
    { id: 7, src: "/images/7.webp", alt: "Praxis Impression 7" },
    { id: 8, src: "/images/8.webp", alt: "Praxis Impression 8" },
];

export default function Slider(): JSX.Element {
    const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

    const openModal = (image: ImageType): void => setSelectedImage(image);
    const closeModal = (): void => setSelectedImage(null);

    return (
        <section className="py-12 ">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-secondary mb-12">
                    Impressionen
                </h2>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
                    {images.map((image) => (
                        <motion.div
                            key={image.id}
                            className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            onClick={() => openModal(image)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-64 object-cover transition-all duration-300 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 ease-in-out" />
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="relative bg-light p-4 rounded-lg"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
                        >
                            <button
                                onClick={closeModal}
                                className="absolute top-2 right-2 text-3xl text-secondary hover:text-primary transition-colors"
                            >
                                &times;
                            </button>
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="max-w-full max-h-[80vh] object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
