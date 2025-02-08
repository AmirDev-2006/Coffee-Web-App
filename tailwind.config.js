/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "brown" : {
          100:"#ECE0D1",
          300:"#DBC1AC",
          600:"#967259",
          900:"#634832"
        },
        "black" : {
          100:"rgba(0,0,0,0.6)"
        },
        "gold" : {
          100: "#FED7AA"
        },
        "grey" :{
          100 : "#F5F5F5"
        }
      },
      boxShadow:{
        "normal" : "0px 1px 10px rgba(0,0,0,0.05)"
      },
      borderRadius:{
        "4xl" : "2rem"
      },
      fontFamily:{
        "Yekan":"Yekan",
        "Yekan":"Yekan",
        "Dana":"Dana",
        "DanaDemiBold":"Dana DemiBold",
      },
      letterSpacing :{
        "tightest" : '-0.065em'
      }
    },
  },
  plugins: [
  ],
}

