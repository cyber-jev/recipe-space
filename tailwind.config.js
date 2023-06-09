/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#f2f2f2",
        body2: "#333333",
        blur: "hsla(0, 0%, 8%, 0.493)",
        accent: "#85b346",
      },
      fontFamily: {
        custom: ["Tilt Prism", "cursive"],
        custom2: ["Droid Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
