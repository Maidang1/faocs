const {
  iconsPlugin,
  getIconCollections,
} = require('@egoist/tailwindcss-icons');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    iconsPlugin({
      collections: getIconCollections(['simple-icons']),
    }),
  ],
};
