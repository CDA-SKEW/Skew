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
import SendIcon from "@mui/icons-material/Send";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

/*------------Export function-------------*/

export default function DeletableChips(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Modal Style
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #161C24",
    boxShadow: 24,
    p: 4,
    borderRadius: 12,
  };

  // Boolean action operators
  const {
    columnsBan,
    columnsDeleteUser,
    columnsDeleteJob,
    columnsDeleteMessage,
    columnsAddMessage,
    id,
  } = props;

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
        <>
          {/* Modal open via Chip */}
          <Chip
            label="reply"
            color="success"
            variant="outlined"
            icon={<ReplyIcon />}
            onClick={handleOpen}
          ></Chip>
          {/* Modal close*/}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              {/* Form */}
              <Typography id="modal-modal-title" variant="h5" component="h2">
                REPONDRE A UN MESSAGE
                <TextField
                  fullWidth
                  sx={{ mt: 5 }}
                  required
                  id="outlined-required"
                  label="To"
                  defaultValue="Nom complet"
                />
                <TextField
                  fullWidth
                  sx={{ mt: 5 }}
                  required
                  id="outlined-required"
                  label="subject"
                  defaultValue="Object"
                />
                <TextField
                  fullWidth
                  sx={{ mt: 5 }}
                  required
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                  defaultValue="Ton message"
                />
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {/* Reply action Button */}
                <Button
                  variant="contained"
                  color="success"
                  endIcon={<SendIcon />}
                  onClick={() => dispatch(addMessage(id.row.id))}
                >
                  Envoyer
                </Button>
              </Typography>
            </Box>
          </Modal>
        </>
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
