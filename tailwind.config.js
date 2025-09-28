/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'web3-purple': '#6366f1',
        'web3-cyan': '#06b6d4',
        'web3-pink': '#ec4899',
        'neon-green': '#00ff88',
        'dark-bg': '#0a0a0f',
        'dark-card': '#1a1a2e',
      },
      fontFamily: {
        'futuristic': ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px #6366f1' },
          '100%': { boxShadow: '0 0 30px #ec4899' },
        }
      },
      backgroundImage: {
        'gradient-web3': 'linear-gradient(135deg, #6366f1 0%, #ec4899 50%, #06b6d4 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)',
      }
    },
  },
  plugins: [],
}
