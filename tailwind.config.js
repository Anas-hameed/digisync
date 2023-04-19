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
        brandon_grotesque_italic:["Brandon Grotesque Italic","sans-serif"],
        ancient:["Ancient_medium", "sans-serif"],
        andreas:["Andreas", "sans-serif"],
        black_willow:["Black-willow", "sans-serif"],
        phenomena_regular:["phenomena_regular"],
        reef:["Reef"],
        originals:["originals"],
        roboto: ['Roboto', 'sans-serif'],
        abang:["Abang"],
        fast_sc_regular:["Fast-Sc-regular"],
        primediva:["Primediva"],
        qasbyne:["Qasbyne"],
        salute_riches:["Salute-riches"],
        tilson:["Tilson"],
        two_weekends:["Two-weekends"],
        Water_splash_1:["Water-splash-1"],
        display: ["group-hover"],
      },

    },
  },
  plugins: [require('flowbite/plugin'),require("daisyui")],
}
