import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "assets/logo/logo.png";

const pages = [
  { titre: "Accueil", lien: "/" },
  { titre: "Offres", lien: "/offres" },
  { titre: "Contactez-nous", lien: "/contact" },
];

const ResponsiveAppBar = () => {
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
          {/* Logo */}
          <Box sx={{ display: { xs: "flex", md: "block" } }}>
            <Box
              sx={{
                flexGrow: 0,
                display: 'flex'
              }}
            >
              <Avatar variant="square" src={Logo} sx={{ mx: 2 }} />
              <Typography variant='h1'>
                SKEW
              </Typography>
            </Box>
          </Box>

          {/* Menu */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex"
              }}>
              {pages.map((page) => (
                <Button
                  key={page.titre}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  {page.titre}
                </Button>
              ))}
            </Box>
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
              {pages.map((page) => (
                <MenuItem key={page.titre} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.titre}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};
export default ResponsiveAppBar;
