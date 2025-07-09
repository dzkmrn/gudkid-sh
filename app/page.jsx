'use client';

import { motion } from 'framer-motion';
import TypingText from '../components/TypingText';
import AnimatedBlob from '../components/AnimatedBlob';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent">
        <AnimatedBlob />
        
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center mb-16 z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8"
          >
            <img 
              src="/logo_gudkid.png" 
              alt="GUDKID Software House Logo - Jasa Pembuatan Aplikasi Web dan Mobile Indonesia" 
              className="w-64 h-64 object-contain" 
            />
          </motion.div>
          
          <h1 className="sr-only">GUDKID - Software House Indonesia | Jasa Pembuatan Aplikasi Web & Mobile</h1>
          
          <TypingText
            text="We Build Digital Solutions for Your Business"
            className="text-4xl font-bold text-center"
            accentClass="text-accent-yellow"
          />
          
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="mt-4 text-lg text-gray-600 text-center max-w-xl"
          >
            GUDKID adalah software house terpercaya di Indonesia yang membantu bisnis Anda membangun aplikasi web, mobile, dan solusi digital lainnya dengan teknologi terkini.
          </motion.p>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="mt-8 px-8 py-3 bg-black text-white rounded-full font-semibold shadow-lg transition-colors hover:bg-accent-yellow hover:text-black"
            aria-label="Konsultasi gratis untuk jasa pembuatan aplikasi"
          >
            Konsultasi Gratis
          </motion.a>
        </section>

        {/* Services Section */}
        <section id="services" aria-label="Layanan Software House">
          <ServicesSection />
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" aria-label="Portfolio Proyek Software House">
          <PortfolioSection />
        </section>

        {/* Contact Section */}
        <section id="contact" aria-label="Kontak Software House GUDKID">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </>
  );
} 