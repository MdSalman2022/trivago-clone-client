/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#FBFCFC",

          "secondary": "#436dc1", //white

          "accent": "#F9FAFA", //button

          "neutral": "#0A1120",

          "base-100": "#FFFFFF",

          "info": "#007CC2",

          "success": "#DDE8EF",

          "warning": "#EDD15E",

          "error": "#F66355",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}