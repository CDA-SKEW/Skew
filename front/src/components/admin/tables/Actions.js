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
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import MessageIcon from "@mui/icons-material/Message";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";

/*------------Export function-------------*/

export default function DeletableChips(props) {
  // Transmettre les données du STORE avec dispatch (crud)
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [more, setMore] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /*------------MODALS-------------*/

  // Modal Style Messages
  // const style = {
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   width: 400,
  //   bgcolor: "background.paper",
  //   border: "1px solid #161C24",
  //   boxShadow: 24,
  //   p: 4,
  //   borderRadius: 12,
  // };

  // Modal Style General
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  // Modal Style Messages
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

  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

  /*---------------------------------------------*/

  // Boolean actions operators
  const {
    columnsBan,
    columnsDeleteUser,
    columnsDeleteJob,
    // columnsDeleteMessage,
    columnsAddMessage,
    id,
  } = props;

  /* Condition de la fonction: si more est = à true alors 
  retourner le component DeleteForm sinon retourner div vide */
  const CheckDelete = () => {
    if (more === true) return <DeleteForm />;
    else return <div></div>;
  };

  /* Transformation d'une fonction en composant conditionel, 
  elle s'affiche sous une certaine consition*/
  function DeleteForm() {
    return (
      <Box>
        <Typography
          sx={{ mb: 2, textAlign: "center" }}
          variant="h6"
          component="h2"
        >
          OU ALORS VOULEZ-VOUS SUPPRIMER CE MESSAGE ?
        </Typography>
        <Typography gutterBottom>
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
          magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
          ullamcorper nulla non metus auctor fringilla.
        </Typography>
        <Typography>
          <DialogActions>
            <Button
              autoFocus
              variant="outlined"
              color="warning"
              onClick={() => dispatch(deleteMessage(id.row.id))}
            >
              OUI
            </Button>
            <Button
              autoFocus
              variant="outlined"
              color="success"
              onClick={handleClose}
            >
              NON
            </Button>
          </DialogActions>
        </Typography>
      </Box>
    );
  }

  /*--------------Components Chips + Modals------------*/

  return (
    <Stack direction="row" spacing={1}>
      {columnsBan && (
        // Bannir un utilisateur
        <Box>
          {/* MODAL open via Chip */}
          <Chip
            label="ban"
            color="warning"
            variant="outlined"
            icon={<BlockIcon />}
            onClick={handleOpen}
          ></Chip>
          {/* Modal BAN USER*/}
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            >
              VOULEZ-VOUS BANNIR CET UTILISATEUR ?
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button
                autoFocus
                variant="contained"
                color="warning"
                onClick={() => dispatch(putUser(id.row.id))}
              >
                OUI
              </Button>
              <Button
                autoFocus
                variant="contained"
                color="success"
                onClick={handleClose}
              >
                NON
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </Box>
      )}

      {columnsDeleteUser && (
        // Supprimer un utilisateur
        <Box>
          {/* MODAL open via Chip */}
          <Chip
            label="delete"
            color="error"
            variant="outlined"
            icon={<DeleteIcon />}
            onClick={handleOpen}
          ></Chip>
          {/* Modal DELETE USER */}
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            >
              VOULEZ-VOUS SUPPRIMER CET UTILISATEUR ?
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button
                autoFocus
                variant="contained"
                color="warning"
                onClick={() => dispatch(deleteUser(id.row.id))}
              >
                OUI
              </Button>
              <Button
                autoFocus
                variant="contained"
                color="success"
                onClick={handleClose}
              >
                NON
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </Box>
      )}

      {columnsDeleteJob && (
        // Supprimer un emploi
        <Box>
          {/* MODAL open via Chip */}
          <Chip
            label="delete"
            color="error"
            variant="outlined"
            icon={<DeleteIcon />}
            onClick={handleOpen}
          ></Chip>
          {/* Modal DELETE JOB */}
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            >
              VOULEZ-VOUS SUPPRIMER CET EMPLOI ?
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button
                autoFocus
                variant="outlined"
                color="warning"
                onClick={() => dispatch(deleteJob(id.row.id))}
              >
                OUI
              </Button>
              <Button
                autoFocus
                variant="outlined"
                color="success"
                onClick={handleClose}
              >
                NON
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </Box>
      )}
      {columnsAddMessage && (
        //  Répondre à un message
        <Box>
          <Chip
            label="reply"
            color="success"
            variant="outlined"
            icon={<ReplyIcon />}
            onClick={handleOpen}
          ></Chip>
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
                  defaultValue={id.row.fullName}
                />
                <TextField
                  fullWidth
                  sx={{ mt: 5 }}
                  required
                  id="outlined-required"
                  label="subject"
                  defaultValue={id.row.subject}
                />
                <TextField
                  fullWidth
                  sx={{ mt: 5 }}
                  required
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                  defaultValue=""
                />
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {/* Reply action Button */}
                <Stack spacing={2} direction="row" sx={{ m: 4 }}>
                  <Button
                    variant="outlined"
                    color="success"
                    endIcon={<SendIcon />}
                    onClick={() => dispatch(addMessage(id.row.id))}
                  >
                    Envoyer
                  </Button>
                  <Button
                    endIcon={<MessageIcon />}
                    autoFocus
                    variant="outlined"
                    color="warning"
                    // Déclenche l'action de la constante CheckDelete
                    onClick={(e) => setMore(more === true ? false : true)}
                  >
                    Supprimer
                  </Button>
                </Stack>
                {/* Appel de la condition */}
                {CheckDelete()}
              </Typography>
            </Box>
          </Modal>
        </Box>
      )}
    </Stack>
  );
}
