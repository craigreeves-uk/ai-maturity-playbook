/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#FAFAF8',
        ink: '#0F172A',
        accent: '#C2410C',
        accentHover: '#9A3412',
      },
    },
  },
  plugins: [],
};
