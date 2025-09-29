export const colors = {
  // Brand colors
  brand: {
    primary: '#3167EB',
    secondary: '#64748b',
    accent: '#8b5cf6',
  },

  // Semantic colors
  semantic: {
    success: '#00B517',
    warning: '#FF9017',
    error: '#FA3434',
    info: '#3167EB',
  },

  // White shades
  white: {
    100: '#FFFFFF',
    200: 'rgba(255, 255, 255, 0.8)', // #FFFFFF - 80%
    300: 'rgba(255, 255, 255, 0.6)', // #FFFFFF - 60%
    400: 'rgba(255, 255, 255, 0.3)', // #FFFFFF - 30%
    500: 'rgba(255, 255, 255, 0.15)', // #FFFFFF - 15%
  },

  // Green shades
  green: {
    100: '#00B517',
    200: '#33C445',
    300: '#66D374',
    400: '#B2E8B9',
    500: '#E5F7E7',
  },

  // Blue shades
  blue: {
    100: '#3167EB',
    200: '#5A85EF',
    300: '#83A4F3',
    400: '#C1D1F9',
    500: '#EAEFFD',
  },

  // Red shades
  red: {
    100: '#FA3434',
    200: '#FB5D5D',
    300: '#FC8585',
    400: '#FDC2C2',
    500: '#FEEAEA',
  },

  // Orange shades
  orange: {
    100: '#FF9017',
    200: '#FFA645',
    300: '#FFBC74',
    400: '#FFDDB9',
    500: '#FFF3E7',
  },

  // Neutral colors
  neutral: {
    white: '#ffffff',
    black: '#000000',
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

  // Social colors
  social: {
    facebook: '#1877f2',
    google: '#4285f4',
    twitter: '#1da1f2',
    linkedin: '#0a66c2',
    github: '#333333',
  },
} as const;

export type Colors = typeof colors;
