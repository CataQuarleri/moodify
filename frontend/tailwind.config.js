/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          100: '#f689ab',
        },
        violet: {
          100: '#a08cc4',
        },
        indigo: {
          100: '#0e3e68',
        },
        turquoise: {
          100: '#55cdad',
        },
        yellow: {
          100: '#fec457',
        },
      },
    },
    plugins: [],
  },
};
