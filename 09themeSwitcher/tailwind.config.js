/** @type { impoert('tailwindcss').Config} */
// tailwind.config.js
export default = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Add this if you're using React/Vite
  ],
  darkMode:"class",
  theme: {
    extend: {},
  },
  plugins: [],
}
