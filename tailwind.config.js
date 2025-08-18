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
          50: '#fff4ed',
          100: '#ffe2d1',
          200: '#ffcaa8',
          300: '#ffaa7d',
          400: '#ff8547',
          500: '#ff6b2b',
          600: '#f04e0f',
          700: '#c73d0f',
          800: '#9e3212',
          900: '#7f2b11',
        },
        'lotus': {
          50: '#fef5ff',
          100: '#fdeaff',
          200: '#fbd5ff',
          300: '#f9b3ff',
          400: '#f57fff',
          500: '#ec4aff',
          600: '#d528f7',
          700: '#b41ed3',
          800: '#941aab',
          900: '#79188b',
        },
        'pond': {
          50: '#f0fdff',
          100: '#d9f9ff',
          200: '#a3f2ff',
          300: '#6de9ff',
          400: '#3dd9fc',
          500: '#1fc2e5',
          600: '#0f9dc7',
          700: '#0d7ba0',
          800: '#115f7d',
          900: '#134d66',
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