import type { Config } from 'tailwindcss';
import { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        custom: {
          'blue-1': '#00aed4',
          'blue-2': '#0084f1',
        },
      },
      fontFamily: {
        quickSand: ['var(--font-quicksand)'],
        protestStrike: ['var(--font-protestStrike)'],
      },
      minWidth: {
        36.5: '9.125rem',
        70: '17.5rem',
      },
      minHeight: {
        18: '4.5rem',
      },
      keyframes: {
        'switch-dark-move': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(32px)' },
        },
        'switch-light-move': {
          '0%': { transform: 'translateX(32px)' },
          '100%': { transform: 'translateX(0)' },
        },
        'fade-in-opacity': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'switch-dark': 'switch-dark-move 0.5s ease-in-out',
        'switch-light': 'switch-light-move 0.5s ease-in-out',
        'fade-in': 'fade-in-opacity 0.5s ease-in',
        'spin-slow': 'rotate 10s linear infinite',
        rotate: 'rotate 10s linear infinite',
        orbit: 'orbit var(--orbit-duration, 10s) linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: PluginAPI['addUtilities'] }) {
      const newUtilities = {
        '.animation-fill-forwards': {
          'animation-fill-mode': 'forwards',
        },
        '.animation-fill-backwards': {
          'animation-fill-mode': 'backwards',
        },
        '.animation-fill-both': {
          'animation-fill-mode': 'both',
        },
        '.animation-fill-none': {
          'animation-fill-mode': 'none',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
export default config;
