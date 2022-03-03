/*------------MUI Imports-------------*/

import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

/*------------Export function-------------*/

export default function IconChips(props) {
  const { user } = props;
  // console.log("Chips Table users", user);
  const checkStatus = () => {
    // Si l'user est un Admin
    if (user.row.isAdmin === 1) {
      // Tu me retournes ce chip-ci:
      return (
        <Chip
          label="admin"
          variant="outlined"
          color="secondary"
          icon={<AccountCircleIcon />}
        />
      );
    } else if (user.row.isRecruteur === 1) {
      // Sinon si c'est un recruteur tu me retourne celui-ci:
      return (
        <Chip
          label="recruteur"
          variant="outlined"
          color="warning"
          icon={<AccountCircleIcon />}
        />
      );
    } else if (user.row.isRecruteur === 0) {
      // Sinon il est un candidat
      return (
        <Chip
          label="candidat"
          variant="outlined"
          color="info"
          icon={<AccountCircleIcon />}
        />
      );
    }
  };

  return (
    // Afficher la réponse
    <Stack direction="row" spacing={1}>
      {checkStatus()}
    </Stack>
  );
}
