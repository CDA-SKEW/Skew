import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Titre from "./navbar/Titre";
import MenuList from "./navbar/MenuList";
import MenuListResponsive from "./navbar/MenuListResponsive";

const pages = [
  { titre: "Accueil", lien: "/" },
  { titre: "Offres", lien: "/offres" },
  { titre: "Contactez-nous", lien: "/contactus" },
];

export default function ResponsiveAppBar() {


  return (
    <AppBar position="static">
      <Box>
        <Toolbar
          disableGutters
          sx={{
            display: { xs: "flex", md: "block" }
          }}
        >
          <Titre />

          <MenuList pages={pages} />
          <MenuListResponsive pages={pages} />
        </Toolbar>
      </Box>
    </AppBar>
  );
};