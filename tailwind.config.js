/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "blue-pale": "hsl(225, 100%, 94%)",
        "blue-bright": "hsl(245, 75%, 52%)",
        "blue-very-pale": "hsl(225, 100%, 98%)",
        "blue-desaturated": "hsl(224, 23%, 55%)",
        "blue-dark": "hsl(223, 47%, 23%)",
      },
      fontFamily: {
        "red-hat": ["'Red Hat Display'", "sans-serif"],
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};
