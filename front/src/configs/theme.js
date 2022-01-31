import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

const LinkBehavior = React.forwardRef((props, ref) => {
  const { href, ...other } = props;
  return <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />;
});

LinkBehavior.propTypes = {
  href: PropTypes.oneOfType([
    PropTypes.shape({
      hash: PropTypes.string,
      pathname: PropTypes.string,
      search: PropTypes.string,
    }),
    PropTypes.string,
  ]).isRequired,
};

// Main Layout
let theme = createTheme({
  palette: {
    primary: {
      main: "#FFD9B8",
    },
    secondary: {
      main: "#ABC4FF",
    },
    tiers: {
      main: "#C4FFE9",
    },
    background: {
      paper: "#ABC4FF",
    },
  },
  typography: {
    h1: {
      textAlign: "center",
      fontSize: 40,
    },
    h2: {
      textAlign: "center",
      marginTop: 50,
      marginBottom: 50,
    },
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
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});

// AdminLayout
const themeAdmin = createTheme({
  palette: {
    divider: "rgba(255,255,255,0.12)",
    type: "dark",
    primary: {
      main: "#33c863",
    },
    secondary: {
      main: "#F50057",
    },
    background: {
      default: "#161C24",
      paper: "#212B36",
    },
    text: {
      primary: "#ffffff",
    },
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
  },
  props: {
    MuiTooltip: {
      arrow: true,
    },
    MuiAppBar: {
      color: "transparent",
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
