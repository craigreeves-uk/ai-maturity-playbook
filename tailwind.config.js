/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#FAFAF8',
        ink: '#0F172A',
        accent: '#065F46',
        accentHover: '#064E3B',
      },
    },
  },
  plugins: [],
};
