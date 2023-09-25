/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transform: ["group-hover"],
      scale: ["group-hover"],
      container: {
        center: true,
        padding: "40px",
      },
      fontFamily: {
        sans: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "Roboto"],
      },
      colors: {
        blue: {
          200: "#45A6FF",
          300: "#0C8DE4",
          400: "#293163",
          500: "#7B61FF",
        },
        orange: {
          100: "#FCEBE4",
          200: "#FFEDE5",
          400: "#E75821",
        },
        red: {
          300: "#E75821",
          400: "#FF4343",
        },
        green: "#27AE60",
        gray: {
          100: "#F7F7F7",
          200: "#E0E0E0",
          300: "#F2F2F2",
          400: "#ADADAD",
        },
        black: "#3F3F3F",
        yellow: "#F2AE54",
      },
    },
  },
  plugins: [],
};
