/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          123: "#F6F5F4",
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
