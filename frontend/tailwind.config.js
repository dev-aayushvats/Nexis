/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'], // Override default sans-serif
        space_grotesk: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
