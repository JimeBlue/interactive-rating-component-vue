/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        overpass: ["'Overpass', 'sans-serif'"],
      },
      colors: {
        "light-gray": "#959EAC",
      },
      screens: {
        chico: "427px",
        medio: "558px",
      },
    },
  },
  plugins: [],
};
