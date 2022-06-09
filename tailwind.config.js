module.exports = {
  content: [
    "./pages/**/*.js",
    "./components/**/*.{js,jsx}",
    "./Sections/**/*.{js,jsx}",
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
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
