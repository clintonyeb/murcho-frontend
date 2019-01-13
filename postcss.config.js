const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')
const postcssImport = require('postcss-import')

module.exports = {
  plugins: [
    postcssImport,
    tailwindcss('./tailwind.js'),
    cssnano({
      preset: 'default'
    }),
    // purgecss({
    //   content: [
    //     './src/**/*.vue',
    //     './src/**/*.js',
    //     './public/*.html'
    //   ],
    //   extractors: [
    //     {
    //       extractor: class TailwindExtractor {
    //         static extract (content) {
    //           return content.match(/[A-z0-9-:/]+/g) || []
    //         }
    //       },
    //       extensions: ['vue', 'js', 'html']
    //     }
    //   ],
    //   whitelistPatterns: [/ct-*/, /flatpickr-*/]
    // }),
    require('autoprefixer')
  ]
}
