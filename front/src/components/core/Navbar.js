import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from '@mui/material/Button';
import { List } from "@mui/material";
import PropTypes from 'prop-types';
import ListItemLink from "components/core/ListItemLink";
import Titre from "./Titre";

const pages = [
  { titre: "Accueil", lien: "/" },
  { titre: "Offres", lien: "/offres" },
  { titre: "Contactez-nous", lien: "/contactus" },
];

<ListItemLink />

ListItemLink.propTypes = {
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Box maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: { xs: "flex", md: "block" }
          }}
        >
          <Titre />
          {/* Menu */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <List
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: 'center',
              }}>
              {pages.map((page) => (
                <ListItemLink
                  key={page.titre}
                  primary={page.titre}
                  to={page.lien}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    width: { xs: '100%', md: 290 },
                    p: 0
                  }}
                />
              ))}
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#ABC4FF',
                  fontWeight: 'bold'
                }}
              >Log in / Sign in</Button>
            </List>
          </Box>

          {/* Menu burger responsive */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              flexDirection: 'row-reverse',
            }}
          >
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


            {/* Menu responsive */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <List onClick={handleCloseNavMenu}>
                {pages.map((page) => (
                  <ListItemLink
                    key={page.titre}
                    to={page.lien}
                    primary={page.titre}
                    textAlign="center" />
                ))}
                <Button variant="contained">Log in / Sign in</Button>
              </List>
            </Menu>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};