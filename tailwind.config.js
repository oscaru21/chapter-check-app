/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: "#6D00C3",
        border: "#945EBF",
        secondary: "#DABFF0",
        white: "#F8F2FC",
        black: "#10001D",
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ["hover"],
    },
  },
  plugins: [],
};
