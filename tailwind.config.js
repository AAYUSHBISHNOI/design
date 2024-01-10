
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'card':' 0px 0px 55.4px 0px rgba(0, 0, 0, 0.08)',
      },
      colors:{
        red:"pink"
      }
    },
  },
  plugins: [],
}

