/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primaryBlack: "#16191D",
        primaryPurpure: "#cc0088",
        primaryWhite: "#F8F9FA",
        hoverGray: "#343a40",
        hoverGray2: "#212529",
        hoverGray3: "#e9e9e9",
        hoverGray4: "#f5f5f5",
        secondaryGray: "#495057",
        trGray: "#DEE2E6",
        dustyRose: "#EBC8C4",
        paleGreen: "#DEF2D5",
        cream: "#F8F3D6",
        skyBlue: "#CCE8F4",
        mintGreen: "#C6DEB9",
        paleYellow: "#EBE3A9",
        paleRose: "#E4B1AB",
        lightBlue: "#A6D6EE",
      },
      fill: {
        primaryPurpure: "#cc0088",
        primaryGray: "#868E96",
      },
      colors: {
        primaryPurpure: "#cc0088",
        primaryGray: "#868E96",
        secondaryGray: "#dee2e6",
        trGray: "#495057",
        maroon: "#A52B32",
        oliveGreen: "#607558",
        bronze: "#8D6D34",
        steelBlue: "#4C7EA0",
      },
      borderColor: {
        primaryPurpure: "#cc0088",
        maroon: "#A52B32",
        oliveGreen: "#607558",
        bronze: "#8D6D34",
        steelBlue: "#4C7EA0",
      },
      screens: {
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
