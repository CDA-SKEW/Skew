/*------------MUI Imports-------------*/

import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import {
  deleteJob,
  deleteUser,
  deleteMessage,
  replyMessage,
  putUser,
  putBadge,
  verifUser,
} from "store/actions/AdminActions";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import InfoIcon from "@mui/icons-material/Info";
import VerifiedIcon from "@mui/icons-material/Verified";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";

/*------------Export function-------------*/

export default function DeletableChips(props) {
  // console.log("props row table message", props);
  // Transmettre les données du STORE avec dispatch (crud)
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [msg, setMsg] = React.useState(false);
  const [user, setUser] = React.useState(false);
  const [form, setForm] = React.useState({ ...props.id.row });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  /*------------MODALS-------------*/

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
    columnsVerif,
    columnsBadge,
    columnsBan,
    columnsDeleteJob,
    columnsAddMessage,
    id,
  } = props;

  /* Transformation d'une fonction en composant conditionel, 
  elle s'affiche sous une certaine consition */

  // Message
  function DeleteForm() {
    return (
      <Box>
        <Divider sx={{ mb: 2 }} />
        <Typography
          sx={{ mb: 2, textAlign: "center", fontSize: "20px", fontWeight: 700 }}
          variant="h6"
          component="h2"
        >
          SUPPRIMER CE MESSAGE ?
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
        <Typography component="span">
          <DialogActions>
            <Stack spacing={10} direction="row" sx={{ m: 4 }}>
              <Button
                sx={{ color: "#fff", border: "1px solid #33c863" }}
                variant="outlined"
                color="primary"
                endIcon={<SendIcon />}
                onClick={() => dispatch(deleteMessage(id.row.id))}
              >
                OUI
              </Button>
              <Button
                sx={{ border: "1px solid #33c863" }}
                variant="contained"
                startIcon={<CancelIcon />}
                color="primary"
                onClick={handleClose}
              >
                NON
              </Button>
            </Stack>
          </DialogActions>
        </Typography>
      </Box>
    );
  }

  // User
  function DeleteUser() {
    return (
      <Box>
        <Divider sx={{ mb: 2 }} />
        <Typography
          sx={{ mb: 2, textAlign: "center", fontSize: "20px", fontWeight: 700 }}
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
        <Typography component="span">
          <DialogActions>
            <Stack spacing={10} direction="row" sx={{ m: 4 }}>
              <Button
                sx={{ color: "#fff", border: "1px solid #33c863" }}
                variant="outlined"
                startIcon={<CheckCircleOutlineIcon />}
                color="primary"
                onClick={() => dispatch(deleteUser(id.row.id))}
              >
                OUI
              </Button>
              <Button
                sx={{ border: "1px solid #33c863" }}
                variant="contained"
                startIcon={<CancelIcon />}
                color="primary"
                onClick={handleClose}
              >
                NON
              </Button>
            </Stack>
          </DialogActions>
        </Typography>
      </Box>
    );
  }

  /* Condition de la fonction: si more est = à true alors 
  retourner le component DeleteForm sinon retourner div vide */

  // Message
  const CheckDelete = () => {
    if (msg === true) return <DeleteForm />;
    else return <Box></Box>;
  };

  // User
  const UserDeleteButton = () => {
    if (user === true) return <DeleteUser />;
    else return <Box></Box>;
  };

  /*-----------------------------------------------------*/

  // MESSAGE: handlechange = Pour changer la valeur d'un input
  const handleChange = (prop) => (event) => {
    // console.log("handleInput", prop, event.target.value);
    // Prop = la key du oneChange
    setForm({ ...form, [prop]: event.target.value });
  };
  const submitReplyMessage = (data) => {
    // console.log("form message", data);
    // console.log(form, props);
    dispatch(replyMessage(form));
  };

  /*--------------Components Chips + Modals------------*/

  return (
    <Stack direction="row" spacing={1}>
      {columnsBan && (
        // Bannir et supprimer un utilisatcolumnsBanur
        <Box>
          {/* <Chip
            label="ban or delete user"
            color="info"
            icon={<InfoIcon />}
            variant="contained"
            onClick={handleOpen}
          ></Chip> */}
          <Chip
            label={id.row.isBanned === 1 ? "banned" : "not banned"}
            variant="outlined"
            color={id.row.isBanned === 1 ? "warning" : "success"}
            icon={
              id.row.isBanned === 1 ? <RemoveCircleIcon /> : <CheckCircleIcon />
            }
            onClick={handleOpen}
          />
          <Modal
           fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              {/* Form */}
              <Typography
                sx={{
                  mb: 2,
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: 700,
                }}
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
              <Typography
                component="span"
                id="modal-modal-description"
                sx={{ mt: 2 }}
              >
                {/* Update action Button */}
                <Stack spacing={2} direction="row" sx={{ m: 4 }}>
                  <Button
                    autoFocus
                    sx={{ color: "#fff", border: "1px solid #33c863" }}
                    variant="outlined"
                    color="primary"
                    startIcon={<RemoveCircleIcon />}
                    onClick={() => dispatch(putUser(id.row.id))}
                  >
                    Bannir
                  </Button>
                  <Button
                    autoFocus
                    startIcon={<PersonIcon />}
                    sx={{ border: "1px solid #33c863" }}
                    variant="contained"
                    color="primary"
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
        </Box>
      )}

      {columnsVerif && (
        // Vérifier un user
        <Box>
          {/* <Chip
            label="ban or delete user"
            color="info"
            icon={<InfoIcon />}
            variant="contained"
            onClick={handleOpen}
          ></Chip> */}
          <Chip
            label={id.row.isVerified === 1 ? "verified" : "not verfied"}
            variant="outlined"
            color={id.row.isVerified === 1 ? "primary" : "error"}
            icon={
              id.row.isVerified === 1 ? (
                <CheckCircleIcon />
              ) : (
                <RemoveCircleIcon />
              )
            }
            onClick={handleOpen}
          />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              {/* Form */}
              <Typography
                sx={{
                  mb: 2,
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: 700,
                }}
                variant="h6"
                component="h2"
              >
                CHECKER CET UTILISATEUR ?
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
              <Typography
                component="span"
                id="modal-modal-description"
                sx={{ mt: 2 }}
              >
                {/* Update action Button */}
                <Stack spacing={10} direction="row" sx={{ m: 4 }}>
                  <Button
                    sx={{ color: "#fff", border: "1px solid #33c863" }}
                    variant="outlined"
                    startIcon={<CheckCircleOutlineIcon />}
                    color="primary"
                    // startIcon={<RemoveCircleIcon />}
                    onClick={() => dispatch(verifUser(id.row.id))}
                  >
                    Verif
                  </Button>
                  <Button
                    sx={{ border: "1px solid #33c863" }}
                    variant="contained"
                    startIcon={<CancelIcon />}
                    color="primary"
                    onClick={handleClose}
                  >
                    NON
                  </Button>
                </Stack>
              </Typography>
            </Box>
          </Modal>
        </Box>
      )}

      {columnsBadge && (
        // Badge User
        <Box>
          <Chip
            label={id.row.badge === 1 ? "badged" : "not badged"}
            variant="contained"
            color={id.row.badge === 1 ? "primary" : "default"}
            onClick={handleOpen}
            icon={<VerifiedIcon />}
          />
          <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                {/* Form */}
                <Typography
                  sx={{
                    mb: 2,
                    textAlign: "center",
                    fontSize: "30px",
                    fontWeight: 700,
                  }}
                  variant="h6"
                  component="h2"
                >
                  BADGER CET UTILISATEUR ?
                </Typography>
                <Typography
                  gutterBottom
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </Typography>
                <Typography
                  component="span"
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                >
                  {/* Update action Button */}
                  <Stack spacing={10} direction="row" sx={{ m: 5 }}>
                    <Button
                      sx={{ color: "#fff", border: "1px solid #33c863" }}
                      variant="outlined"
                      startIcon={<VerifiedIcon />}
                      color="primary"
                      onClick={() => dispatch(putBadge(id.row.id))}
                    >
                      Badge
                    </Button>
                    <Button
                      sx={{ border: "1px solid #33c863" }}
                      variant="contained"
                      startIcon={<CancelIcon />}
                      color="primary"
                      onClick={handleClose}
                    >
                      NON
                    </Button>
                  </Stack>
                </Typography>
              </Box>
            </Modal>
          </Dialog>
        </Box>
      )}

      {columnsDeleteJob && (
        // Supprimer un emploi
        <Box>
          <Chip
            label="delete"
            color="error"
            variant="outlined"
            icon={<DeleteIcon />}
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
                sx={{
                  mb: 2,
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: 700,
                }}
                variant="h6"
                component="h2"
              >
                VOULEZ-VOUS SUPPRIMER CET EMPLOI ?
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
              <Typography
                component="span"
                id="modal-modal-description"
                sx={{ mt: 2 }}
              >
                {/* Reply action Button */}
                <Stack spacing={10} direction="row" sx={{ m: 8 }}>
                  <Button
                    sx={{ color: "#fff", border: "1px solid #33c863" }}
                    variant="outlined"
                    color="primary"
                    startIcon={<DeleteIcon />}
                    onClick={() => dispatch(deleteJob(id.row.offer_id))}
                  >
                    OUI
                  </Button>
                  <Button
                    sx={{ border: "1px solid #33c863" }}
                    variant="contained"
                    startIcon={<CancelIcon />}
                    color="primary"
                    onClick={handleClose}
                  >
                    NON
                  </Button>
                </Stack>
              </Typography>
            </Box>
          </Modal>
        </Box>
      )}

      {columnsAddMessage && (
        //  Répondre à un message ou le supprimer
        <Box>
          <Chip
            label="reply or delete message"
            color="info"
            icon={<InfoIcon />}
            variant="contained"
            onClick={handleOpen}
          ></Chip>
          <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                {/* Form */}
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{
                    mb: 2,
                    textAlign: "center",
                    fontSize: "20px",
                    fontWeight: 700,
                  }}
                >
                  REPONDRE A UN MESSAGE
                  <TextField
                    disabled
                    fullWidth
                    sx={{ mt: 5 }}
                    required
                    id="outlined-required"
                    label="replyTo"
                    defaultValue={id.row.mail}
                  />
                  <TextField
                    fullWidth
                    sx={{ mt: 5 }}
                    required
                    id="outlined-required"
                    onChange={handleChange(`sujet`)}
                    label="Objet"
                    defaultValue={id.row.sujet}
                  />
                  <TextField
                    disabled
                    fullWidth
                    sx={{ mt: 5 }}
                    required
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    rows={4}
                    defaultValue={id.row.message}
                  />
                  {/* Reply TextField */}
                  <TextField
                    fullWidth
                    sx={{ mt: 5 }}
                    required
                    id="outlined-multiline-static"
                    label="Reply"
                    multiline
                    onChange={handleChange(`reply`)}
                    rows={4}
                    defaultValue=""
                  />
                </Typography>
                <Typography
                  component="span"
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                >
                  {/* Reply action Button */}
                  <Stack spacing={5} direction="row" sx={{ m: 4 }}>
                    <Button
                      sx={{ color: "#fff", border: "1px solid #33c863" }}
                      variant="outlined"
                      color="primary"
                      endIcon={<SendIcon />}
                      onClick={() => submitReplyMessage(form)}
                    >
                      Envoyer
                    </Button>
                    <Button
                      startIcon={<MessageIcon />}
                      sx={{ border: "1px solid #33c863" }}
                      variant="contained"
                      color="primary"
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
          </Dialog>
        </Box>
      )}
    </Stack>
  );
}
