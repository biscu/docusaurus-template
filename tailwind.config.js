/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./docs/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./blog/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./app/**/*.{js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: ['class', '[data-theme="dark"]'], // for Docusaurus dark mode support
  corePlugins: {
    preflight: false, // disable Tailwind's reset
  },
  blocklist: ['container'], // prevent Tailwind from processing these classes
};