'use client';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const socials = [
  {
    icon: <FaInstagram size={22} />, url: 'https://instagram.com/gudkid', color: 'text-accent-pink',
  },
  {
    icon: <FaLinkedin size={22} />, url: 'https://www.linkedin.com/company/gudkid/', color: 'text-accent-purple',
  },
  {
    icon: <FaGithub size={22} />, url: 'https://github.com/dzkmrn/', color: 'text-accent-yellow',
  },
];

export default function Footer() {
  return (
    <footer className="py-8 bg-white border-t border-gray-100 text-center">
      <div className="flex justify-center gap-6 mb-2">
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-transform hover:scale-125 ${s.color}`}
          >
            {s.icon}
          </a>
        ))}
      </div>
      <div className="text-xs text-gray-400">&copy; {new Date().getFullYear()} GUDKID. All rights reserved.</div>
    </footer>
  );
} 