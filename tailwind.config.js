/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        livvic: ["Livvic", "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1400px', 
      },
    },
  },
  plugins: [],
}
