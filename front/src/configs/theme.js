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
    h6: {
      textAlign: "center",
      marginBottom: 10,
      marginTop: 10,
    },
    body1: {
      textAlign: "justify",
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
      main: "#f50057",
    },
    background: {
      default: "#161C24",
      paper: "#212B36",
    },
    text: {
      primary: "#ffffff",
    },
    divider: "#3C4752",
    success: {
      main: "#c7f1d1",
    },
    info: {
      main: "#2196f3",
    },
    warning: {
      main: "#ff9800",
    },
    error: {
      main: "#f44336",
    },
    MuiTable: {
      size: "small",
    },
  },
  shape: {
    borderRadius: 12,
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
