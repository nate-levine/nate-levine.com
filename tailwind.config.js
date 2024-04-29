/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#fbf1c7',
      'black': '#000000',
      'red': '#fb4934',
      'green': '#b8bb26',
      'yellow': '#fabd2f',
      'blue': '#83a598',
      'purple': '#d3869b',
    },
    fontFamily: {
      'sans': ['Geist Sans'],
      'serif': ['EB Garamond'],
    },
  },
  plugins: [],
}
