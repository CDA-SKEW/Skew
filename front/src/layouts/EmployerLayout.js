import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Navigation from "components/home/Navigation";
import { ThemeProvider } from "@emotion/react";
import { theme, themeEmployer } from "configs/theme";
import { AppBar, Avatar, IconButton, Menu, MenuItem, Tooltip, Zoom } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Button } from "@mui/material";
import Footer from "components/core/Footer";
import Title from "components/core/navBarUser/Title";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Logo from "assets/logo/logo.png";
import MenuIcon from '@mui/icons-material/Menu';


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

    const pages = ['Products', 'Pricing', 'Blog'];
    const [anchorElNav, setAnchorElNav] = React.useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


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

                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Title />
                    </Box>


                    <Toolbar>                        
                        <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem >
                                ))}
                            </Menu>
                        </Box>


                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <Box sx={{ flexGrow: 1, display: 'flex' }}></Box>

                            <Typography
                                variant="h1"
                                noWrap
                                component="h1"
                                sx={{ flexGrow: 1, display: 'flex' }}
                            >
                                SKEW
                            </Typography>


                            <Box sx={{ flexGrow: 0, display: 'flex' }}>
                                <Avatar
                                    variant="square"
                                    src={Logo}
                                    sx={{
                                        width: 40,
                                        height: 40,
                                    }}
                                />
                          </Box>             


                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:"space-around" }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: "black", display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box> 

                    {/* <Navigation title={title} link={navlink} /> */}
                    {/* <MenuList pages={pages} ListItemLink={ListItemLink} /> */}
                    {/* <MenuListResponsive pages={pages} ListItemLink={ListItemLink} /> */}

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
                        maxHeight: "auto"
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

                    component="main"
                    //permet d'enlever les padding left et right
                    disableGutters
                    fixed="true"

                    sx={{ flexGrow: 1, bgcolor: themeEmployer.palette.bgPage.main, p: 4, minHeight: "100vh" }}
                >

                    <Toolbar id="back-to-top-anchor" />
                    <Toolbar />
                    {children}

                </Box>
            </ThemeProvider>

            <ScrollTop >
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>

        </Box >

            {/* Footer*/ }
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