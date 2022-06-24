/**@type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.js",
    "./components/**/*.{js,jsx}",
    "./sections/**/*.{js,jsx}",
  ],
  safelist: [
    "hover:text-orange-600",
    "hover:text-blue-500",
    "hover:text-yellow-400",
    "hover:text-sky-600",
    "hover:text-blue-800",
    "hover:text-sky-500",
    "hover:text-white",
    "hover:text-green-500",
    "hover:text-green-600",
    "hover:text-yellow-500",
    "hover:text-red-500",
    "hover:text-indigo-500",
    "hover:text-orange-500",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        dashboard: "300px auto",
      },
      screens: {
        msm: "400px",
      },
      colors: {
        primary: "#2D2E32",
        secondary: "#25262A",
        accent: "#6DF6A3",
      },
      fontFamily: {
        sourcecode: ["Source Code Pro", "monospace"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        shake: {
          "0%": { transform: "translate(1px, 1px) rotate(0deg)" },
          "10%": { transform: " translate(-1px, -2px) rotate(-1deg)" },
          "20%": { transform: "translate(-3px, 0px) rotate(1deg)" },
          "30%": { transform: "translate(3px, 2px) rotate(0deg)" },
          "40%": { transform: "translate(1px, -1px) rotate(1deg)" },
          "50%": { transform: "translate(-1px, 2px) rotate(-1deg)" },
          "60%": { transform: "translate(-3px, 1px) rotate(0deg)" },
          "70%": { transform: "translate(3px, 1px) rotate(-1deg)" },
          "80%": { transform: "translate(-1px, -1px) rotate(1deg)" },
          "90%": { transform: "translate(1px, 2px) rotate(0deg)" },
          "100%": { transform: "translate(1px, -2px) rotate(-1deg)" },
        },
      },
      animation: {
        shake: "shake 0.5s infinite",
      },
      backgroundImage: {
        light:
          "radial-gradient(circle, rgba(255,255,255,1) 30%, rgba(255,255,255,0) 70%)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
