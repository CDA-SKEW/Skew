/*------------MUI Imports-------------*/
import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import moment from "moment";

/*------------Export function-------------*/
export default function NativePickers(props) {
  const { user } = props;

  /*--------------Components------------*/
  return (
    <Stack component="form">
      <TextField
        defaultValue={moment.utc(user.row.date_create).format("DD/MM/YYYY")}
        sx={{ width: 110}}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Stack>
  );
}
