/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gc-primary': '#232931',
        'gc-secondary': '#393E46',
        'gc-titles': '#4ECCA3',
        'gc-text': '#EEEEEE',
      },
      keyframes: {
        appear: {
          '0%': { transform: 'scale(0)' },
          '60%': { transform: 'scale(1)' },
          '70%': { transform: 'scale(0.8)' },
          '80%': { transform: 'scale(1)' },
          '90%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(1.1)',
          },
          '20%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        slideUp: {
          '0%': {
            transform: 'translate(0, 50px)',
          },
          '100%': {
            transform: 'translate(0, 0)',
          },
        },
      },
      animation: {
        appear: 'appear 1s linear',
        fadeIn: 'fadeIn 1s ease-out forwards',
        slideUp: 'slideUp 1s ease-out',
      },
      gridTemplateColumns: {
        auto: 'repeat(auto-fit,minmax(50px, 1fr))',
      },
    },
  },
  plugins: [],
}
