"use client";

import React, {JSX, useState} from "react";
import {
  BsHeartPulse,
  BsLightningCharge,
  BsWind,
  BsChevronRight,
} from "react-icons/bs";
import { FaRunning } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Therapy {
  title: string;
  description: string;
}

interface Category {
  name: string;
  icon: JSX.Element;
  bgImage: string;
  therapies: Therapy[];
}

const categories: Category[] = [
  {
    name: "Manuelle & klassische Therapien",
    icon: <BsHeartPulse size={50} />,
    bgImage: "/images/categories/physio.jpg",
    therapies: [
      {
        title: "Massage",
        description:
            "Klassische, mobilisierende und funktionelle Massagen, die Schmerzlinderung und Funktionsverbesserung bieten.",
      },
      {
        title: "Manuelle Lymphdrainage",
        description:
            "Techniken zur Entstauung des Lymph- und Venensystems sowie zur Förderung des Stoffwechsels.",
      },
      {
        title: "Krankengymnastik",
        description:
            "Gezielte Übungen zur Verbesserung von Beweglichkeit, Kraft und Koordination.",
      },
      {
        title: "Bindegewebsmassage",
        description:
            "Tiefengewebsmassage zur Lösung von Verklebungen und Förderung der Regeneration.",
      },
    ],
  },
  {
    name: "Bewegung & Sport",
    icon: <FaRunning size={50} />,
    bgImage: "/images/categories/move.jpg",
    therapies: [
      {
        title: "KG-Neurologie / PFN",
        description:
            "Neurologische Krankengymnastik zur Verbesserung der Bewegungsabläufe.",
      },
      {
        title: "Sporttherapie",
        description:
            "Individuelle Trainingsprogramme zur schnellen Rehabilitation nach Verletzungen.",
      },
      {
        title: "Wirbelsäulengymnastik",
        description:
            "Übungen zur Stärkung der Rückenmuskulatur und Verbesserung der Körperhaltung.",
      },
      {
        title: "Lauf-/Ganganalyse",
        description:
            "Analyse des Bewegungsablaufs zur Optimierung der Technik und Verletzungsprävention.",
      },
      {
        title: "Faszientherapie / FDM",
        description:
            "Manuelle Techniken zur Lösung von Faszienverklebungen und Schmerzlinderung.",
      },
      {
        title: "KG-Neurologie / PNF",
        description:
            "Aktive Bewegungstherapie zur Wiedererlangung verlorener Funktionen.",
      },
    ],
  },
  {
    name: "Spezielle Anwendungen",
    icon: <BsLightningCharge size={50} />,
    bgImage: "/images/categories/spezi.jpg",
    therapies: [
      {
        title: "Kiefergelenksbehandlung / CMD",
        description:
            "Therapie zur Entspannung der Kiefermuskulatur und Verbesserung der Gelenkfunktionen.",
      },
      {
        title: "Moorpackungen / Fango",
        description:
            "Wärmetherapie mit Moorpackungen zur Förderung der Durchblutung und Reduktion von Entzündungen.",
      },
      {
        title: "Atemtherapie",
        description:
            "Behandlung zur Verbesserung der Atmungsfunktion bei Atemwegserkrankungen.",
      },
      {
        title: "Dorntherapie",
        description:
            "Sanfte manuelle Eingriffe zur Korrektur von Fehlstellungen in Wirbelsäule und Gelenken.",
      },
      {
        title: "Schlingentherapie",
        description:
            "Entlastung von Gelenken und Muskulatur durch Schlingentischbehandlungen.",
      },
      {
        title: "Schröpfen",
        description:
            "Traditionelle Methode zur Förderung der Durchblutung und Schmerzlinderung.",
      },
      {
        title: "N.A.P.®",
        description:
            "Kombination manueller Techniken mit aktiver Bewegung zur Wiederherstellung der Funktion.",
      },
    ],
  },
  {
    name: "Zusätzliche Techniken",
    icon: <BsWind size={50} />,
    bgImage: "/images/categories/elekktro.jpg",
    therapies: [
      {
        title: "Kinesiotaping",
        description:
            "Elastische Tapes zur Unterstützung der Muskulatur und Stabilisierung der Gelenke.",
      },
      {
        title: "Elektrotherapie",
        description:
            "Therapie mittels elektrischer Impulse zur Schmerzlinderung und Muskelstimulation.",
      },
    ],
  },
];

export default function CategoryBoxes() {
  const [openCategoryIndex, setOpenCategoryIndex] = useState<number | null>(null);
  const [openAll, setOpenAll] = useState(false);

  const closeModal = () => {
    setOpenCategoryIndex(null);
    setOpenAll(false);
  };

  const allTherapies = categories.flatMap((category) => category.therapies);

  return (
      <section className="py-12 relative pb-[14vh] border-t border-gray-200 md:border-none">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-secondary mb-12">
            Leistungen
          </h2>

          <div className="grid gap-6 mt-10 md:grid-cols-4">
            {categories.map((cat, index) => (
                <motion.button
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setOpenCategoryIndex(index)}
                    className="relative rounded-xl shadow-md p-6 flex flex-col items-center gap-4 cursor-pointer min-h-[180px] md:min-h-[250px] w-full overflow-hidden"
                    style={{
                      backgroundImage: `url(${cat.bgImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                >
                  {/* Overlay für besseren Textkontrast */}
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="bg-white bg-opacity-70 rounded-full p-2 mb-2">
                      {React.cloneElement(cat.icon, {
                        className: "w-10 h-10 text-primary",
                      })}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-white text-center drop-shadow-md">
                      {cat.name}
                    </h3>
                  </div>
                  <div className="absolute bottom-4 right-4 z-10 bg-white bg-opacity-70 p-1 rounded-full">
                    <BsChevronRight className="animate-pulse w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                </motion.button>
            ))}
          </div>
        </div>

        {/* Floating Action Button */}
        <motion.div
            className="absolute bottom-10 right-20 z-20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
          <button
              className="flex items-center gap-3 bg-primary  text-light px-8 py-3 rounded-full shadow-2xl transition-all transform hover:scale-105 hover:brightness-110 font-bold text-xl"
              onClick={() => setOpenAll(true)}
          >
            Alle Leistungen
            <BsChevronRight className="w-6 h-6 animate-bounce" />
          </button>
        </motion.div>

        <AnimatePresence>
          {openCategoryIndex !== null && (
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 px-4"
                  onClick={closeModal}
              >
                <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.95 }}
                    className="bg-white rounded-xl shadow-lg w-full max-w-4xl p-8 relative max-h-[80vh] overflow-y-auto"
                    onClick={(e: React.MouseEvent) => e.stopPropagation()}
                >
                  <button
                      onClick={closeModal}
                      className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-3xl font-bold transition-colors"
                  >
                    &times;
                  </button>

                  <div className="text-center mb-8 p-4 rounded-lg border border-gray-200">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {categories[openCategoryIndex].name}
                    </h3>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    {categories[openCategoryIndex].therapies.map((therapy, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-transparent hover:border-gray-300"
                        >
                          <h4 className="text-xl font-semibold text-gray-800 mb-2">
                            {therapy.title}
                          </h4>
                          <p className="text-gray-600 text-base leading-relaxed">
                            {therapy.description}
                          </p>
                        </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
          )}

          {openAll && (
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 px-4"
                  onClick={closeModal}
              >
                <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.95 }}
                    className="bg-white rounded-xl shadow-lg w-full max-w-4xl p-8 relative max-h-[80vh] overflow-y-auto"
                    onClick={(e: React.MouseEvent) => e.stopPropagation()}
                >
                  <button
                      onClick={closeModal}
                      className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-3xl font-bold transition-colors"
                  >
                    &times;
                  </button>

                  <div className="text-center mb-8 p-4 rounded-lg">
                    <h3 className="text-2xl font-semibold text-primary">
                      Alle Leistungen
                    </h3>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    {allTherapies.map((therapy, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-transparent hover:border-gray-300"
                        >
                          <h4 className="text-xl font-semibold text-gray-800 mb-2">
                            {therapy.title}
                          </h4>
                          <p className="text-gray-600 text-base leading-relaxed">
                            {therapy.description}
                          </p>
                        </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
          )}
        </AnimatePresence>
      </section>
  );
}
