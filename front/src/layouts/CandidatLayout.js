import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { ThemeProvider } from "@emotion/react";
import { theme, themeCandidate } from "configs/theme";
import { AppBar } from '@mui/material';
import TopNav from "components/core/navBarUser/TopNav";
import BackNav from "components/core/navBarUser/BackNav";
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from "components/ScrollTop";
import SlideBarUser from "components/core/navBarUser/SlideBarUser";
import { useDispatch, useSelector } from "react-redux";
import { getProfilCandidate } from "store/actions/CandidateActions";
import { useLocation } from "react-router-dom";


export default function CandidatLayout({ children }) {

    const dispatch = useDispatch();
    const location = useLocation();

    // {/*Constante pour largeur slideBar*/ }
    const drawerWidth = 230;


    //Définir les liens pour navBar
    const pages = [
        { name: 'Accueil', link: '' },
        { name: 'Contactez-nous', link: 'contactus' },
        { name: 'Recherchez une offre', link: 'offres' },
        { name: 'profil', link: 'Candidat/dashBoard' }
    ]

    //Définir les liens pour navBar version mobile
    const pagesReponsive = [
        { name: 'Mon compte', link: 'Candidat/profil' },
        // { name: 'Changer Mot de passe', link: 'Employer/profilPw' },
        { name: 'Offres Postulé', link: 'Candidat/candidature' },
        // { name: 'Mes offres', link: 'Employer/offer' }
    ]

    //   Définir les liens employeur pour la slideBar
    const listItems = [
        { name: 'Offres Postulé', link: 'Candidat/candidature' },
        // { name: 'Mes offres', link: 'Employer/offer' }
    ]

    const listItemGeneral = [
        { name: 'Mon compte', link: 'Candidat/profil' },
        // { name: 'Mot de passe', link: 'Employer/profilPw' }
    ]
    // const token = jwt_decode(localStorage.getItem('candidat'))
    React.useEffect(() => {
        // console.log("effect getDataProfilEmployerEmployer");
        dispatch(getProfilCandidate());
    }, []);


    //   ici à chaque chargement de la page, on revie t en haut de page
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    // dispatch(getProfilCandidate());

    const dataProfilCandidate = useSelector(
        (state) => state.candidate.userProfil.coord
    );
    // console.log('LOG dataprofil', dataProfilCandidate);

    // const dataProfilCandidate = { name: "Toto", avatar: "" }

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
                    <BackNav pages={pages} pagesReponsive={pagesReponsive} />

                </AppBar>

                {/*sidebar Layout*/}
                <SlideBarUser drawerWidth={drawerWidth}
                    listItems={listItems}
                    listItemGeneral={listItemGeneral}
                    dataProfilUser={dataProfilCandidate}
                />

                {/* Body*/}
                <ThemeProvider theme={themeCandidate} >
                    <Box
                        component="main"
                        //permet d'enlever les padding left et right
                        disableGutters

                        sx={{ flexGrow: 1, bgcolor: themeCandidate.palette.bgPage.main, p: 4, minHeight: "100vh", width: "100%" }}
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

            {/* Le Footer ne sera pas utiliser dans mon layout si utilisateur est connecté*/}
            {/* <Box
                sx={{
                    display: { xs: 'none', sm: 'none', md: 'block' },
                    width: { xs: '100%', sm: '100%', md: `calc(100% - ${drawerWidth}px)` },
                    ml: { xs: 0, sm: 0, md: `${drawerWidth}px` }
                }}
            >
                <Footer />
            </Box> */}
        </ThemeProvider >
    );
}
