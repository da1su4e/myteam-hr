const plugin = require('tailwindcss/plugin');

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
  plugins: [
    plugin(function({ addComponents, theme }) {
      addComponents({
        '.container-alt': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4'),
          [`@media (min-width: ${theme('screens.sm')})`]: {
            maxWidth: '375px',
          },
          [`@media (min-width: ${theme('screens.md')})`]: {
            maxWidth: '573px',
          },
          [`@media (min-width: ${theme('screens.lg')})`]: {
            maxWidth: '1400px',
          },
        },
      });
    }),
  ],
}
