/*------------MUI Imports-------------*/

import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import {
  deleteJob,
  deleteUser,
  deleteMessage,
  putUser,
} from "store/actions/AdminActions";
import DeleteIcon from "@mui/icons-material/Delete";
import BlockIcon from "@mui/icons-material/Block";

/*------------Export function-------------*/

export default function DeletableChips(props) {
  const {
    columnsBan,
    columnsDeleteUser,
    columnsDeleteJob,
    columnsDeleteMessage,
    id,
  } = props;
  // console.log(columnsBan);
  // Transmettre les données du STORE avec dispatch (crud)
  const dispatch = useDispatch();
  // const handleClick = () => {
  //   dispatch(putUser(id));
  // };
  // const handleDelete = () => {
  //   // dispatch(deleteUser(id));
  //   // dispatch(deleteJob(id));
  //   // dispatch(deleteMessage(id));
  // };

  /*--------------Components------------*/
  return (
    <Stack direction="row" spacing={1}>
      {columnsBan && (
        <Chip
          label="ban"
          color="warning"
          variant="outlined"
          icon={<BlockIcon />}
          onClick={() => dispatch(putUser(id))}
        />
      )}
      {columnsDeleteUser && (
        <Chip
          label="delete"
          color="error"
          variant="outlined"
          icon={<DeleteIcon />}
          onClick={() => dispatch(deleteUser(id))}
        />
      )}
      {columnsDeleteJob && (
        <Chip
          label="delete"
          color="error"
          variant="outlined"
          icon={<DeleteIcon />}
          onClick={() => dispatch(deleteJob(id))}
        />
      )}
      {columnsDeleteMessage && (
        <Chip
          label="delete"
          color="error"
          variant="outlined"
          icon={<DeleteIcon />}
          onClick={() => dispatch(deleteMessage(id))}
        />
      )}
    </Stack>
  );
}
