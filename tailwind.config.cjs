/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: {
          123: "#F6F5F4",
          bgGreen: "639B6D",
          bgRed: "CB5B43",
        },
      },
    },
    fontFamily: {
      Dela: ["Dela Gothic One"],
      Montserrat: ["Montserrat"],
    },
  },
  plugins: [require("daisyui")],
};
