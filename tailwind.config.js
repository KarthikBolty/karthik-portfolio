/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        noir: {
          bg: '#02060E',
          surface: '#070D1A',
          card: '#0B1322',
          border: '#1A2540',
          muted: '#5B6B8A',
          text: '#E8EDF7',
        },
        crimson: {
          DEFAULT: '#C50337',
          50: '#FFE9EF',
          100: '#FFD0DC',
          200: '#FF9BB4',
          300: '#FF5C82',
          400: '#E62355',
          500: '#C50337',
          600: '#9E022B',
          700: '#77011F',
          800: '#4F0114',
          900: '#2A0009',
        },
        accent: {
          gold: '#E8B86D',
          cyan: '#5EEAD4',
        },
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 24px rgba(197, 3, 55, 0.45)',
        'glow-lg': '0 0 60px rgba(197, 3, 55, 0.35)',
        'glow-sm': '0 0 12px rgba(197, 3, 55, 0.5)',
        neu: '8px 8px 24px rgba(0,0,0,0.6), -8px -8px 24px rgba(255,255,255,0.02)',
        'neu-in': 'inset 6px 6px 16px rgba(0,0,0,0.6), inset -6px -6px 16px rgba(255,255,255,0.02)',
        card: '0 8px 32px rgba(0,0,0,0.5)',
      },
      backgroundImage: {
        'crimson-gradient': 'linear-gradient(135deg, #C50337 0%, #E62355 50%, #77011F 100%)',
        'noir-gradient': 'linear-gradient(180deg, #02060E 0%, #070D1A 100%)',
        'grid-glow': 'radial-gradient(circle at 50% 0%, rgba(197,3,55,0.12), transparent 60%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 24px rgba(197,3,55,0.4)' },
          '50%': { boxShadow: '0 0 48px rgba(197,3,55,0.7)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'gradient-pan': 'gradient-pan 8s ease infinite',
      },
    },
  },
  plugins: [],
};
