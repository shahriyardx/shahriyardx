module.exports = {
  content: [
    "./pages/**/*.js",
    "./components/**/*.{js,jsx}",
    "./Sections/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        dashboard: '300px auto'
      },
      screens: {
        'msm': '400px',
      },
      colors: {
        primary: "#2D2E32",
        secondary: "#25262A",
        accent: "#6DF6A3"
      },
      fontFamily: {
        "sourcecode": ['Source Code Pro', 'monospace'],
        "montserrat": ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
