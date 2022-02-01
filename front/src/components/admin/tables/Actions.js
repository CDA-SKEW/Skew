/*------------MUI Imports-------------*/

import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useDispatch } from "react-redux";
import { deleteUser } from "store/actions/AdminActions";

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
        label="delete"
        color="error"
        // onClick={handleClick}
        // onDelete={handleDelete}
        deleteIcon={<HighlightOffIcon />}
        variant="outlined"
        onClick={() => {
          if (window.confirm("Voulez-vous supprimer cet user ?")) {
            handleDelete();
          }
        }}
      />

      {/* <Chip
        label="check"
        color="primary"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<CheckCircleIcon />}
        variant="outlined"
      /> */}
    </Stack>
  );
}
