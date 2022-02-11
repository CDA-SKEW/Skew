import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Navigation from "components/home/Navigation";
import { ThemeProvider } from "@emotion/react";
import { theme, themeEmployer } from "configs/theme";
import { AppBar } from '@mui/material';
import Footer from "components/core/Footer";
import TopNav from "components/core/navBarUser/TopNav";
import BackNav from "components/core/navBarUser/BackNav";
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from "components/ScrollTop";
import SlideBarUser from "components/core/SlideBarUser";


export default function EmployerLayout({ children }) {

    // {/*Constante pour largeur slideBar*/ }
    const drawerWidth = 230;

    //   Définir les liens de la navbar
    // const title = "PAGE HOME <<";
    // const navlink = ["article", "contact", "candidat", "recruteur", "admin"];

    //   Définir les liens employeur pour la slideBar
    const listItems = ["Déposer une offre", "Mes offres"];
    const pages = ['Accueil', 'Contactez-nous', 'Recherchez une offre', 'profil'];

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ display: 'flex' }}>
                {/*NavBar Layout*/}
                <AppBar
                    position="fixed"
                    sx={{
                        width: { xs: '100%', sm: '100%', md: `calc(100% - ${drawerWidth}px)` },
                        ml: { xs: 0, sm: 0, md: `${drawerWidth}px` }
                    }}
                >
                    {/* Partie haute de la navBar */}
                    <Box
                        sx={{ display: { xs: 'none', md: 'block' } }}>
                        <TopNav />
                    </Box>

                    {/* Partie haute de la navBar */}
                    <BackNav  pages={pages}/>

                </AppBar>

                {/*sidebar Layout*/}
                <SlideBarUser  drawerWidth={drawerWidth} listItems={listItems} />

                {/* Body*/}
                <ThemeProvider theme={themeEmployer} >
                    <Box

                        component="main"
                        //permet d'enlever les padding left et right
                        disableGutters
                        fixed="true"

                        sx={{ flexGrow: 1, bgcolor: themeEmployer.palette.bgPage.main, p: 4, minHeight: "100vh" }}
                    >

                        <Toolbar id="back-to-top-anchor" />

                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Toolbar />
                        </Box>

                        {children}

                    </Box>
                </ThemeProvider>

                {/* //fonction pour remonter auenn haut de la page */}
                <ScrollTop >
                    <Fab color="secondary" size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTop>

            </Box >

            {/* Footer*/}
            <Box
                sx={{
                    width: { xs: '100%', sm: '100%', md: `calc(100% - ${drawerWidth}px)` },
                    ml: { xs: 0, sm: 0, md: `${drawerWidth}px` }
                }}
            >
                <Footer />
            </Box>
        </ThemeProvider >
    );
}