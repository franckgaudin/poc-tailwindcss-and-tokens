/** @type {import('tailwindcss').Config} */

// const tokens = require('@igloo-ui/tokens/dist/tokens.json');
const tokens = require('./tokens.json');

module.exports = {
   content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...tokens.colors
    },
    screens: {
      ...tokens.screens
    },
    fontFamily: {
      ...tokens.fontFamily
    },
    fontSize: {
      ...tokens.fontSize
    },
    fontWeight: {
      ...tokens.fontWeight
    },
    lineHeight: {
      ...tokens.lineHeight
    },
    borderRadius: {
      ...tokens.borderRadius
    },
    spacing: {
      ...tokens.spacing
    },
    zIndex: {
      ...tokens.zIndex
    },
    dropShadow: {
      ...tokens.dropShadow
    },
    extend: {},
  },
  plugins: [],
}
