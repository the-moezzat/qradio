/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // ...defaultTheme.screens,
      'lg': {'max': '1080px'},
      'md': {'max': '750px'},
    },
    fontFamily: {
      sans: ["sen", "sans-serif"],
    },
    extend: {
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "slideUp" : {
          "0%" : {"bottom": "-100vh"},
          "100%": {"bottom": '0'},
        }
      },
      animation: {
        shimmer: "shimmer 1.5s infinite",
        slideUp: "slideUp 0.2s ease-out"
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        left: "min-content 1fr min-content",
      },
    },
  },
  plugins: [],
};
