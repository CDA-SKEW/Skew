/*------------MUI Imports-------------*/

import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { deleteUser } from "store/actions/UsersActions";
import DeleteIcon from "@mui/icons-material/Delete";
import BlockIcon from "@mui/icons-material/Block";

/*------------Export function-------------*/

export default function DeletableChips({ id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    // Transmettre les données du STORE avec dispatch (crud)
    dispatch(deleteUser(id));
  };

  /*--------------Components------------*/
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="ban"
        color="warning"
        variant="outlined"
        icon={<BlockIcon />}
        onClick={() => {
          if (window.confirm("Voulez-vous supprimer cet user ?")) {
            handleDelete();
          }
        }}
      />
      <Chip
        label="delete"
        color="error"
        variant="outlined"
        icon={<DeleteIcon />}
        onClick={() => {
          if (window.confirm("Voulez-vous supprimer cet user ?")) {
            handleDelete();
          }
        }}
      />
    </Stack>
  );
}
