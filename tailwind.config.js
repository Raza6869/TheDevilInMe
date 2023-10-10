/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkgray: "#0B0E0F",
        lightgray: "#D9D9D9",
        redbase: "#C90000",
        darkred: "#7B0909",
        footer: "#414141",
      },
      fontFamily: {
        gothic: ["var(--font-gothic)"],
        andadaPro: ["var(--font-andada-pro)"],
      },
    },
  },
  plugins: [],
};
