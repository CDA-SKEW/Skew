import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Titre from "./navbar/Titre";
import MenuList from "./navbar/MenuList";
import MenuListResponsive from "./navbar/MenuListResponsive";
import ListItemLink from "components/core/navbar/ListItemLink";
import PropTypes from 'prop-types';

<ListItemLink />

ListItemLink.propTypes = {
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};
export default function ResponsiveAppBar() {

  const pages = [
    { titre: "Accueil", lien: "/" },
    { titre: "Offres", lien: "/offres" },
    { titre: "Contactez-nous", lien: "/contactus" },
  ];

  return (
    <AppBar position="static">
      <Box>
        <Toolbar
          disableGutters
          sx={{
            display: { xs: "flex", md: "block" },
          }}
        >
          <Titre />
          <MenuList pages={pages} ListItemLink={ListItemLink} />
          <MenuListResponsive pages={pages} ListItemLink={ListItemLink} />
        </Toolbar>
      </Box>
    </AppBar>
  );
};