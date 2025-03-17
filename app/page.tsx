"use client";
import { useState } from "react";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Services from "./components/Services";
import ContactInfo from "./components/ContactInfo";
import AboutPraxis from "./components/AboutPraxis";
import Script from "next/script";
import ServicesSlider from "./components/ServicesSlider";
import Team from "./components/Team";


export default function HomePage() {
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  // Callback, wenn beide Skripte geladen sind
  const handleScriptsLoaded = () => {
    setScriptsLoaded(true);
  };
  return (
    <div>
      {/* Hero-Sektion */}
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
          <AboutPraxis
              companyName="Physiotherapie "
              welcomeMessage="Herzlich Willkommen bei"
              description1="Es freut uns sehr, dass Sie den Weg zu uns gefunden haben. Gemeinsam starten wir jetzt, um Ihre Gesundheit und Mobilität nachhaltig wiederherzustellen."
              description2="Ihre Gesundheit und Ihr Wohlbefinden sind uns wichtig. Deshalb arbeiten wir gerne mit Ihren Ärzten und Therapeuten zusammen."
              imageUrl="/images/about_img.jpg"
              altText="Praxis von außen"
          />
      </section>
        <section id="services">
            <Services /> {/* Slider (Bilderkarussell) */}
        </section>
        <section id="team" className="container mx-auto py-8">
            <Team/>
        </section>
        <section id="contact">
            <ContactInfo />
        </section>
        <section id="servicesSlider" className="container mx-auto py-8">
            <ServicesSlider />
        </section>

    </div>
  );
}
