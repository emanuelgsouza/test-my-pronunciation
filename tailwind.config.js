module.exports = {
  theme: {
    colors: {
      light: "#E0F0EA",
      primary: "#3C2A4D",
      secondary: "#574F7D",
      black: "#1D1D1D",
    },
    fontFamily: {
      sans: ["Poppins", "Arial", "sans-serif"],
    },
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["src/**/*.vue"],
  },
};
