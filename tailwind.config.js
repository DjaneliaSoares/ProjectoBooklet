/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{

        brightBackground: "#FDFBEE",
        brghtGreen: "#539165",
        lightText: "#959595",
      },
    },
  },
  plugins: [],
}

