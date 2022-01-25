import { Box } from "@mui/system";
import Navbar from "components/core/Navbar";
import * as React from "react";

// Paramètres enfants

const AdminLayout = ({ children }) => {
  const title = "Acceuil";
  //   Définir les liens de la navbar ici:
  const navlink = ["acceuil", "admin"];

  return (
    <Box>
      <Navbar title={title} link={navlink} />
      {/* tous ce qui composent les components enfants */}
      {children}
    </Box>
  );
};

export default AdminLayout;
