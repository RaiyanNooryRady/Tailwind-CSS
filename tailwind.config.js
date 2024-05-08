/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  darkMode:'media', //false,r 'media' or 'class'
  content: ['index.html'],
  theme: {
    extend: {},
  },
  variantOrder: ["first", "last", "odd", "even", "visited", "checked", "group-hover", "group-focus", "focus-within", "focus", "hover", "focus-visible", "active", "disabled"],
  variants: {
    extend: {
      fontSize:['hover','focus'],
    },
  },
  plugins: [],
}

