'use client';
import { motion } from 'framer-motion';

export default function AnimatedWave() {
  return (
    <div style={{ width: '100%', height: '140px', position: 'relative' }}>
      {/* Wave 1 */}
      <motion.svg
        viewBox="0 0 1440 320"
        style={{ width: '100%', height: '120px', position: 'absolute', top: 0, left: 0, zIndex: 1 }}
        initial={{ y: 0 }}
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGray1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e5e7eb" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGray1)"
          fillOpacity="0.7"
          d="M0,160 C360,240 1080,80 1440,160 L1440,320 L0,320 Z"
        />
      </motion.svg>
      {/* Wave 2 */}
      <motion.svg
        viewBox="0 0 1440 320"
        style={{ width: '100%', height: '120px', position: 'absolute', top: 0, left: 0, zIndex: 2 }}
        initial={{ y: 0 }}
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGray2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f3f4f6" />
            <stop offset="100%" stopColor="#e5e7eb" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGray2)"
          fillOpacity="0.5"
          d="M0,180 C400,100 1040,220 1440,180 L1440,320 L0,320 Z"
        />
      </motion.svg>
      {/* Wave 3 */}
      <motion.svg
        viewBox="0 0 1440 320"
        style={{ width: '100%', height: '120px', position: 'absolute', top: 0, left: 0, zIndex: 3 }}
        initial={{ y: 0 }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGray3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="#d1d5db" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGray3)"
          fillOpacity="0.3"
          d="M0,200 C500,300 900,100 1440,200 L1440,320 L0,320 Z"
        />
      </motion.svg>
    </div>
  );
} 