/*------------MUI Imports-------------*/

import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

/*------------Export function-------------*/

export default function IconChips() {
  return (
    <Stack direction="row" spacing={1}>
      {/* <Chip
        label="candidate"
        variant="outlined"
        color="info"
        icon={<AccountCircleIcon />}
      /> */}

      <Chip
        label="employer"
        variant="outlined"
        color="secondary"
        icon={<AccountCircleIcon />}
      />
    </Stack>
  );
}
