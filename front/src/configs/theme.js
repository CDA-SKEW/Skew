import { createTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";

const LinkBehavior = React.forwardRef((props, ref) => {
  const { href, ...other } = props;
  return (
    <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />
  );
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
    offre: {
      main: "#E6C3A5",
    },
    background: {
      paper: "#ABC4FF",
    },
    souka: {
      main: '#FFC300'
    },
    etienne: {
      main: '#C70039'
    },
    kevin: {
      main: '#15D04B'
    },
    wil: {
      main: '#15BFD0'
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
    h3: {
      textAlign: 'center'
    },
    h4: {
      textAlign: "center",
      marginTop: 20,
      marginBottom: 20,
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
    mode: "dark",
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
    background2: {
      default: "#E5E5E5",
      paper: "#FF7F50",
    },
    text: {
      primary: "#ffffff",
      secondary: "#004F98",
    },
    success: {
      main: "#A1AF4C",
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
    shape: {
      borderRadius: 4,
    },
  },
  typography: {
    fontWeightLight: 400,
    fontSize: 13,
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
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
});

// User
const themeCandidate = createTheme({
  palette: {
    bgPage:{
      main: '#E5E5E5',
    },
    bgTitleItems:{
      main: '#004F98',
    },
    textTitleItems:{
      main: '#ffffff',
    },
    bgBox:{
      main: '#ffffff',
    },
    bgCardDashboard:{
      main: '#FF7F50',
    },
  },
});

// User
const themeEmployer= createTheme({
  palette: {
    bgPage:{
      main: '#E5E5E5',
    },
    bgTitleItems:{
      main: '#004F98',
    },
    textTitleItems:{
      main: '#ffffff',
    },
    bgBox:{
      main: '#ffffff',
    },
    bgCardDashboard:{
      main: '#FF7F50',
    },
  },
});

export { theme, themeAdmin, themeCandidate, themeEmployer };
