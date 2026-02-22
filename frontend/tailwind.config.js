/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#3b82f6',
        'deep-slate': '#1e293b',
        'light-slate': '#f8fafc',
        'mid-slate': '#e2e8f0',
        'near-black': '#0f172a',
        'slate-gray': '#475569',
        'light-gray': '#94a3b8',
      },
      fontFamily: {
        'space': ['"Space Grotesk"', 'sans-serif'],
        'geist': ['Geist', 'Inter', 'sans-serif'],
      },
      animation: {
        'shimmer': 'shimmer 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}