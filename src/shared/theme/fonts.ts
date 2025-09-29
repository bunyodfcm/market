export const fonts = {
  families: {
    sans: {
      name: 'Inter',
      fallback: [
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'sans-serif',
      ],
      weights: [300, 400, 500, 600, 700],
    },
    serif: {
      name: 'Georgia',
      fallback: ['Times New Roman', 'Times', 'serif'],
      weights: [400, 700],
    },
    mono: {
      name: 'JetBrains Mono',
      fallback: ['Fira Code', 'Monaco', 'Consolas', 'monospace'],
      weights: [400, 500, 600],
    },
    display: {
      name: 'Poppins',
      fallback: ['Inter', 'system-ui', 'sans-serif'],
      weights: [400, 500, 600, 700, 800],
    },
  },

  sizes: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
    '6xl': '3.75rem', // 60px
  },

  lineHeights: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
  },

  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
  },
} as const;

export type Fonts = typeof fonts;

// Font CSS variables uchun helper
export const getFontFamily = (family: keyof typeof fonts.families) => {
  const font = fonts.families[family];
  return [font.name, ...font.fallback].join(', ');
};
