module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "/public/index.html"],
  darkMode: false,
  theme: {
    extend: {},
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
