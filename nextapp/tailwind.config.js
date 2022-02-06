const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        login: "url('/hero.jpg')",
      }),
      fontFamily: {
        sans: ["IBM Plex Mono", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
