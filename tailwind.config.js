// tailwind.config.js
module.exports = {
  content: [
    "./**/*.{html,js}", // scan all HTML and JS files in your project
  ],
  safelist: [
    'p-4', // add any classes you use with @apply that might not be found in your content
    // add others if needed (e.g., 'p-8', 'm-4', etc.)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}