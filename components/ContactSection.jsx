'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function ContactSection() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [pesan, setPesan] = useState('');

  // Generate mailto link
  const subject = encodeURIComponent(`Pesan dari ${nama} (${email})`);
  const body = encodeURIComponent(pesan);
  const mailto = `mailto:dzaka.muran@gmail.com?subject=${subject}&body=${body}`;

  return (
    <section className="py-24 bg-transparent relative z-10" id="contact">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Hubungi <span className="text-gray-800">GUDKID</span>
        </h2>
        <motion.div
          className="bg-gray-50 rounded-2xl shadow-lg p-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.form className="flex flex-col gap-5" variants={item} onSubmit={e => { e.preventDefault(); window.location.href = mailto; }}>
            <input
              type="text"
              placeholder="Nama"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 outline-none transition"
              value={nama}
              onChange={e => setNama(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 outline-none transition"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Pesan"
              rows={4}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 outline-none transition"
              value={pesan}
              onChange={e => setPesan(e.target.value)}
              required
            />
            <button
              type="submit"
              className="mt-2 px-8 py-3 bg-gray-900 text-white font-semibold rounded-full shadow-md hover:bg-gray-700 transition-colors"
            >
              Kirim Email
            </button>
          </motion.form>
          <motion.div
            className="flex flex-col items-center mt-8"
            variants={item}
          >
            <a
              href="https://wa.me/6281237856874/?text=Halo, Saya Ingin Memesan Pembuatan Aplikasi Atau Berkonsultasi Berkaitan Dengan Solusi Digital Lainnya Ke GUDKID!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-gray-200 text-gray-900 rounded-full font-bold text-lg shadow-lg mt-2 hover:bg-gray-300 hover:scale-105 transition-transform"
            >
              <FaWhatsapp size={28} />
              WhatsApp Kami
            </a>
            <span className="text-xs text-gray-400 mt-2">Respon Cepat via WhatsApp</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 