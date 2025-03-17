import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMobileAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function ContactInfo() {
  return (
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-secondary mb-12">
            Kontakt & Öffnungszeiten
          </h2>
          <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Kartenbereich */}
              <div className="flex-1">
                <iframe
                    title="Praxis Standort"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.864173441457!2d10.531278115811407!3d52.274115979756664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b0e03c12345678%3A0xabcdef123456789!2sPapenstieg%208%2C%2038100%20Braunschweig!5e0!3m2!1sde!2sde!4v1610000000000!5m2!1sde!2sde"
                    width="100%"
                    height="350"
                    loading="lazy"
                    className="border-0 rounded-xl"
                ></iframe>
              </div>
              {/* Infobereich */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Linke Spalte: Kontaktinfos */}
                <div className="flex flex-col gap-6 items-center text-center">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-center text-gray-700">
                      <FaEnvelope className="text-primary mr-2" size={20} />
                      <span className="font-semibold text-lg">E-Mail:</span>
                    </div>
                    <p className="text-lg text-gray-600">
                      <a
                          href="mailto:info@reitenbach-therapie.de"
                          className="hover:text-primary transition-colors"
                      >
                        info@reitenbach-therapie.de
                      </a>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-center text-gray-700">
                      <FaPhone className="text-primary mr-2" size={20} />
                      <span className="font-semibold text-lg">Telefon:</span>
                    </div>
                    <p className="text-lg text-gray-600">
                      <a
                          href="tel:053160942061"
                          className="hover:text-primary transition-colors"
                      >
                        0531/60942061
                      </a>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-center text-gray-700">
                      <FaMobileAlt className="text-primary mr-2" size={20} />
                      <span className="font-semibold text-lg">Mobil:</span>
                    </div>
                    <p className="text-lg text-gray-600">
                      <a
                          href="tel:017640459297"
                          className="hover:text-primary transition-colors"
                      >
                        0176/40459297
                      </a>
                    </p>
                  </div>
                </div>
                {/* Rechte Spalte: Adresse & Öffnungszeiten */}
                <div className="flex flex-col gap-6 items-center text-center">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-center text-gray-700">
                      <FaMapMarkerAlt className="text-primary mr-2" size={20} />
                      <span className="font-semibold text-lg">Adresse:</span>
                    </div>
                    <p className="text-lg text-gray-600">
                      A. Reitenbach Physiotherapie
                      <br />
                      Papenstieg 8
                      <br />
                      38100 Braunschweig
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-center text-gray-700">
                      <FaClock className="text-primary mr-2" size={20} />
                      <span className="font-semibold text-lg">
                      Öffnungszeiten:
                    </span>
                    </div>
                    <p className="text-lg text-gray-600">
                      Montag bis Freitag
                      <br />
                      08:00 Uhr bis 13:00 Uhr
                      <br />
                      und
                      <br />
                      14:00 Uhr bis 19:00 Uhr
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
