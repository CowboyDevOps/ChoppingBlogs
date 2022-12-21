/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // that is animation class
      animation: {
        fade: "fadeOut 4s ease-in-out",
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { backgroundColor: theme("colors.white"), opacity: 0.8 },
          "20%": { backgroundColor: theme("colors.white"), opacity: 1 },
          "100%": { backgroundColor: theme("colors.transparent"), opacity: 0 },
        },
      }),
    },
  },
  plugins: [],
};
