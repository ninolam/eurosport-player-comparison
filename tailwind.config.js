/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '70px': '70px',
        '75': '75%',
        '90': '90%'
      }
    }
  },
  plugins: [],
}
