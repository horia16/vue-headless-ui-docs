const tailwindcss = require('tailwindcss'); 
const autoprefixer = require('autoprefixer');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/vue-headless-ui-docs/'
  : '/',
  css: {
    loaderOptions: {
        postcss: {
            plugins: [
                tailwindcss,
                autoprefixer,
            ],
        },
    },
},
outputDir: "docs"
}