const tailwindcss = require('tailwindcss')
// const purgecss = require('@fullhuman/postcss-purgecss')
// const cssnano = require('cssnano')
const postcssImport = require('postcss-import')

module.exports = {
  plugins: [
    postcssImport,
    tailwindcss('./tailwind.js'),
    // cssnano({
    //   preset: 'default'
    // }),
    // purgecss({
    //   content: [
    //     './src/**/*.vue',
    //     './src/**/**/*.vue',
    //     './src/**/*.js'
    //   ],
    //   extractors: [
    //     {
    //       extractor: class TailwindExtractor {
    //         static extract (content) {
    //           return content.match(/[A-Za-z0-9-_:]+/g) || []
    //         }
    //       },
    //       extensions: ['vue', 'js', 'html']
    //     }
    //   ],
    //   keyframes: true,
    //   fontFace: true,
    //   whitelistPatterns: [/ct-*/, /flatpickr-*/]
    // }),
    require('autoprefixer')
  ]
}
