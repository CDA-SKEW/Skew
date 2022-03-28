import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
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
import ModalConfimation from "components/ModalConfimation";
import AppBar from "@mui/material/AppBar";
import { ThemeProvider } from "@mui/material/styles";
import { themeAdmin } from "../configs/theme";
import GlobalStyles from "@mui/material/GlobalStyles";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Button from "@mui/material/Button";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router";
import { SnackbarProvider } from "notistack";
import MailIcon from "@mui/icons-material/Mail";
import { Avatar, Stack } from "@mui/material";

const drawerWidth = 240;

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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Navigation Links
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  //constante pour le modal contact
  const [openModalConfirmation, setOpenModalConfirmation] =
    React.useState(false);
  const handleClickOpenModalConfirmation = () => {
    setOpenModalConfirmation(true);
  };
  const handleCloseModalConfirmation = () => {
    setOpenModalConfirmation(false);
    setAnchorElNav(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const ItemNav = [
    { id: 1, name: "Dashboard", icon: <DashboardIcon />, path: "/admin" },
    { id: 2, name: "Utilisateurs", icon: <PeopleIcon />, path: "/admin/users" },
    { id: 3, name: "Emplois", icon: <WorkIcon />, path: "/admin/jobs" },
    { id: 4, name: "Messagerie", icon: <MailIcon />, path: "/admin/messages" },
  ];

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

  return (
    <ThemeProvider theme={themeAdmin}>
      {/* SnackbarProvider = message flash */}
      <SnackbarProvider>
        <CssBaseline />
        <GlobalStyles />
        <Box sx={{ display: "flex" }}>
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Espace Admin
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Stack direction="row" spacing={2}>
              <Avatar
                variant="circular"
                alt="lion"
                src="https://img.search.brave.com/LrKqU6BWC79-nwQs5lTk_I__cKE7HsWCSu2a01dMZ7A/rs:fit:780:520:1/g:ce/aHR0cHM6Ly93d3cu/em9vLXBhbG15cmUu/ZnIvc2l0ZXMvZGVm/YXVsdC9maWxlcy9z/dHlsZXMvc2Fuc19j/YWRyZS9wdWJsaWMv/Y291dmVydHVyZV9h/bmltYXV4L2NfbWdf/MDA5MC5qcGc_aXRv/az16MFZjcW5uVA"
                sx={{
                  width: 70,
                  height: 70,
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  left: 85,
                  mb: 5,
                }}
              />
            </Stack>
            <Divider />
            <List>
              {ItemNav.map((item, index) => {
                return (
                  <ListItem
                    button
                    key={item.name}
                    onClick={(e) => navigate(item.path)}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItem>
                );
              })}
            </List>
            <Divider />
            {/* Deconnexion button  */}
            <Button
              onClick={handleClickOpenModalConfirmation}
              sx={{
                width: 120,
                background:
                  "linear-gradient(to right bottom, #E8FFEF, #C1F8D2)",
                flexDirection: "row",
                alignItems: "flex-start",
                mt: 50,
                position: "absolute",
                left: 55,
              }}
              endIcon={<ExitToAppIcon />}
            >
              Exit
            </Button>
            <ModalConfimation
              keepMounted
              open={openModalConfirmation}
              onClose={handleCloseModalConfirmation}
              titleModal="Déconnexion"
              textModal="Êtes-vous sûr de vouloir vous deconnecter?"
              colorBgModal="#161C24"
              colorTextModal="#fff"
              action="disconnect"
            />
          </Drawer>
          <Main open={open}>
            <DrawerHeader />
            {children}
          </Main>
        </Box>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
