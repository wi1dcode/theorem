/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      noir: "#282828",
      anthracite: "#494949",
      sable: "#DDD9CE",
      nuage: "#F4F0E7",
      blanc: "#FFFFFF",
      marron: "#353D2B",
      beige: "#E2DED5",
      vert: "#053A36",
      vert_light: "#6F7460",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin"), require("tailwindcss-animated")],
};
