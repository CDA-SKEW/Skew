// Import MUI

import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { ThemeProvider } from "@mui/material/styles";
import { themeAdmin } from "../configs/theme";
import GlobalStyles from "@mui/material/GlobalStyles";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Button from "@mui/material/Button";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { SnackbarProvider } from 'notistack';

const drawerWidth = 240;

function ResponsiveDrawer({ children }) {
  const { window } = children;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  // Navigation Links
  const navigate = useNavigate();

  const ItemNav = [
    { id: 1, name: "Dashboard", icon: <DashboardIcon />, path: "/admin" },
    { id: 2, name: "Utilisateurs", icon: <PeopleIcon />, path: "/admin/users" },
    { id: 3, name: "Emplois", icon: <WorkIcon />, path: "/admin/jobs" },
    { id: 4, name: "Messagerie", icon: <MailIcon />, path: "/admin/messages" },
  ];

  const drawer = (
    <Box>
      <Toolbar />
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
          }}
        />
      </Stack>
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
        onClick={() => navigate("/")}
        sx={{
          width: 120,
          background: "linear-gradient(to right bottom, #E8FFEF, #C1F8D2)",
          // display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          mt: 30,
          position: "absolute",
          left: 55,
        }}
        endIcon={<ExitToAppIcon />}
      >
        Exit
      </Button>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={themeAdmin}>
      {/* SnackbarProvider = message flash */}
      <SnackbarProvider>
        <CssBaseline />
        <GlobalStyles />;
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
            <Toolbar sx={{ backgroundColor: "#161C24" }}>
              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  mr: 2,
                  display: { sm: "none" },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Toolbar />
            {children}
          </Box>
        </Box>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
