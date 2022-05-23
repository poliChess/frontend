module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'decoration-bg': '#D6DEE2',
        'main-color': '#3499DB',
        'secondary-color': '#164362',
        'accent-color': '#702D57',
        'board-white': '#fafafa',
        'board-black': '#C6CED2',
        'board-white-highlight': '#467d9f',
        'board-black-highlight': '#2b668c'
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
    require('tailwind-scrollbar-hide')
  ],
}
