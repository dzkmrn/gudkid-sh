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
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8 z-10"
        >
          <img src="/logo_gudkid.png" alt="GUDKID Logo" className="w-64 h-64 object-contain" />
        </motion.div>
        <TypingText
          text="We Build Digital Solutions for Your Business"
          className="text-4xl font-bold text-center z-10"
          accentClass="text-accent-yellow"
        />
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-4 text-lg text-gray-600 text-center max-w-xl z-10"
        >
          GUDKID adalah software house yang membantu bisnis Anda membangun aplikasi web, mobile, dan solusi digital lainnya.
        </motion.p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="mt-8 px-8 py-3 bg-black text-white rounded-full font-semibold shadow-lg z-10 transition-colors hover:bg-accent-yellow hover:text-black"
        >
          Konsultasi Gratis
        </motion.a>
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
} 