/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      custom: '1060px',
      sm: '640px',
      md: '768px',
      lg: '1064px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        border: 'var(--border)',
        muted: 'var(--muted)',
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
        },
        'surface-dark': 'var(--surface-dark)',
        'on-dark': 'var(--on-dark)',
        'muted-on-dark': 'var(--muted-on-dark)',
        'link-on-dark': 'var(--link-on-dark)',
        'nav-muted': 'var(--nav-muted)',
        hero: 'var(--hero-bg)',
        'hero-text': 'var(--hero-text)',
        elevated: 'var(--elevated)',
        'input-surface': 'var(--input-surface)',
        'input-border': 'var(--input-border)',
      },
      fontFamily: {
        /* Jazmin zuerst (lokal); danach geladenes Cormorant — früher war „Cormorant Garamond“ unquoted → ungültiges CSS, Überschriften blieben bei Body-Arial */
        jazmin: ['"Jazmin Thin"', 'var(--font-cormorant)', 'Georgia', 'serif'],
        'ibm-plex-mono': ['var(--font-ibm-plex-mono)', 'IBM Plex Mono', 'sans-serif'],
        arial: ['Arial', 'sans-serif'],
        'arial-extended': ['Arial', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
