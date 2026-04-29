/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0891B2',
        secondary: '#22D3EE',
        cta: '#059669',
        background: 'var(--color-background)',
        text: 'var(--color-text)',
        card: 'var(--color-card)',
      },
      fontFamily: {
        heading: ['Figtree', 'sans-serif'],
        body: ['Noto Sans', 'sans-serif'],
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0,0,0,0.05)',
        'md': '0 4px 6px rgba(0,0,0,0.1)',
        'lg': '0 10px 15px rgba(0,0,0,0.1)',
        'xl': '0 20px 25px rgba(0,0,0,0.15)',
      }
    },
  },
  plugins: [],
}
