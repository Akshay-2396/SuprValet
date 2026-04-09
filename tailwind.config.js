/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00C853',
          50: '#E8FFF1',
          100: '#C0FFD8',
          200: '#80FFB1',
          300: '#40FF8A',
          400: '#00E863',
          500: '#00C853',
          600: '#00A041',
          700: '#007830',
          800: '#005020',
          900: '#002810',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          100: '#1A1A1A',
          200: '#242424',
          300: '#2E2E2E',
          400: '#3A3A3A',
        },
        glass: 'rgba(255,255,255,0.05)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glow': 'radial-gradient(ellipse at center, rgba(0,200,83,0.15) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,200,83,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(0,200,83,0.8)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'glow': '0 0 30px rgba(0,200,83,0.3)',
        'glow-lg': '0 0 60px rgba(0,200,83,0.4)',
        'card': '0 8px 32px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
}
