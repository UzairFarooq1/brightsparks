/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pinky: "#b12480",
        skyish: "#14b3ed",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to bottom right, #14b3ed, #b12480)",
      },
    },
  },
  plugins: [],
};
