/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1400px',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        livvic: ["Livvic", "sans-serif"],
      },
    },
  },
  plugins: [],
}
