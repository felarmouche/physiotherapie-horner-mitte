"use client";

import React, { JSX } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface Service {
    image: string;
    title: string;
    description: string;
}

export interface ServiceSliderProps {
    services?: Service[];
}

const defaultServices: Service[] = [
    {
        image: "/images/slider/fitnessstudio.jpg",
        title: "Modernste Fitnessgeräte",
        description:
            "Unsere modernen Fitnessgeräte unterstützen individuell angepasste Trainingsprogramme, um die Mobilität zu verbessern und die Regeneration zu fördern.",
    },
    {
        image: "/images/slider/wärme.jpg",
        title: "Wärmetherapie",
        description:
            "Durch gezielte Wärmeanwendungen werden Verspannungen gelöst, die Durchblutung gefördert und Schmerzen nachhaltig gelindert.",
    },
    {
        image: "/images/slider/schlingen.jpg",
        title: "Schlingentherapie",
        description:
            "Die Schlingentherapie entlastet Gelenke und Muskulatur, fördert eine sanfte Mobilisation und unterstützt so den natürlichen Heilungsprozess.",
    },
    {
        image: "/images/slider/elektro.jpg",
        title: "Elektrotherapie",
        description:
            "Mit elektrischen Impulsen stimuliert unsere Elektrotherapie die Muskulatur, lindert Schmerzen und fördert die Durchblutung für eine schnelle Regeneration.",
    },
];

export default function ServiceSlider({
                                          services = defaultServices,
                                      }: ServiceSliderProps): JSX.Element {
    return (
        <section className="w-full relative py-16 bg-gradient-to-b from-gray-100 to-white rounded-3xl shadow-xl">
            {/* Navigation Buttons */}
            <div className="service-prev absolute top-1/2 left-6 transform -translate-y-1/2 z-20 cursor-pointer rounded-full bg-white shadow-md opacity-80 p-3 text-primary hover:scale-110 transition-transform duration-300">
                <FaChevronLeft size={24} />
            </div>
            <div className="service-next absolute top-1/2 right-6 transform -translate-y-1/2 z-20 cursor-pointer rounded-full bg-white shadow-md opacity-80 p-3 text-primary hover:scale-110 transition-transform duration-300">
                <FaChevronRight size={24} />
            </div>
            <div className="relative group max-w-6xl mx-auto">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
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
                    spaceBetween={30}
                    className="rounded-2xl overflow-hidden relative z-10 py-12"
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col md:flex-row items-center gap-8 p-8">
                                {/* Text-Bereich */}
                                <div className="w-full md:w-1/2 md:pr-8">
                                    <motion.h3
                                        className="text-center md:text-left text-4xl font-extrabold mb-6 text-gray-800 drop-shadow-lg"
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        {service.title}
                                    </motion.h3>
                                    <motion.p
                                        className="text-center md:text-left text-xl text-gray-600 leading-relaxed"
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3, duration: 0.8 }}
                                    >
                                        {service.description}
                                    </motion.p>
                                </div>
                                {/* Bild-Bereich */}
                                <div className="w-full md:w-1/2">
                                    <motion.div
                                        className="w-full h-80 md:h-[28rem] bg-cover bg-center rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
                                        style={{ backgroundImage: `url(${service.image})` }}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.8, delay: 0.5 }}
                                    ></motion.div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Angepasstes Pagination-Styling */}
                <style jsx global>{`
                    .swiper-pagination {
                        bottom: -6px !important;
                        padding: 6px 10px;
                        border-radius: 20px;
                    }
                    .swiper-pagination-bullet-active {
                        transform: scale(1.3);
                    }
                `}</style>
            </div>
        </section>
    );
}