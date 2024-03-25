/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: { max: "640px" },
        // md: { min: "768px" },
        // lg: { min: "1024px" },
        // xl: { min: "1280px" },
      },
    },
  },
  plugins: [],
};
