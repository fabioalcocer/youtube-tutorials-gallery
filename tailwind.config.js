/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": { opacity: "0", transform: 'translateY(-100vh)'},
          "100%": { opacity: "1" },
          
        },
      },
      animation: {
        fade: "fade 300ms ease 1",
      },
      gridTemplateColumns: {
        videosContainer: "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
};