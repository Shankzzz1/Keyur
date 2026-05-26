/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        condensed: ['"Roboto Condensed"', "sans-serif"],
        body: ['"Roboto"', "sans-serif"],
      },
      colors: {
        lime: "#C8E63C",
        orange: "#FF4D1C",
        dark: "#111111",
      },
    },
  },
  plugins: [],
};
