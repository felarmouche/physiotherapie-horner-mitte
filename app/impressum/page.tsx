// app/impressum/page.jsx
"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Impressum() {
  return (
    <main className="bg-gray-50 text-gray-800">
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-center">Impressum</h1>

        <p className="mb-4">Quelle Fotos: Anton Reitenbach</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Angaben gemäß § 5 TMG:</h2>
        <address className="not-italic mb-6">
          Physiotherapie A. Reitenbach<br />
          Papenstieg 8<br />
          38100 Braunschweig
        </address>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Vertreten durch:</h2>
        <p className="mb-6">Antonia Reitenbach</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Kontakt:</h2>
        <p className="mb-2">Telefon: <a href="tel:+4953160942061" className="text-teal-600 hover:underline">+49 531 60942061</a></p>
        <p className="mb-6">E-Mail: <a href="mailto:info@reitenbach-therapie.de" className="text-teal-600 hover:underline">info@reitenbach-therapie.de</a></p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Zuständige Aufsichtsbehörde:</h2>
        <address className="not-italic mb-6">
          Gesundheitsamt Braunschweig<br />
          Hamburger Str. 226<br />
          38114 Braunschweig<br />
          Telefon: <a href="tel:05314707022" className="text-teal-600 hover:underline">0531 4707022</a>
        </address>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Haftungsausschluss:</h2>
        <h3 className="text-xl font-semibold mt-6 mb-2">Haftung für Inhalte</h3>
        <p className="mb-4">
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. ...
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-2">Haftung für Links</h3>
        <p className="mb-4">
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. ...
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-2">Urheberrecht</h3>
        <p className="mb-4">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. ...
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-2">Datenschutz</h3>
        <p className="mb-4">
          Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. ...
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Unsere Praxis auf Google Maps</h2>
        <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden mb-6">
          <iframe
            title="Physio Reitenbach Standort"
            src="https://www.google.com/maps/embed?pb=!1m18... " 
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
