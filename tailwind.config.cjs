/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      dela: ["Dela Gothic One"],
      Montserrat: ["Montserrat"],
    },
  },
  plugins: [require("daisyui")],
};
