/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        navy: {
          900: '#020617',
          950: '#030712',
        }
      },
      animation: {
        'reveal': 'reveal 0.8s cubic-bezier(0, 0, 0.2, 1) forwards',
        'shimmer': 'shimmer 8s linear infinite',
        'water-ray': 'water-ray 12s ease-in-out infinite',
      },
      keyframes: {
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        'water-ray': {
          '0%, 100%': { transform: 'rotate(-5deg) scale(1)', opacity: '0.3' },
          '50%': { transform: 'rotate(5deg) scale(1.1)', opacity: '0.6' },
        }
      },
    },
  },
  plugins: [],
}
