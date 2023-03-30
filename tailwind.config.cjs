/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: {
          123: "#F6F5F4",
          header: "#585858"
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
