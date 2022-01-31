/*------------MUI Imports-------------*/

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

/*------------Export function-------------*/

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="avatar"
        src="https://img.search.brave.com/YAChonmMV6YUIBHQOKsUE6JGVUHhfgyC1wKEpiygEdk/rs:fit:736:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC81Yi84NC9iNC81/Yjg0YjQyMmY5OTdl/OGZiNzVmZDdiZWI5/MTY5ZTYwMy5qcGc"
      />
    </Stack>
  );
}
