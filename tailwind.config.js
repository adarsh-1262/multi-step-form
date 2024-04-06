/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        20: '6rem',
      },
      margin: {
        20: '7rem',
      },
    },
  },
  plugins: [],
}

