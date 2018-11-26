const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'),
    require('autoprefixer'),
    purgecss({
      content: [
        './public/index.html',
        './src/**/*.vue',
        './src/**/*.js',
        './src/*.vue',
        './src/*.js'
      ]
    })
  ]
}
