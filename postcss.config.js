module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nesting': {}, // Adjusted order: CSS nesting plugin before Tailwind
    'tailwindcss': {},
    'autoprefixer': {},
    'postcss-preset-env': {
      features: { 'nesting-rules': false },
    },
  }
};