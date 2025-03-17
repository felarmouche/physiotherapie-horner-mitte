"use client";

import "../globals.css";
import React from "react";

interface AboutProps {
    companyName: string;
    welcomeMessage: string;
    description1: string;
    description2: string;
    imageUrl: string;
    altText: string;
}

export default function AboutPraxis({
                                        companyName,
                                        welcomeMessage,
                                        description1,
                                        description2,
                                        imageUrl,
                                        altText,
                                    }: AboutProps) {
    return (
        <section className="relative bg-white py-24 overflow-hidden">
            {/* Dekorative Farbflächen */}
            <div className="absolute top-[-50px] left-[-50px] w-60 h-60 bg-gradient-to-br from-primary/30 to-transparent rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-[-50px] right-[-50px] w-60 h-60 bg-gradient-to-tr from-secondary/30 to-transparent rounded-full filter blur-3xl"></div>

            {/* Container für Inhalt */}
            <div className="relative z-10 container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Bilderbereich */}
                    <div className="w-full md:w-1/2">
                        <img
                            src={imageUrl}
                            alt={altText}
                            className="w-full h-96 object-cover rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    {/* Textbereich */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-secondary text-xl md:text-2xl font-semibold uppercase mb-3 tracking-wider">
                            {welcomeMessage}
                        </h2>
                        <h1 className="text-primary text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            {companyName}
                        </h1>
                        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
                            {description1}
                        </p>
                        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                            {description2}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
