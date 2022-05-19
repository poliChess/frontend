module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'decoration-bg': '#D6DEE2',
        'main-color': '#3499DB',
        'secondary-color': '#164362',
        'accent-color': '#702D57'
      },
      spacing: {
        '70': '18rem',
        '132': '36rem'
      },
      screens: {
        'md': '1000px'
      }
    },
  },
  plugins: [
    // require('tailwind-animation-delay'),
    // require('tailwindcss-animate'),
    require('tailwind-scrollbar-hide')
  ],
}
