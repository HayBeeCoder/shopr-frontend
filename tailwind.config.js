module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
  theme: {
    fontFamily: {
      "poppins": ['Poppins', 'sans-serif'],
      "staatliches": ['Staatliches', 'cursive'],
      "redhat": ['"Red Hat Display"', 'sans-serif']
    },
    
    extend: {
      colors: {
        "primary-50": "#ECEBEC",
        "primary-100": "#C3C0C3",
        "primary-800":  "#221C23",
        "secondary-100": "#F6F1DE",
        "secondary-400": "#E7DCA9", 
        "secondary-500": "#E1D394", 
        "secondary-600": "#CDC087",
      }
    },
  },
  plugins: [],
}
