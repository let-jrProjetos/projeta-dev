/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          123: "#F6F5F4",
          header: "#585858",
          text: "#757575",
        },
        blue: {
          green: "#2B788B",
        },
        green: {
          greenAdd: "#639B6D",
        },
        red: {
          redAdd: "#CB5B43",
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
