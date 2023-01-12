/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      yellow: {
        'yellow-1077': "#f2e0c2"
      },
    fontFamily: {
    sans : ["InriaSans"],
    }
    

  },
    extend: {},
  },
  plugins: [],
}
