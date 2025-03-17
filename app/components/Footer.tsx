"use client";
import React, { useRef, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeInUp");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-secondary text-white py-14 transform opacity-0 "
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Firmeninfo */}
          <div>
            <h3 className="text-xl font-bold mb-4">Physiotherapie Horner Mitte</h3>
            <p className="text-gray-300">
              L. Treptow Physiotherapie<br />
              Leher Heerstr.1 <br />
              28359 Bremen
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Navigation</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#hero" className="hover:text-accent transition">Home</a></li>
              <li><a href="#services" className="hover:text-accent transition">Leistungen</a></li>
              <li><a href="#contact" className="hover:text-accent transition">Kontakt</a></li>
              <li><a href="/impressum" className="hover:text-accent transition">Impressum</a></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Kontakt</h4>
            <ul className="space-y-2 text-gray-300">
              <li>E-Mail: <a href="mailto:info@Treptow-therapie.de" className="hover:text-accent transition">physio@horner-mitte.de</a></li>
              <li>Telefon: <a href="tel:+4953160942061" className="hover:text-accent transition">0421/22347822</a></li>
            </ul>
          </div>

          {/* Soziale Medien */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Folge uns</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent transition" aria-label="Facebook">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition" aria-label="LinkedIn">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-primary pt-4 text-center text-white text-sm">
          &copy; {new Date().getFullYear()} Physio Treptow. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
