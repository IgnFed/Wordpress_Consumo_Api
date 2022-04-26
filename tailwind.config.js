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
      colors:{
        facebook: '#3b5998',
        twitter: '#1da1f2',
        instagram: '#e1306c',
        youtube: '#ff0000',
        linkedin: '#0077b5',
        pinterest: '#bd081c',
        github: '#333',
        behance: '#1769ff',
        dribbble: '#ea4c89',
        url: "rgb(39, 39, 43)",
      },
    },
  },
  plugins: [],
}