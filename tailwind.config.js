/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        name: ["Space Grotesk"],
        infor: ["Bebas Neue"],
        source:["Source Code Pro"],
        babu:["Source Code Pro"],
      },
    },
  },
  plugins: [],
};
