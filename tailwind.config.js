/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      pearl: '#FFFFFF',
      silver: '#EDEDED',
      stone: '#6B6B6B',
      steel: '#BFBFBF',
      iron: '#272727',
      cooper: '#EC7000',
      emerald: '#24A148',
      sapphire: '#003399',
      ruby: '#DA1E28',
      gold: '#F1A61B',
      inactive: '#888888',
      rust: '#B85700',
      ironwhite: '#475467',
      grey: '#4D4D4D',
      pearlgray: '#F5F5F5'
    },

    fontFamily: {
      main: ['Nunito', 'sans']
    },
    extend: {
      boxShadow: {
        top: '25px 0 20px 0 rgba(0, 0, 0, 0.2)'
      }
    }
  },
  plugins: []
}
