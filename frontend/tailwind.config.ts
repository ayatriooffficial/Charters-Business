import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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

      keyframes: {
        skeletonFade: {
          '0%, 100%': { filter: 'grayscale(100%)', opacity: '0.4' },
          '50%': { filter: 'grayscale(0%)', opacity: '1' },
        },
      },

      animation: {
        skeletonFade: 'skeletonFade 2.5s ease-in-out infinite',
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
