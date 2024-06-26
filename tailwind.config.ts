/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontSize: {
        h1: ["28px", "36px"],
        h2: ["24px", "32px"],
        h3: ["20px", "28px"],
        h4: ["16px", "24px"],
        h5: ["14px", "20px"],
        h6: ["12px", "16px"],
      },
    },
    fontFamily: {
      regular: ["Ubuntu Regular", "sans"],
      bold: ["Ubuntu Bold", "sans"],
      italic: ["Ubuntu Italic", "sans"],
      bold_italic: ["Ubuntu Bold Italic", "sans"],
      light: ["Ubuntu Light", "sans"],
      light_italic: ["Ubuntu Light Italic", "sans"],
      medium: ["Ubuntu Medium", "sans"],
      medium_italic: ["Ubuntu Medium Italic", "sans"],
    },
    fontSize: {
      base: ["16px", "24px"],
      sm: ["14px", "20px"],
      xs: ["12px", "16px"],
    },
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      success: "#12CB5B",
      error: "#D34343",
      dark: {
        900: "#161214",
        850: "#221C1F",
        800: "#2D2529",
        750: "#382E33",
        700: "#43373D",
        650: "#4F4047",
        600: "#5A4952",
        550: "#65535C",
        500: "#705C66",
        450: "#7B6570",
        400: "#876E7A",
        350: "#917885",
        300: "#9A848F",
        250: "#A38F99",
        200: "#AC9AA3",
        150: "#B6A5AD",
        100: "#BFB0B8",
      },
      imperial_fire: {
        900: "#A4161A",
        850: "#B4181E",
        800: "#C51B21",
        750: "#D71D24",
        700: "#E2282E",
        650: "#E43A3F",
        600: "#E74B51",
        550: "#E95D62",
        500: "#EB6F74",
      },
      smoke_screen: {
        900: "#8F8F8F",
        850: "#999999",
        800: "#A3A3A3",
        750: "#ADADAD",
        700: "#B8B8B8",
        650: "#C2C2C2",
        600: "#CCCCCC",
        550: "#D3D3D3",
        500: "#E0E0E0",
        450: "#EBEBEB",
        400: "#F5F5F5",
      },
    },
    screens: {
      xs: "360px",
      sm: "600px",
      md: "960px",
      lg: "1280px",
      xl: "1600px",
      xxl: "1920px",
    },
  },
  plugins: [require("daisyui")],
};
