/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          yellow: '#FFD600',
          purple: '#A259FF',
          pink: '#FF6F91',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 