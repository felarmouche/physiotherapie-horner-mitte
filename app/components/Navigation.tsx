"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../../public/images/logo.png";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">
                <Link href="/" className="flex items-center focus:outline-none">
                    <Image src={Logo} alt="Logo" width={60} priority />
                </Link>
                {/* Desktop-Navigation */}
                <nav className="hidden md:flex space-x-8">
                    <Link href="#hero" className="text-secondary hover:text-primary transition-colors text-lg">
                        Home
                    </Link>
                    <Link href="#about" className="text-secondary hover:text-primary transition-colors text-lg">
                        Über uns
                    </Link>
                    <Link href="#services" className="text-secondary hover:text-primary transition-colors text-lg">
                        Leistungen
                    </Link>
                    <Link href="#team" className="text-secondary hover:text-primary transition-colors text-lg">
                        Team
                    </Link>
                    <Link href="#contact" className="text-secondary hover:text-primary transition-colors text-lg">
                        Kontakt
                    </Link>
                </nav>
                {/* Mobile Hamburger-Menü */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-secondary focus:outline-none">
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>
            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <nav className="flex flex-col space-y-4 p-4">
                        <Link href="#hero" onClick={() => setIsOpen(false)} className="text-secondary hover:text-primary transition-colors">
                            Home
                        </Link>
                        <Link href="#about" onClick={() => setIsOpen(false)} className="text-secondary hover:text-primary transition-colors">
                            Über uns
                        </Link>
                        <Link href="#services" onClick={() => setIsOpen(false)} className="text-secondary hover:text-primary transition-colors">
                            Leistungen
                        </Link>
                        <Link href="#team" onClick={() => setIsOpen(false)} className="text-secondary hover:text-primary transition-colors">
                            Team
                        </Link>
                        <Link href="#contact" onClick={() => setIsOpen(false)} className="text-secondary hover:text-primary transition-colors">
                            Kontakt
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
