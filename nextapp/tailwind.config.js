const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      //sans: ['M PLUS 1p', ...defaultTheme.fontFamily.sans],
      sans: ["IBM Plex Mono", ...defaultTheme.fontFamily.sans],
    },},
  },
  plugins: [],
};
