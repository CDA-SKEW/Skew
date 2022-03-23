/*------------MUI Imports-------------*/

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { urlImg } from "utils/url";

/*------------Export function-------------*/

export default function ImageAvatars(props) {
  const { contactProfil } = props;
  // console.log("image", contactProfil);

  /*--------------Components------------*/

  return (
    <Stack direction="row">
      <Avatar alt="avatar" src={`${urlImg + contactProfil.row.avatar}`} />
    </Stack>
  );
}
