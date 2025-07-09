'use client';
import { useEffect, useState } from 'react';

export default function TypingText({ text, className = '', accentClass = '' }) {
  const [displayed, setDisplayed] = useState('');
  const [idx, setIdx] = useState(0);

  // Pisahkan kata yang ingin di-accent
  const parts = text.split('Digital Solutions');

  useEffect(() => {
    if (idx < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed(text.slice(0, idx + 1));
        setIdx(idx + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [idx, text]);

  // Render dengan accent pada 'Digital Solutions'
  let render;
  if (displayed.includes('Digital Solutions')) {
    const [before, after] = displayed.split('Digital Solutions');
    render = <><span>{before}</span><span className={accentClass}>Digital Solutions</span><span>{after}</span></>;
  } else {
    render = <span>{displayed}</span>;
  }

  return (
    <h1 className={className}>
      {render}
      <span className="inline-block w-2 h-7 bg-black align-middle animate-pulse ml-1" />
    </h1>
  );
} 