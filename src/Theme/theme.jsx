import { createTheme } from "@mui/material";
const darkColor = "#252B42";
export const customTheme = createTheme({
  // Extend the base theme's palette
  palette: {
    bg: {
      black: "rgb(27, 28, 28  )",
      white: "#FFFFFF",
      greenLight: "#00AD50",
      greenMui: "#2e7d32",
      greenMuiHover: "#1b5e20",
      green: "#075B2B",
      greenDark: "#098E6E",
      greenDarker: "#115740",
      greenGradient: `linear-gradient(269deg, #075B2B 16.65%, #098E6E 97.87%) `,
    },
    text: {
      dark: darkColor,
      grey: "#737373",
      lightGrey: "rgb(220,220,220)",
    },
    customPalette2: {
      main: "#2196F3", // Custom color 2
    },

    appPadding: {
      paddingBlock: "5rem",
      paddingInline: "3.5rem",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontHeading: "24px",
    h1: {
      fontSize: "40px",
      fontWeight: "bold",
      color: darkColor,
    },
    h2: {
      fontSize: "26px",
      fontWeight: "bold",
      color: darkColor,
    },
    h3: {
      fontSize: "22px",
      color: darkColor,
      fontWeight: "bold",
    },
    h4: {
      color: darkColor,
      fontSize: "18px",
      fontWeight: "500",
    },
    h5: {
      color: darkColor,
      fontSize: "16px",
      fontWeight: "500",
    },
    h6: {
      color: darkColor,
      fontSize: "14px",
      fontWeight: "500",
    },
  },
});
