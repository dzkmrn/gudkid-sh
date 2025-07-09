'use client';
import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaComments } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <FaLaptopCode size={36} className="text-gray-800" />,
    title: 'Web App',
    desc: 'Pembuatan aplikasi web modern, cepat, dan scalable untuk kebutuhan bisnis Anda.',
    border: 'border-gray-300',
  },
  {
    icon: <FaMobileAlt size={36} className="text-gray-500" />,
    title: 'Mobile App',
    desc: 'Solusi aplikasi mobile (Android/iOS) dengan performa tinggi dan UI menarik.',
    border: 'border-gray-300',
  },
  {
    icon: <FaPaintBrush size={36} className="text-gray-400" />,
    title: 'UI/UX Design',
    desc: 'Desain antarmuka dan pengalaman pengguna yang memukau dan efektif.',
    border: 'border-gray-300',
  },
  {
    icon: <FaComments size={36} className="text-gray-800" />,
    title: 'Konsultasi',
    desc: 'Diskusi dan konsultasi teknologi untuk solusi digital terbaik.',
    border: 'border-gray-300',
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

export default function ServicesSection() {
  return (
    <section className="py-24 bg-transparent relative z-10" id="services">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Layanan <span className="text-gray-800">GUDKID</span>
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((srv, i) => (
            <motion.div
              key={srv.title}
              variants={card}
              whileHover={{ y: -12, scale: 1.04, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}
              className={`flex flex-col items-center p-8 bg-transparent border-2 ${srv.border} rounded-2xl transition-all duration-200 cursor-pointer`}
            >
              <div className="mb-4">{srv.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">{srv.title}</h3>
              <p className="text-gray-600 text-center text-sm">{srv.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 