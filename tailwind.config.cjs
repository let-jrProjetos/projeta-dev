/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: {
          123: "#F6F5F4",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
