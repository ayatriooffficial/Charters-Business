import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  safelist: [
    'hl-wrap',
    'hl-bg',
    'hl-text',
    'hl-active',
    'hl-wrap-hl-active', // for .hl-wrap.hl-active
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      screens: {
        'custom-xl': '1100px',
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config