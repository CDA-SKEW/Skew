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
import PersonIcon from "@mui/icons-material/Person";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
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
  const [msg, setMsg] = React.useState(false);
  const [user, setUser] = React.useState(false);
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
    if (msg === true) return <DeleteForm />;
    else return <div></div>;
  };

  const UserDeleteButton = () => {
    if (user === true) return <DeleteUser />;
    else return <div></div>;
  };

  /* Transformation d'une fonction en composant conditionel, 
  elle s'affiche sous une certaine consition*/
  function DeleteForm() {
    return (
      <div>
        <Divider sx={{ mb: 2 }} />
        <Typography
          sx={{ mb: 2, textAlign: "center" }}
          variant="h6"
          component="h2"
        >
          OU ALORS VOULEZ-VOUS SUPPRIMER CE MESSAGE ?
        </Typography>
        <Typography
          gutterBottom
          component="span"
          variant="body2"
          color="text.primary"
        >
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
          magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
          ullamcorper nulla non metus auctor fringilla.
        </Typography>
        <Typography>
          <DialogActions>
            <Stack spacing={2} direction="row" sx={{ m: 4 }}>
              <Button
                autoFocus
                variant="outlined"
                color="error"
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
            </Stack>
          </DialogActions>
        </Typography>
      </div>
    );
  }

  function DeleteUser() {
    return (
      <div>
        <Divider sx={{ mb: 2 }} />
        <Typography
          sx={{ mb: 2, textAlign: "center" }}
          variant="h6"
          component="h2"
        >
          OU ALORS VOULEZ-VOUS SUPPRIMER CET UTILISATEUR ?
        </Typography>
        <Typography
          gutterBottom
          component="span"
          variant="body2"
          color="text.primary"
        >
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
          magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
          ullamcorper nulla non metus auctor fringilla.
        </Typography>
        <Typography>
          <DialogActions>
            <Stack spacing={2} direction="row" sx={{ m: 4 }}>
              <Button
                autoFocus
                variant="outlined"
                color="error"
                onClick={() => dispatch(deleteUser(id.row.id))}
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
            </Stack>
          </DialogActions>
        </Typography>
      </div>
    );
  }

  /*--------------Components Chips + Modals------------*/

  return (
    <Stack direction="row" spacing={1}>
      {columnsBan && (
        // Bannir et supprimer un utilisateur
        <div>
          <Chip
            label="ban or delete user"
            color="error"
            sx={{ color: "#E57373" }}
            variant="outlined"
            // icon={<BlockIcon />}
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
              <Typography
                sx={{ mb: 2, textAlign: "center" }}
                variant="h6"
                component="h2"
              >
                VOULEZ-VOUS BANNIR CET UTILISATEUR ?
              </Typography>
              <Typography
                gutterBottom
                component="span"
                variant="body2"
                color="text.primary"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {/* Reply action Button */}
                <Stack spacing={2} direction="row" sx={{ m: 4 }}>
                  <Button
                    startIcon={<BlockIcon />}
                    autoFocus
                    variant="outlined"
                    color="warning"
                    onClick={() => dispatch(putUser(id.row.id))}
                  >
                    Bannir
                  </Button>
                  <Button
                    startIcon={<PersonIcon />}
                    autoFocus
                    variant="outlined"
                    color="error"
                    // Déclenche l'action de la constante CheckDelete
                    onClick={(e) => setUser(user === true ? false : true)}
                  >
                    Supprimer
                  </Button>
                </Stack>
                {/* Appel de la condition */}
                {UserDeleteButton()}
              </Typography>
            </Box>
          </Modal>
        </div>
      )}

      {columnsDeleteJob && (
        // Supprimer un emploi
        <div>
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
        </div>
      )}

      {columnsAddMessage && (
        //  Répondre à un message ou le supprimer
        <div>
          <Chip
            label="reply or delete message"
            color="error"
            sx={{ color: "#E57373" }}
            variant="outlined"
            // icon={<ReplyIcon />}
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
              <Typography  variant="h5" component="h2">
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
                    startIcon={<MessageIcon />}
                    autoFocus
                    variant="outlined"
                    color="error"
                    // Déclenche l'action de la constante CheckDelete
                    onClick={(e) => setMsg(msg === true ? false : true)}
                  >
                    Supprimer
                  </Button>
                </Stack>
                {/* Appel de la condition */}
                {CheckDelete()}
              </Typography>
            </Box>
          </Modal>
        </div>
      )}
    </Stack>
  );
}
