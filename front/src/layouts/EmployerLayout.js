import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Navigation from "components/home/Navigation";
import { ThemeProvider } from "@emotion/react";
import { theme, themeEmployer } from "configs/theme";
import Navbar from "../components/core/Navbar";
import { Avatar, Container, Zoom } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Button } from "@mui/material";
import Footer from "components/core/Footer";
import Titre from "components/core/navbar/Titre";
import MenuList from "components/core/navbar/MenuList";
import MenuListResponsive from "components/core/navbar/MenuListResponsive";
import ListItemLink from "components/core/navbar/ListItemLink";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';



//fonction pour remonter auenn haut de la page
function ScrollTop(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    const handleClick = (event) => {

        // console.log("coucou je click")
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        // console.log("anchor", anchor)
        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };

    return (
        <Zoom in={trigger}>
            <Box
                onClick={(e) => handleClick(e)}
                role="presentation"
                sx={{ position: 'fixed', bottom: 80, right: 16 }}
            >
                {children}
            </Box>
        </Zoom>
    );
}


// {/*Constante pour largeur slideBar*/ }
const drawerWidth = 250;


// {/*Style NavBar Layout*/ }
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));


// {/* Style SlideBar */ }
const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    justifyContent: "flex-end"
}));


// {/* Style pour le boby */ }
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    })
);


// code temporaire
// {/* <ListItemLink /> */ }

// ListItemLink.propTypes = {
//     primary: PropTypes.string.isRequired,
//     to: PropTypes.string.isRequired,
// };

export default function EmployerLayout({ children }) {
    // const theme = useTheme(theme);
    const [open, setOpen] = React.useState(false);


    {/* constante pour la SlideBar */ }
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    //   Définir les liens employeur pour la slideBar
    const listItems = ["Déposer une offre", "Mes offres"];


    //   Définir les liens de la navbar
    // const title = "PAGE HOME <<";
    // const navlink = ["article", "contact", "candidat", "recruteur", "admin"];


    // code temporairk
    const pages = [
        { titre: "Accueil", lien: "/" },
        { titre: "Offres", lien: "/offres" },
        { titre: "Contactez-nous", lien: "/contactus" },
    ];


    return (
        <Box>
            <CssBaseline />

            <ThemeProvider theme={theme}>

                <Box display={"flex"}>

                    {/*NavBar Layout*/}
                    <AppBar position="fixed" open={open} >
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{ mr: 4, ...(open && { display: "none" }), display: { xs: 'none', sm: 'none', md: "block" } }}

                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap component="div">
                                {/* <Navigation title={title} link={navlink} /> */}
                                {/*NavBar du site*/}
                                <Titre />
                                {/* <MenuList pages={pages} ListItemLink={ListItemLink} /> */}
                                {/* <MenuListResponsive pages={pages} ListItemLink={ListItemLink} /> */}

                            </Typography>
                        </Toolbar >
                    </AppBar>


                    {/* SlideBar */}
                    <Drawer
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            "& .MuiDrawer-paper": {
                                width: drawerWidth,
                                height: "100%",
                                boxSizing: "border-box",
                                bgcolor: theme.palette.primary.main
                            },
                        }}
                        variant="persistent"
                        anchor="left"
                        open={open}
                    >

                        <DrawerHeader >
                            Masquer le menu
                            <IconButton onClick={handleDrawerClose} >
                                {theme.direction === "ltr" ? (
                                    <ChevronLeftIcon />
                                ) : (
                                    <ChevronRightIcon />
                                )}
                            </IconButton>

                        </DrawerHeader>
                        <Divider />


                        <Box
                            display={"flex"} justifyContent='start' paddingX={2} paddingTop={2}>
                            <Avatar alt="" srcSet="https://thiscatdoesnotexist.com/" sx={{ width: 90, height: 90 }} />
                        </Box>

                        <Box
                            display={"flex"} justifyContent='start' paddingX={3}>
                            <Typography variant="h6">
                                Prénom
                            </Typography>
                        </Box>

                        <Divider />
                        <List>
                            <ListItem button>
                                <ListItemIcon >
                                    <SettingsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Mon compte" />
                            </ListItem>
                        </List>

                        <Divider />

                        <List>
                            <ListItem button>
                                <ListItemIcon >
                                    <VpnKeyIcon />
                                </ListItemIcon>
                                <ListItemText primary="Mot de passe" />
                            </ListItem>
                        </List>

                        <Divider />

                        <List>
                            {listItems.map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>




                        <Box display={"flex"} justifyContent={"center"} marginTop={"auto"} marginBottom={4}>
                            <Button
                                variant="contained"
                                size="small"
                                sx={{
                                    bgcolor: "#FF7F50",
                                    color: "white",
                                }}
                                startIcon={<LogoutIcon />}
                            >
                                Logout
                            </Button>
                        </Box>

                    </Drawer>

                    {/* Body*/}
                    <Main open={open}
                        disableGutters
                        sx={{
                            bgcolor: themeEmployer.palette.bgPage.main, minHeight: "100vh", pt: 8
                        }}

                    >
                        <DrawerHeader id="back-to-top-anchor" />


                        <ThemeProvider theme={themeEmployer} >
                            <Box >
                                {children}
                            </Box>
                        </ThemeProvider>

                    </Main>

                    <ScrollTop >
                        <Fab color="secondary" size="small" aria-label="scroll back to top">
                            <KeyboardArrowUpIcon />
                        </Fab>
                    </ScrollTop>

                </Box>

                <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                    <Footer />
                </AppBar>

            </ThemeProvider >
        </Box>
    );
}