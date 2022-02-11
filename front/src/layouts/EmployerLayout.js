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
import { AppBar, Avatar, Container, Zoom } from '@mui/material';
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
import { maxWidth } from "@mui/system";



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
                sx={{ position: 'fixed', bottom: 200, right: 16 }}
            >
                {children}
            </Box>
        </Zoom>
    );
}


// {/*Constante pour largeur slideBar*/ }
const drawerWidth = 250;

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
    // const pages = [
    //     { titre: "Accueil", lien: "/" },
    //     { titre: "Offres", lien: "/offres" },
    //     { titre: "Contactez-nous", lien: "/contactus" },
    // ];


    return (
        <Box>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Box display={"flex"}>
                    {/*NavBar Layout*/}
                    <AppBar
                        position="fixed"
                        sx={{
                            width: { xs: '100%', sm: '100%', md: `calc(100% - ${drawerWidth}px)` },
                            ml: { xs: 0, sm: 0, md: `${drawerWidth}px` }
                        }}
                    >
                        <Toolbar>
                            <Typography variant="h6" noWrap component="div">
                                {/* <Navigation title={title} link={navlink} /> */}
                                {/*NavBar du site*/}
                                <Titre />
                                {/* <MenuList pages={pages} ListItemLink={ListItemLink} /> */}
                                {/* <MenuListResponsive pages={pages} ListItemLink={ListItemLink} /> */}
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    {/*sidebar Layout*/}
                    <Drawer
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                boxSizing: 'border-box',
                                bgcolor: theme.palette.primary.main,
                            },
                            display: { xs: 'none', sm: 'none', md: "block" }

                        }}
                        variant="permanent"
                        anchor="left"
                    >

                        <Box
                            display={"flex"} justifyContent='start' paddingTop={4} paddingX={2}>
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
                    <ThemeProvider theme={themeEmployer} >
                        <Box
                           
                            component={"main"}
                            sx={{ flexGrow: 1, bgcolor: themeEmployer.palette.bgPage.main, p:4 ,minHeight: "100vh" }}
                        >

                            <Toolbar  id="back-to-top-anchor"/>
                            {children}

                        </Box>
                    </ThemeProvider>

                    <ScrollTop >
                        <Fab color="secondary" size="small" aria-label="scroll back to top">
                            <KeyboardArrowUpIcon />
                        </Fab>
                    </ScrollTop>
                </Box>

                <Box
                    sx={{
                        width: { xs: '100%', sm: '100%', md: `calc(100% - ${drawerWidth}px)` },
                        ml: { xs: 0, sm: 0, md: `${drawerWidth}px` }
                    }}
                >
                    <Footer />
                </Box>


            </ThemeProvider >
        </Box >
    );
}