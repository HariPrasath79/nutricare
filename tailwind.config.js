/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        title: ['Josefin Sans', 'Serif'],
        slogan: ['Inter', 'Serif'],
        quicksand: ['Quicksand', 'Serif']
      },
      backgroundImage:{
        'cover-img': "url('./assets/HelthImg.png')"
      }
    },
  },
  plugins: [],
}

