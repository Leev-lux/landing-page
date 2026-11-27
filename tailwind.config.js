/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E8',
        'warm-white': '#FAF9F6',
        charcoal: '#22332A', // verde muy oscuro de la marca para textos y fondos oscuros
        forest: '#304532', // verde del logo
        gold: '#C6A77B',
        'gold-dark': '#A88A5E',
        beige: '#E8DCCF',
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'Didot', 'Georgia', 'serif'],
        body: ['Jost', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      // Jost se ve más pequeña que Inter al mismo tamaño: se compensan los textos.
      fontSize: {
        sm: ['0.9375rem', { lineHeight: '1.45rem' }], // 15px
        base: ['1.0625rem', { lineHeight: '1.7rem' }], // 17px
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out both',
        'fade-up': 'fadeUp 0.7s ease-out both',
        'slide-down': 'slideDown 0.3s ease-out both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
