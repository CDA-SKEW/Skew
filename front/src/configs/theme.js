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
  typography: {
    h5: {
      textAlign: "center",
      marginBottom: 10,
    },
  },
});

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
      default: "#161c24",
      paper: "#212b36",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontSize: 14,
    fontWeightLight: 400,
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: "#689f38",
        color: "#fff",
      },
    },
  },
  props: {
    MuiAppBar: {
      color: "transparent",
    },
  },
});

// User
const themeUser = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#004F98",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      default: "#E5E5E5",
      paper: "#FF7F50",
    },
    text: {
      primary: "#ffffff",
      secondary: "#004F98",
    },

    shape: {
      borderRadius: 4,
    },
  },
});

export { theme, themeAdmin, themeUser };
