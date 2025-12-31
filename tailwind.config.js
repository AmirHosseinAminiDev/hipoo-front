/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ef4444',
        dark: '#0b1220',
        gray: '#94a3b8',
      },
      fontFamily: {
        sans: ['"Vazirmatn"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 20px 60px rgba(0,0,0,0.35)',
      },
      backgroundImage: {
        'grid-dark': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};
