/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'], // Override default sans-serif
        space_grotesk: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        // Primary Colors
        primary: {
          100: '#F0EEFF', // Lightest
          200: '#E2DDFF',
          300: '#8B6EFF',
          400: '#6B4DE6', // Main Brand Color
          500: '#5438B8', // Darker shade
          600: '#472F9D',
          700: '#3A2682',
        },

        // Accent Colors
        accent: {
          100: '#E6F9FF',
          200: '#00B2B2', // Teal accent
          300: '#008F8F',
        },

        // Neutral Colors
        neutral: {
          100: '#FFFFFF',
          200: '#F8F9FD',
          300: '#EBEDF3',
          400: '#64748B',
          500: '#1E293B',
        },

        // Semantic Colors
        success: {
          light: '#ECFDF5',
          DEFAULT: '#059669',
          dark: '#047857',
        },
        warning: {
          light: '#FFFBEB',
          DEFAULT: '#D97706',
          dark: '#B45309',
        },
        error: {
          light: '#FEF2F2',
          DEFAULT: '#DC2626',
          dark: '#B91C1C',
        },
        info: {
          light: '#EFF6FF',
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
        },
      },
    },
  },
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
  },
  plugins: [require('daisyui')],
};
