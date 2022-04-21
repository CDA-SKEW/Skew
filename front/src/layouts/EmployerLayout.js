import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@emotion/react";
import { theme, themeEmployer } from "configs/theme";
import {
  AppBar,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Toolbar,
} from "@mui/material";
import TopNav from "components/core/navBarUser/TopNav";
import BackNav from "components/core/navBarUser/BackNav";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ScrollTop from "components/ScrollTop";
import SlideBarUser from "components/core/navBarUser/SlideBarUser";
import { useDispatch, useSelector } from "react-redux";
import {
  getDashboardEmployer,
  getProfilEmployer,
} from "store/actions/EmployerActions";
import { Navigate, useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";

export default function EmployerLayout({ children }) {
  const dispatch = useDispatch();
  const location = useLocation();

  // {/*Constante pour largeur slideBar*/ }
  const drawerWidth = 230;

  //Définir les liens pour navBar
  const pages = [
    { name: "Accueil", link: "" },
    { name: "Contactez-nous", link: "contactus" },
    { name: "Recherchez une offre", link: "offres" },
    { name: "profil", link: "Employer/dashBoard" },
  ];

  //Définir les liens pour navBar version mobile
  const pagesReponsive = [
    { name: "Mon compte", link: "Employer/profil" },
    { name: "Changer Mot de passe", link: "Employer/profilPw" },
    { name: "Déposer une offre", link: "Employer/addOffer" },
    { name: "Mes offres", link: "Employer/offer" },
  ];

  //   Définir les liens employeur pour la slideBar
  const listItems = [
    { name: "Déposer une offre", link: "Employer/addOffer" },
    { name: "Mes offres", link: "Employer/offer" },
  ];

  const listItemGeneral = [
    { name: "Mon compte", link: "Employer/profil" },
    { name: "Mot de passe", link: "Employer/profilPw" },
  ];

  const [openDialogToken, setOpenDialogToken] = React.useState();
  const [timeToken, setTimeToken] = React.useState();

  React.useEffect(() => {
    dispatch(getProfilEmployer())
  }, [dispatch]);

  //   ici à chaque chargement de la page, on revie t en haut de page
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const dataProfilEmployer = useSelector(
    (state) => state.employer.dataProfilEmployer
  );

  React.useEffect(() => {
    setInterval(() => {
      if (!localStorage.getItem("user_token")) return <Navigate to="/" />
      else {
        let timeTokenMin = Math.floor(jwt_decode(localStorage.getItem("user_token")).exp - Date.now().valueOf() / 1000)
        if (Number(timeTokenMin) < 60) {
          setInterval(() => {
            setOpenDialogToken(true);
            let timeTokenSec = Math.floor(jwt_decode(localStorage.getItem("user_token")).exp - Date.now().valueOf() / 1000)
            setTimeToken(timeTokenSec);
            if (Number(timeTokenSec) <= 0) {
              setOpenDialogToken(false);
              localStorage.removeItem("user_token");
              window.location.reload();
            }
          }, 1000);
        }
      }
    }, 60000);
  }, []);

  const handleFormToken = async (e) => {
    e.preventDefault();
    setTimeout(async () => { 
      window.location.reload()     
      await dispatch(getDashboardEmployer());       
    }, 600);
    setOpenDialogToken(false);
    

  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        {/*NavBar Layout*/}
        <AppBar
          position="fixed"
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: `calc(100% - ${drawerWidth}px)`,
            },
            ml: { xs: 0, sm: 0, md: `${drawerWidth}px` },
          }}
        >
          {/* Partie haute de la navBar */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <TopNav />
          </Box>

          {/* Partie haute de la navBar */}
          <BackNav pages={pages} pagesReponsive={pagesReponsive} />
        </AppBar>

        {/*sidebar Layout*/}
        {dataProfilEmployer && (<SlideBarUser
          drawerWidth={drawerWidth}
          listItems={listItems}
          listItemGeneral={listItemGeneral}
          dataProfilUser={dataProfilEmployer}
        />)}

        {/* Body*/}
        <ThemeProvider theme={themeEmployer}>
          <Box
            component="main"
            //permet d'enlever les padding left et right
            disableGutters
            sx={{
              flexGrow: 1,
              bgcolor: themeEmployer.palette.bgPage.main,
              py: 4,
              px: 2,
              minHeight: "100vh",
              width: "100%",
            }}
          >
            <Toolbar id="back-to-top-anchor" />

            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Toolbar />
            </Box>

            {children}
          </Box>
        </ThemeProvider>

        {/* //fonction pour remonter auenn haut de la page */}
        <ScrollTop>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Box>

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

      {openDialogToken && (
        <Dialog
          open={openDialogToken}
          actions={null}
          keepMounted
          aria-describedby="alert-dialog-token"
        >
          <DialogContent>
            <Box display={"flex"} justifyContent={"end"} pb={2}>
              <CircularProgress
                variant="determinate"
                value={timeToken * 1.66}
                sx={{ color: "red" }}
              />
            </Box>
            <DialogContentText
              sx={{ color: "black", textAlign: "center" }}
              id="alert-dialog-token"
            >
              Vous allez être déconnecté dans {timeToken} secondes...
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button sx={{ color: "blue" }} onClick={(e) => handleFormToken(e)}>
              Rester sur le site
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </ThemeProvider>
  );
}
