"use client";

import React, { JSX } from "react";
import { motion } from "framer-motion";

interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    bio: string;
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "John Doe",
        role: "Praxisinhaber/Physiotherapeut",
        image: "/images/team/john.jpg",
        bio: "John ist unser erfahrener Praxisinhaber und Physiotherapeut mit über 20 Jahren Expertise in der Behandlung von Patienten.",
    },
    {
        id: 2,
        name: "Jane Smith",
        role: "Physiotherapeutin",
        image: "/images/team/jane.jpg",
        bio: "Jane überzeugt durch ihr einfühlsames Wesen und innovative Behandlungsmethoden im Bereich Physiotherapie.",
    },
    {
        id: 3,
        name: "Alex Johnson",
        role: "Praxisdesigner",
        image: "/images/team/alex.jpg",
        bio: "Alex gestaltet unsere Praxisräume modern und funktional, um eine angenehme Atmosphäre zu schaffen.",
    },
    {
        id: 4,
        name: "Emily Davis",
        role: "Auszubildende",
        image: "/images/team/emily.jpg",
        bio: "Emily ist unsere engagierte und motivierte Auszubildende, die mit viel Einsatz und Leidenschaft ihre Fähigkeiten weiterentwickelt.",
    },
];

export default function TeamSection(): JSX.Element {
    return (
        <section className="py-16 rounded-xl">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl sm:text-5xl font-bold text-center text-secondary mb-12">
                    Unser Team
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member) => (
                        <motion.div
                            key={member.id}
                            className="bg-white rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                        >
                            {/* Nur der Bildcontainer erhält overflow-hidden */}
                            <div className="overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-56 object-cover"
                                />
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-xl sm:text-2xl font-bold text-primary">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-secondary mb-2">
                                    {member.role}
                                </p>
                                <p className="text-base sm:text-lg">
                                    {member.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
