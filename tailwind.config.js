/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          500: '#4361ee',
          600: '#3451d1',
          700: '#2541b2',
          900: '#0f1f6e',
        },
        accent: {
          400: '#f72585',
          500: '#e5177b',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'DM Sans', 'sans-serif'],
        display: ['var(--font-sora)', 'Sora', 'sans-serif'],
      },
      animation: {
        'fade-up':   'fadeUp 0.6s ease forwards',
        'fade-in':   'fadeIn 0.5s ease forwards',
        'count-up':  'countUp 1.5s ease forwards',
        'slide-in':  'slideIn 0.5s ease forwards',
      },
      keyframes: {
        fadeUp:  { '0%': { opacity: 0, transform: 'translateY(24px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        fadeIn:  { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        slideIn: { '0%': { opacity: 0, transform: 'translateX(-20px)' }, '100%': { opacity: 1, transform: 'translateX(0)' } },
      },
    },
  },
  plugins: [],
}
