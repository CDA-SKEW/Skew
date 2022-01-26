import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

// Main Layout
let theme = createTheme({
  palette: {
    primary: {
      main: "#FFD9B8",
    },
    secondary: {
      main: orange[500],
    },
    background: {
      paper: "#ABC4FF",
    },
  },
});

// theme = responsiveFontSizes(theme);

// AdminLayout
const themeAdmin = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#33c863",
    },
    secondary: {
      main: "#c1f8d2",
    },
    background: {
      default: "#161C24",
      paper: "#212b36",
    },
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: "#689f38",
        color: "#fff",
      },
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
  props: {
    MuiAppBar: {
      color: "transparent",
    },
  },
});

export { theme, themeAdmin };
