'use client';
import { motion } from 'framer-motion';

export default function AnimatedBlob() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Blob abu-abu terang */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-gray-200 rounded-full filter blur-3xl opacity-40 animate-blob"
        animate={{ x: [0, 100, 0], y: [0, 80, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Blob abu-abu gelap */}
      <motion.div
        className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] bg-gray-400 rounded-full filter blur-3xl opacity-30 animate-blob"
        animate={{ x: [0, -80, 0], y: [0, -60, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Blob putih */}
      <motion.div
        className="absolute bottom-[-10%] left-[20%] w-[300px] h-[300px] bg-white rounded-full filter blur-3xl opacity-30 animate-blob"
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Garis dekorasi simple */}
      <motion.div
        className="absolute left-[10%] top-[60%] w-40 h-1 bg-gray-400 opacity-10 rotate-12 rounded-full"
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[15%] top-[20%] w-24 h-1 bg-gray-400 opacity-10 -rotate-12 rounded-full"
        animate={{ x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Dots monokrom */}
      <motion.div
        className="absolute left-[5%] top-[15%] w-3 h-3 bg-gray-500 rounded-full opacity-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[8%] bottom-[18%] w-2 h-2 bg-gray-500 rounded-full opacity-20"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-[40%] bottom-[10%] w-2.5 h-2.5 bg-gray-400 rounded-full opacity-10"
        animate={{ x: [0, 12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Garis lengkung SVG */}
      <motion.svg
        className="absolute left-[20%] top-[30%] w-32 h-12 opacity-10"
        viewBox="0 0 128 48"
        fill="none"
        stroke="#222"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M4 44 Q64 0 124 44" />
      </motion.svg>
      <motion.svg
        className="absolute right-[18%] bottom-[25%] w-24 h-8 opacity-10"
        viewBox="0 0 96 32"
        fill="none"
        stroke="#222"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M4 28 Q48 0 92 28" />
      </motion.svg>
    </div>
  );
} 