/** @type {import('tailwindcss').Config} */

const tokens = require('@igloo-ui/tokens/dist/tokens.json');

module.exports = {
   content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "electricBlue50": tokens.electricBlue50,
        "electricBlue500": tokens.electricBlue500,
      },
    },
  },
  plugins: [],
}
