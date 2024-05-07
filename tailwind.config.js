const colors= require('tailwindcss/colors');
const defaultTheme= require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.{html,js}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    colors:{
      gray:colors.coolGray,
      blue:colors.lightBlue
     },
    screens:{
      sm:"540px",
      md:"768px",
      lg:"1260px",
      '4k':"2000px",
    },
    extend: {
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