export const designTokens = {
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

    // Gray palette
    gray: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
  },

  fonts: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    serif: ['Georgia', 'Times New Roman', 'serif'],
    mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
    display: ['Poppins', 'Inter', 'sans-serif'],
  },

  spacing: {
    xs: '0.5rem', // 8px
    sm: '1rem', // 16px
    md: '1.5rem', // 24px
    lg: '2rem', // 32px
    xl: '3rem', // 48px
    '2xl': '4rem', // 64px
    '3xl': '6rem', // 96px
  },

  borderRadius: {
    sm: '0.25rem', // 4px
    md: '0.5rem', // 8px
    lg: '0.75rem', // 12px
    xl: '1rem', // 16px
  },

  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
} as const;

export type DesignTokens = typeof designTokens;
