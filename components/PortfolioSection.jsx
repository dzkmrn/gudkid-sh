'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    img: 'https://dzk-portfolio-web.vercel.app/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fuc%3Fexport%3Dview%26id%3D1LoDtLnxWDNCLV6qylHMVquNI6ByNqr9p&w=3840&q=75',
    title: 'Aplikasi Bank Sampah',
    desc: 'Mobile App Kotlin untuk mengelola dan menyetor sampah dengan imbalan uang.',
  },
  {
    img: 'bakrie2.png',
    title: 'Website Manajemen MOU',
    desc: 'Aplikasi mobile untuk marketplace produk digital dan pembayaran online.',
  },
  {
    img: 'dastracorp.jpeg',
    title: 'Dastracorp | Exporter Company',
    desc: 'Website profil untuk memperkenalkan produk eksportir rotan.',
  },
  {
    img: 'factha.png',
    title: 'Factha | Fact Checker News Anchor',
    desc: 'Aplikasi mobile news platform untuk menganalisis berita dan konten didalamnya',
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function PortfolioSection() {
  return (
    <section className="py-24 bg-transparent relative z-10" id="portfolio">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Portfolio <span className="text-gray-800">GUDKID</span>
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              variants={card}
              className="group relative rounded-2xl overflow-hidden shadow-lg bg-transparent cursor-pointer"
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}
            >
              <div className="overflow-hidden">
                <motion.img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex flex-col justify-end p-4">
                  <motion.h3
                    className="text-lg font-semibold text-white mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {proj.title}
                  </motion.h3>
                  <motion.p
                    className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {proj.desc}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 