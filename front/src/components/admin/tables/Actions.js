/*------------MUI Imports-------------*/

import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

/*------------Export function-------------*/

export default function DeletableChips() {
  const handleDelete = (id) => (event) => {
    event.stopPropagation();
    console.info("Delete this user ?");
  };
  const handleClick = () => {
    console.info("Add this user ?");
  };

  /*--------------Components------------*/
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="delete"
        color="error"
        // onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<HighlightOffIcon />}
        variant="outlined"
      />

      <Chip
        label="check"
        color="primary"
        onClick={handleClick}
        // onDelete={handleDelete}
        deleteIcon={<CheckCircleIcon />}
        variant="outlined"
      />
    </Stack>
  );
}
