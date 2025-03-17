"use client";

import React, { JSX } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

interface Slide {
    id: number;
    image: string;
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
}

const slides: Slide[] = [
    {
        id: 1,
        image: "/images/hero/main.jpg",
        title: "Ihr Weg zur Genesung",
        subtitle: "Individuelle Physiotherapie für mehr Lebensqualität.",
        ctaText: "Mehr erfahren",
        ctaLink: "#about",
    },
    {
        id: 2,
        image: "/images/hero/fittness.jpg",
        title: "Innovative Therapiekonzepte",
        subtitle: "Modernste Behandlungen, die Sie wieder in Bewegung bringen.",
        ctaText: "Unsere Leistungen",
        ctaLink: "#services",
    },
    {
        id: 3,
        image: "/images/hero/team.jpg",
        title: "Persönliche Betreuung",
        subtitle: "Beste Betreuung durch unsere kompetenten Mitarbeiter.",
        ctaText: "Unser Team",
        ctaLink: "#team",
    },
];

export default function Hero(): JSX.Element {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            <div className="service-prev absolute top-1/2 left-6 transform -translate-y-1/2 z-20 cursor-pointer rounded-full  p-3 border-2 border-secondary text-primary hover:scale-110 transition-transform duration-300">
                <FaChevronLeft size={30} />
            </div>
            <div className="service-next absolute top-1/2 right-6 transform -translate-y-1/2 z-20 cursor-pointer rounded-full p-3 border-2 border-secondary text-primary hover:scale-110 transition-transform duration-300">
                <FaChevronRight size={30} />
            </div>
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                navigation={{
                    prevEl: ".service-prev",
                    nextEl: ".service-next",
                }}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) =>
                        `<span class="${className} w-3 h-3 mx-1 bg-primary hover:scale-125 transition-transform rounded-full"></span>`,
                }}
                slidesPerView={1}
                className="h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative h-full">
                        {/* Hintergrundbild */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        ></div>
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-base bg-opacity-60"></div>
                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-14">
                            <motion.h1
                                className="text-light text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                {slide.title}
                            </motion.h1>
                            <motion.p
                                className="text-light text-lg md:text-xl mb-8 max-w-2xl"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 1 }}
                            >
                                {slide.subtitle}
                            </motion.p>
                            <motion.a
                                href={slide.ctaLink}
                                className="bg-primary text-light py-3 px-6 rounded-full text-xl hover:bg-secondary transition-colors"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 1 }}
                            >
                                {slide.ctaText}
                            </motion.a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Globales Styling für Pagination */}
            <style jsx global>{`
                .swiper-pagination {
                    bottom: 20px !important;
                }
                .swiper-pagination-bullet-active {
                    transform: scale(1.3);
                }
            `}</style>
        </section>
    );
}
