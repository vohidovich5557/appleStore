/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0171E4",
        secondary: "#51D115",
        banner: "#1E3240",
        card: "#706E6E",
        service: "#F9F9F9",
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          lg: "1240px",
        }
      },
      screens: {
        md: "768px",
        lg: "992px",
      }
    },
  },
  plugins: [],
}