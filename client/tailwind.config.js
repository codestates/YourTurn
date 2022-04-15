module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "/public/index.html"],
  darkMode: "media",
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  variants: {
    extend: {
      fontFamily: {
        ibm: "'IBM Plex Sans KR', sans-serif",
        sun: "'Sunflower', sans-serif",
        dod: "'Gowun Dodum', sans-serif",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
