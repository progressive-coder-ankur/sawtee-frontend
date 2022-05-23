// https://tailwindcss.com/docs/installation#create-your-configuration-file

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: {
    content: [
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx}'
    ]
  },
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#006181',
        secondary: '#463737',
        pagebackground: '#828990'
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        megamenu: '200px minmax(600px, 1fr) 1fr',
        publicationPage: 'minmax(900px, 500px) 1fr',
        homeMedia: '400px 1fr'
      },
      container: {
        center: true,
        margin: 'auto',
        padding: '2rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px'
        }
      },
      maxWidth: {
        60: '60%'
      }
    }
  },
  variants: {},
  plugins: [],
  future: {}
}
