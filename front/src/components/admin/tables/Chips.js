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
    // Si l'user est un employeur
    if (user.row.isRecruteur === 1) {
      // tu me retourne ce component ci (employeur)
      return (
        <Chip
          label="recruteur"
          variant="outlined"
          color="secondary"
          icon={<AccountCircleIcon />}
        />
      );
    } else {
      // Sinon tu me retourne celui-là (candidat)
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
