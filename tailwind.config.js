/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
        fontFamily: {
      'inria': ['Inria Sans', 'sans-serif']
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
        yellow: {
         5000: "#F2E0C2"
        },
        blue:{
          710: "#2C83D2"
        }
    },
    fontFamily: {
    sans : ["InriaSans"],
    },
    extend: {},
  },
  plugins: []
};