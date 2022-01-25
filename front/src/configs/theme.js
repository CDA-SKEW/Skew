import { createTheme } from "@mui/material/styles";
import { orange, purple } from "@mui/material/colors";

// Main Layout
let theme = createTheme({
  palette: {
    primary: {
      main: '#FFD9B8',
    },
    secondary: {
      main: orange[500],
    },
    background: {
      paper: '#ABC4FF'
    }
  },
});

// theme = responsiveFontSizes(theme);

// AdminLayout
let themeAdmin = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: orange[500],
    },
  },
});
// themeAdmin = responsiveFontSizes(theme);

export { theme, themeAdmin };
