module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fit, minmax(75px, 250px))',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate( 0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'waving': 'wave 2s linear infinite',
      },
    },
  },
  plugins: [],
}