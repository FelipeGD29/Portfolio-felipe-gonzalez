/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    theme: {
      screens: {
        "sm": { min: "0px", max: "640px" },        // móvil
        "md": { min: "641px", max: "768px" },     // tablet
        "lg": { min: "769px", max: "1024px" },    // laptop
        "xl": { min: "1025px", max: "1280px" },   // desktop
        "2xl": { min: "1281px" },                 // desktop
      },
    },
    extend: {
      fontFamily: {
        Comfortaa: ["Comfortaa", "sans-serif"],
      },
    },
  },
  plugins: [],
};
