import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      transform: ["group-hover"],
      container: {
        center: true,
        padding: "40px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
        black: "#000000",
        yellow: "#F2AE54",
      },
    },
  },
  plugins: [],
}
export default config
