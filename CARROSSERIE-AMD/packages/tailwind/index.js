/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", ...fontFamily.sans],
      },
      colors: {
        "governor-bay": {
          50: "#edf3ff",
          100: "#dfe7ff",
          200: "#c5d3ff",
          300: "#a1b6ff",
          400: "#7c8efd",
          500: "#5d67f7",
          600: "#423fec",
          700: "#3b36d1",
          800: "#2e2ba8",
          900: "#2b2c84",
        },
        "blue-ribbon": {
          50: "#eef8ff",
          100: "#daeeff",
          200: "#bde2ff",
          300: "#8fd1ff",
          400: "#5ab5ff",
          500: "#3495fd",
          600: "#1370f2",
          700: "#1660df",
          800: "#184db5",
          900: "#1a448e",
        },
        "guardsman-red": {
          50: "#fff0f0",
          100: "#ffdddd",
          200: "#ffc1c1",
          300: "#ff9595",
          400: "#ff5959",
          500: "#ff2626",
          600: "#fc0606",
          700: "#d60000",
          800: "#af0505",
          900: "#900c0c",
          950: "#500000",
        },
        "mine-shaft": {
          50: "#f7f7f7",
          100: "#e3e3e3",
          200: "#c8c8c8",
          300: "#a4a4a4",
          400: "#818181",
          500: "#666666",
          600: "#515151",
          700: "#434343",
          800: "#353535",
          900: "#313131",
          950: "#1a1a1a",
        },
        "deep-koamaru": {
          50: "#f3f6ff",
          100: "#e9eefe",
          200: "#d6dffe",
          300: "#b5c3fd",
          400: "#8c9df9",
          500: "#5d6df5",
          600: "#3b42ec",
          700: "#292cd8",
          800: "#2225b5",
          900: "#1e2094",
          950: "#12176e",
        },
      },
      keyframes: {
        "fade-in-bg": {
          "0%": { opacity: "0.3" },
          "100%": { opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        }
      },
      animation: {
        "fade-in-bg": "fade-in-bg 0.2s ease-out 0.2s 1 normal both",
        "fade-in": "fade-in 0.3s ease-in-out 0s 1 normal both",
        "fade-out": "fade-out 0.3s ease-in-out 0s 1 normal both",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
  ],
}
