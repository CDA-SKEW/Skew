import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from '@mui/material/GlobalStyles';
import { theme } from "../configs/theme";
import { style } from '../configs/globalStyle';
import Container from '@mui/material/Container';
import Footer from "components/core/Footer";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Logo from "assets/logo/logo.png";
import Typography from "@mui/material/Typography";
import MenuList from "../components/core/navbar/MenuList";
import MenuListResponsive from "../components/core/navbar/MenuListResponsive";

export default function VisiteurLayout({ children }) {

  const pages = [
    { titre: "Accueil", lien: "" },
    { titre: "Offres", lien: "offres" },
    { titre: "Contactez-nous", lien: "contactus" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{ ...style }} />
      <AppBar position="static">
        <Box>
          <Toolbar
            disableGutters
            sx={{
              display: { xs: "flex", md: "block" },
            }}
          >
            <Box sx={{ display: { xs: "flex", md: "block" } }}>
            <Box
                sx={{
                    flexGrow: 0,
                    display: 'flex',
                }}
            >
                <Avatar
                    variant="square"
                    src={Logo}
                    sx={{
                        mx: 1,
                        width: {md: 50},
                        height: {md: 50},
                        mt: {md: 1}
                    }}
                />
                <Typography
                    variant='h1'
                    sx={{
                        width: '100%',
                        mt: {md: 1}
                    }}
                >
                    SKEW
                </Typography>
            </Box>
        </Box>
            <MenuList pages={pages} />
            <MenuListResponsive pages={pages} />
          </Toolbar>
        </Box>
      </AppBar>
      <Container
        component="main"
        disableGutters
        maxWidth="100%"
      >
        {children}
      </Container>
      <Footer />
    </ThemeProvider>
  );
};