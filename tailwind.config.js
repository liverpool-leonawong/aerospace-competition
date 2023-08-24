/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'black': '#000000',
      'charcoal': '#111111',
      'white': '#ffffff',
      'gray': '#666666',
      'gray-light': '#d3dce6',
    },
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(0)' },
          '30%': { transform: 'translateY(20px)' },
        }
      },
      animation: {
        scroll: 'scroll 1.5s ease infinite',
      }
    }
  },
  plugins: [
    require('postcss-import'),
    require('@tailwindcss/nesting')(require('postcss-nesting')),
    require('autoprefixer'),
    require('tailwindcss'),
  ],
}

