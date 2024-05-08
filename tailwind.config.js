const colors= require('tailwindcss/colors');
const defaultTheme= require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.{html,js}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        gray:colors.coolGray,
        blue:{
          light:'#f5f5f5',
          dark:'#000000',
          DEFAULT: '#a0a0a0'
        }
       },
      screens:{
        sm:"540px",
        lg:"1260px",
        '4k':"2000px",
      },
      fontFamily: {
        'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};