import '@fontsource/jersey-25';
import '@fontsource/poppins';
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0D1B2A",
      dark: "#1B263B",
      light: "#415A77",
    },
    text: {
      primary: "#E0E1DD",
      secondary: "#778DA9",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontFamily: "'Jersey 25', cursive",
    },
  },
});
