/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        border: 'var(--border)',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        'ibm-plex-mono': ['var(--font-ibm-plex-mono)'],
      },
    },
  },
  plugins: [],
};
