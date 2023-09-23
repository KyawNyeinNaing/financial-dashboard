import type { Config } from 'tailwindcss';
const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/page-containers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        default: {
          light: '#ffffff',
          dark: '#2c2351',
        },
        primary: {
          light: '#ebebf5',
          dark: '#392c6b',
        },
        secondary: {
          light: '#fafafe',
          dark: '#56459e',
        },
        blue: {
          100: '#c3c1ff',
          200: '#5a99de',
        },
        pink: {
          100: '#f26cbb',
        },
        dark: {
          100: '#c2becc',
        },
        label: {
          light: '#5a99de',
          dark: '#fafafe',
        },
        gradient: {
          left: '#5965b7',
          right: '#714caa',
        },
        gradientLight: {
          left: '#ebf0ff',
          right: '#eadefe',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
