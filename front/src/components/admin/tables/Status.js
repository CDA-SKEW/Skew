/*------------MUI Imports-------------*/

import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

/*------------Export function-------------*/

export default function IconChips(props) {
  const { user } = props;
  const handleClick = () => {};

  const checkStatus = () => {
    if (user.row.isBanned === 1) {
      return (
        <Chip
          label="banned"
          variant="outlined"
          color="warning"
          icon={<RemoveCircleIcon />}
        />
      );
    } else if (user.row.isVerified === 1) {
      return (
        <Chip
          label="check"
          variant="outlined"
          color="primary"
          onClick={handleClick}
          icon={<CheckIcon />}
        />
      );
    } else {
      return (
        <Chip
          label="not check"
          variant="outlined"
          color="error"
          onClick={handleClick}
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
