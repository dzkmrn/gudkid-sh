'use client';
import { motion } from 'framer-motion';

export default function AnimatedLogo({ className = '' }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      className={className}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {/* G */}
      <motion.path
        d="M120,500 Q120,200 400,200 Q680,200 680,500 Q680,800 400,800 Q220,800 220,650"
        stroke="#000"
        strokeWidth="40"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      <motion.path
        d="M220,650 L400,650"
        stroke="#000"
        strokeWidth="40"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      />
      {/* U */}
      <motion.path
        d="M750,200 L750,650 Q750,800 950,800 Q1150,800 1150,650 L1150,200"
        stroke="#000"
        strokeWidth="40"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      />
      {/* D */}
      <motion.path
        d="M1280,200 L1280,800 Q1600,800 1600,500 Q1600,200 1280,200"
        stroke="#000"
        strokeWidth="40"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      />
      {/* K */}
      <motion.path
        d="M120,1200 L120,1800"
        stroke="#000"
        strokeWidth="40"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
      <motion.path
        d="M120,1500 L400,1200"
        stroke="#000"
        strokeWidth="40"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.7, delay: 1.1 }}
      />
      <motion.path
        d="M120,1500 L400,1800"
        stroke="#000"
        strokeWidth="40"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.7, delay: 1.3 }}
      />
      {/* I */}
      <motion.path
        d="M600,1200 L900,1200"
        stroke="#000"
        strokeWidth="40"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      />
      <motion.path
        d="M750,1200 L750,1800"
        stroke="#000"
        strokeWidth="40"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.7, delay: 1.7 }}
      />
      <motion.path
        d="M600,1800 L900,1800"
        stroke="#000"
        strokeWidth="40"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 1.9 }}
      />
      {/* D bawah */}
      <motion.path
        d="M1050,1200 L1050,1800 Q1370,1800 1370,1500 Q1370,1200 1050,1200"
        stroke="#000"
        strokeWidth="40"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 2.1 }}
      />
    </motion.svg>
  );
} 