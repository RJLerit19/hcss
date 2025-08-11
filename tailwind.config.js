/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "0px", // Custom extra small breakpoint
        sm: "576px", // Custom small breakpoint
        md: "768px", // Custom medium breakpoint
        lg: "992px", // Custom medium breakpoint
        xl: "1200px", // Custom medium breakpoint
        xxl: "1921px", // Custom large breakpoint
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        bold: ["Oswald", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        primary: "#17a3d6",
      },
    },
  },
  plugins: [],
};
