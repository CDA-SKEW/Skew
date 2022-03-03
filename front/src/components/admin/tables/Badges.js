/*------------MUI Imports-------------*/

import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { putBadge } from "store/actions/AdminActions";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import VerifiedIcon from "@mui/icons-material/Verified";
import CancelIcon from '@mui/icons-material/Cancel';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";

/*------------Export function-------------*/

export default function DeletableChips(props) {
  // console.log("props row table message", props);
  // Transmettre les données du STORE avec dispatch (crud)
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const [user, setUser] = React.useState(false);

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

  const { id } = props;

  /*--------------Components Chips + Modals------------*/

  return (
    <Stack direction="row" spacing={1}>
      <Box>
        <Chip
          label="badge"
          color="default"
          icon={<VerifiedIcon />}
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
                <Stack spacing={10} direction="row" sx={{ m: 5 }}>
                  <Button
                    sx={{ color: "#fff", border: "1px solid #33c863" }}
                    variant="outlined"
                    startIcon={<VerifiedIcon />}
                    color="primary"
                    onClick={() => dispatch(putBadge(id.row.badge))}
                  >
                    Badge
                  </Button>
                  <Button
                    sx={{  border: "1px solid #33c863" }}
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
    </Stack>
  );
}
