module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "#ffffff",
        white: "#fafafa",
        beige: "#d87d4a",
        "light-beige": "#fbaf85",
        black: "#101010",
        dark: "#000000",
        "light-gray": "#f1f1f1",
        red: "#cd2c2c",
        gray: "#4c4c4c",
        "low-gray": "#cfcfcf",
      },
    },
    maxWidth: {
      size: "69.375rem",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
