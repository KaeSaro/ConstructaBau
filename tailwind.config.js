/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      only: { max: '639px' },
      xs: '375px',
      custom: '1060px',
      sm: '640px',
      md: '768px',
      lg: '1150px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        border: 'var(--border)',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        'ibm-plex-mono': ['var(--font-ibm-plex-mono)', 'IBM Plex Mono', 'sans-serif'],
        arial: ['Arial', 'sans-serif'],
        'arial-extended': ['Arial', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
