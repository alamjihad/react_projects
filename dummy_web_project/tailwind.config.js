/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "296": "18.5rem",
        "169.6": "10.6rem",
        "180": "11.25rem",
      }
    },
  },
  plugins: [],
}

