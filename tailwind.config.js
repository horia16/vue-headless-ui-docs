module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'black-900':"#161616"
      },
      fontFamily:{
        'poppins':['Poppins', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {
      ring: ['focus-visible'],
    }
  },
  plugins: [],
}
