/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        alora:["Alora", "sans-serif"],
        ancient:["Ancient_medium", "sans-serif"],
        andreas:["Andreas", "sans-serif"],
        black_willow:["Black-willow", "sans-serif"],
        phenomena_regular:["phenomena_regular"],
        reef:["Reef"],
        originals:["originals"],
        roboto: ['Roboto', 'sans-serif'],
        display: ["group-hover"],
      },

    },
  },
  plugins: [require('flowbite/plugin'),
  require("daisyui")],
}
