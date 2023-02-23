/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

module.exports = {
  theme: {
    extend: {
      colors: {
        grey: {
          123: "#F6F5F4",
        },
      },
    },
  },
};
