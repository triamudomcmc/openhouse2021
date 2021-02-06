module.exports = {
  plugins: [
    'tailwindcss',
    'postcss-nested',
    'postcss-focus-visible',
    'postcss-flexbugs-fixes',
    'autoprefixer',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009'
        },
        stage: 3,
        features: {
          'custom-properties': false
        }
      }
    ]
  ]
}
