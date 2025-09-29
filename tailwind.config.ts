import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary (Blue) palette
        primary: {
          100: '#3167EB',
          200: '#5A85EF',
          300: '#83A4F3',
          400: '#C1D1F9',
          500: '#EAEFFD',
        },

        // Success (Green) palette
        success: {
          100: '#00B517',
          200: '#33C445',
          300: '#66D374',
          400: '#B2E8B9',
          500: '#E5F7E7',
        },

        // Warning (Orange) palette
        warning: {
          100: '#FF9017',
          200: '#FFA645',
          300: '#FFBC74',
          400: '#FFDDB9',
          500: '#FFF3E7',
        },

        // Error (Red) palette
        error: {
          100: '#FA3434',
          200: '#FB5D5D',
          300: '#FC8585',
          400: '#FDC2C2',
          500: '#FEEAEA',
        },

        // White shades
        white: {
          100: '#FFFFFF',
          200: 'rgba(255, 255, 255, 0.8)',
          300: 'rgba(255, 255, 255, 0.6)',
          400: 'rgba(255, 255, 255, 0.3)',
          500: 'rgba(255, 255, 255, 0.15)',
        },

        // CSS Variables
        'primary-main': 'var(--color-primary)',
        'success-main': 'var(--color-success)',
        'warning-main': 'var(--color-warning)',
        'error-main': 'var(--color-error)',
      },
    },
  },
  plugins: [],
};

export default config;
