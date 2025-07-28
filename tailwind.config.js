/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        'capy': {
          50: '#fef7ed',
          100: '#fdecd4',
          200: '#fad4a8',
          300: '#f6b571',
          400: '#f08c38',
          500: '#ec6d16',
          600: '#dd550c',
          700: '#b73f0c',
          800: '#923311',
          900: '#762b12',
        },
        'lotus': {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        'pond': {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        }
      },
      fontFamily: {
        'display': ['Fredoka', 'Nunito', 'system-ui', 'sans-serif'],
        'body': ['Nunito', 'system-ui', 'sans-serif'],
        'cute': ['Comfortaa', 'system-ui', 'sans-serif'],
        'playful': ['Fredoka', 'system-ui', 'sans-serif'],
        'zh-display': ['AlibabaHealthFont2.0CN', 'system-ui', 'sans-serif'],
        'zh-body': ['AlibabaHealthFont2.0CN', 'system-ui', 'sans-serif'],
        'zh-cute': ['AlibabaHealthFont2.0CN', 'system-ui', 'sans-serif'],
        'ja-display': ['AlibabaHealthFont2.0CN', 'system-ui', 'sans-serif'],
        'ja-body': ['AlibabaHealthFont2.0CN', 'system-ui', 'sans-serif'],
        'ja-cute': ['AlibabaHealthFont2.0CN', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
} 