import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#fafaf8',
        ink: '#1a1a1a',
        sage: '#5a7a6e',
        'sage-deep': '#3d544c',
      },
      maxWidth: {
        prose: '720px',
      },
    },
  },
  plugins: [],
}

export default config
