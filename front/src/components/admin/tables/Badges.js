/*------------MUI Imports-------------*/

import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

/*------------Export function-------------*/

export default function IconChips(props) {
  const { user } = props;

  const checkStatus = () => {
    if (user.row.isChecked === 1) {
      return (
        <Chip
          label="check"
          variant="outlined"
          color="primary"
          icon={<CheckIcon />}
        />
      );
    } else {
      return (
        <Chip
          label="not check"
          variant="outlined"
          color="error"
          icon={<ClearIcon />}
        />
      );
    }
  };

  return (
    <Stack direction="row" spacing={1}>
      {checkStatus()}
    </Stack>
  );
}
