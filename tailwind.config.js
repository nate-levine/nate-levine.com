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
    },
    fontFamily: {
      'sans': ['Geist Sans'],
      'serif': ['EB Garamond'],
    },
    keyframes: {
      jump: {
        '50%': { 
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
        },
        '0%, 100%': {
          transform: 'translateY(0)',
          animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
        },
      },
      rotate: {
        '0%': {
          transform: 'rotate(0deg)',
        },
        '100%': {
          transform: 'rotate(360deg)',
        },
      },
      flip: {
        '0%, 53%': {
          transform: 'rotate(0deg)',
          animationTimingFunction: 'steps(1, end)',
        },
        '3%, 50%': {
          transform: 'rotate(180deg)',
          animationTimingFunction: 'steps(1, end)',
        },
      },
      stretch: {
        '0%, 50%': {
          height: '49%',
        },
        '3%, 53%': {
          height: '100%',
        },
        '4%, 54%': {
          height: '25%',
        },
        '23%, 73%': {
          height: '49%',
        },
        '50%, 100%': {
          height: '25%',
        },
      },
    },
    animation: {
      'jump': 'jump 1s linear infinite',
      'rotate': 'rotate 5s linear infinite',
    },
  },
  plugins: [],
}
