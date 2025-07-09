'use client';
import { motion } from 'framer-motion';

const colors = ['#fff', '#e5e7eb', '#6b7280', '#111'];
const particles = Array.from({ length: 10 });

export default function AnimatedParticles() {
  return (
    <>
      {particles.map((_, i) => {
        // Randomize start/end position, size, duration, and delay
        const size = Math.random() * 16 + 16;
        const left = Math.random() * 90 + '%';
        const top = Math.random() * 80 + '%';
        const deltaX = Math.random() * 60 - 30;
        const deltaY = Math.random() * 40 - 20;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 8;
        const color = colors[i % colors.length];
        return (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              left,
              top,
              width: size,
              height: size,
              borderRadius: '50%',
              background: color,
              opacity: 0.3,
              pointerEvents: 'none',
              zIndex: 0,
              filter: 'blur(1px)'
            }}
            animate={{ x: [0, deltaX, 0], y: [0, deltaY, 0] }}
            transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
          />
        );
      })}
    </>
  );
} 