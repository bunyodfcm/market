export const themeColors = {
  light: {
    // Background colors
    background: {
      primary: '#ffffff',
      secondary: '#f8fafc',
      tertiary: '#f1f5f9',
      card: '#ffffff',
      overlay: 'rgba(0, 0, 0, 0.5)',
    },

    // Text colors
    text: {
      primary: '#0f172a',
      secondary: '#475569',
      muted: '#94a3b8',
      inverse: '#ffffff',
    },

    // Border colors
    border: {
      default: '#e2e8f0',
      focus: '#3b82f6',
      error: '#ef4444',
    },

    // Interactive colors
    interactive: {
      primary: '#3167EB',
      primaryHover: '#5A85EF',
      secondary: '#64748b',
      secondaryHover: '#475569',
    },
  },

  dark: {
    // Background colors
    background: {
      primary: '#0f172a',
      secondary: '#1e293b',
      tertiary: '#334155',
      card: '#1e293b',
      overlay: 'rgba(0, 0, 0, 0.7)',
    },

    // Text colors
    text: {
      primary: '#f8fafc',
      secondary: '#cbd5e1',
      muted: '#64748b',
      inverse: '#0f172a',
    },

    // Border colors
    border: {
      default: '#334155',
      focus: '#60a5fa',
      error: '#f87171',
    },

    // Interactive colors
    interactive: {
      primary: '#5A85EF',
      primaryHover: '#3167EB',
      secondary: '#cbd5e1',
      secondaryHover: '#f8fafc',
    },
  },
} as const;

export type ThemeColors = typeof themeColors;
