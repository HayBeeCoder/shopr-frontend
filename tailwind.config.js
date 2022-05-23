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
        "primary-800":  "#221C23",
        "secondary-600": "#CDC087",
        "secondary-500": "#E1D394", 
      }
    },
  },
  plugins: [],
}
