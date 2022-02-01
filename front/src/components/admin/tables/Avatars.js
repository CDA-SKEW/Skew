/*------------MUI Imports-------------*/

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

/*------------Export function-------------*/

export default function ImageAvatars(props) {
  const { avatar } = props;
  // console.log("image", avatar);
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="avatar" src={avatar.row.avatar} />
    </Stack>
  );
}
