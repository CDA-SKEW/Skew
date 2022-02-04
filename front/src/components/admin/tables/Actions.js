/*------------MUI Imports-------------*/

import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import {
  deleteJob,
  deleteUser,
  deleteMessage,
  addMessage,
  putUser,
} from "store/actions/AdminActions";
import DeleteIcon from "@mui/icons-material/Delete";
import BlockIcon from "@mui/icons-material/Block";
import ReplyIcon from "@mui/icons-material/Reply";

/*------------Export function-------------*/

export default function DeletableChips(props) {
  const {
    columnsBan,
    columnsDeleteUser,
    columnsDeleteJob,
    columnsDeleteMessage,
    columnsAddMessage,
    id,
  } = props;
  // console.log(columnsBan);
  // Transmettre les données du STORE avec dispatch (crud)
  const dispatch = useDispatch();

  /*--------------Components------------*/
  return (
    <Stack direction="row" spacing={1}>
      {columnsBan && (
        <Chip
          label="ban"
          color="warning"
          variant="outlined"
          icon={<BlockIcon />}
          onClick={() => dispatch(putUser(id.row.id))}
        />
      )}
      {columnsDeleteUser && (
        <Chip
          label="delete"
          color="error"
          variant="outlined"
          icon={<DeleteIcon />}
          onClick={() => dispatch(deleteUser(id.row.id))}
        />
      )}
      {columnsDeleteJob && (
        <Chip
          label="delete"
          color="error"
          variant="outlined"
          icon={<DeleteIcon />}
          onClick={() => dispatch(deleteJob(id.row.id))}
        />
      )}
      {columnsAddMessage && (
        <Chip
          label="reply"
          color="success"
          variant="outlined"
          icon={<ReplyIcon />}
          onClick={() => dispatch(addMessage(id.row.id))}
        />
      )}
      {columnsDeleteMessage && (
        <Chip
          label="delete"
          color="error"
          variant="outlined"
          icon={<DeleteIcon />}
          onClick={() => dispatch(deleteMessage(id.row.id))}
        />
      )}
    </Stack>
  );
}
