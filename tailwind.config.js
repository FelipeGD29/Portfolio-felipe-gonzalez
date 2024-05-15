/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // puntos de interruccion tamaño de pantalla
      "sm": { max: "640px" },                   // móvil
      "md": { min: "641px", max: "768px" },     // tablet
      "lmd": { min: "769px", max: "834px" },
      "lg": { min: "835px", max: "1024px" },    // laptop
      "xl": { min: "1025px", max: "1280px" },   // desktop
      "2xl": { min: "1281px" },                 // desktop
    },
    colors: {
      "yellow": "#e8e80e",
      "red": "#B30000",
      "black": "black",
      "purple": "#a855f7",
      "blue": "#07078c"
      
    },
    extend: {
      fontFamily: {
        Comfortaa: ["Comfortaa", "sans-serif"],
      },
    },
  },
  plugins: [],
};
