import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";
import SendIcon from "@mui/icons-material/Send";
import { Box } from "@mui/system";
import { postMessageCandidate } from "store/actions/EmployerActions";
import { useDispatch, useSelector } from "react-redux";
import SnackbarMessage from "components/SnackbarMessage";

export default function ModalMessageCandidate(props) {
  const { onClose, open, offer, row, dataProfilUser } = props;
  const dispatch = useDispatch();
  const messageEmployer = useSelector((state) => state.employer.flash);
  const [textFlash, setTextFlash] = useState(messageEmployer);

  useEffect(() => {
    setTextFlash(messageEmployer)
  }, [messageEmployer]);

  // declaration des constantes pour le SnackbarMessage
  const [openModal, setOpenModal] = useState(false);

  const [form, setForm] = useState({ ...row });

  const [textMessage, setTextMessage] = useState();

  const handleCancel = () => {
    setTextMessage("");
    onClose();
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    const dataFormMessageCandidate = {
      user_id: offer.user_id,
      mailEmployeur: dataProfilUser.mail,
      subject: "Offres n°" + offer.offer_id + " - " + offer.title,
      name: form.name,
      lastName: form.lastName,
      phone: form.phone,
      mail: form.mail,
      textMessage,
    };
    setTextMessage("");

    //passage de la variable pour SnackbarMessage à false apres 2 secondes et fermeture dialogue*
    setTimeout(function () {
      setOpenModal(true);
    }, 1000);
 
    setTimeout(function () {
      setOpenModal(false);
      onClose();
    }, 3000);
    await dispatch(postMessageCandidate(dataFormMessageCandidate));
  };
  //
  return (
    <Dialog maxWidth="sm" open={open}>
      <Box component="form" onSubmit={(e) => handleSendMessage(e)}>
        <DialogTitle
          sx={{
            bgcolor: "#004F98",
            color: "white",
            textAlign: "center",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Message au candidat{" "}
          <Button onClick={handleCancel}>
            <CancelTwoToneIcon sx={{ fontSize: 40, color: "white" }} />
          </Button>
        </DialogTitle>
        <DialogContent dividers>
          <Grid container rowSpacing={2}>
            {Object.entries(row).map((arr, index) => {
              const key = arr[0];
              if (key === "offre_id") return;
              if (key === "user_id") return;
              if (key === "address") return;
              if (key === "zipCode") return;
              if (key === "town") return;
              if (key === "statut") return;
              if (key === "cvCandidat") return;
              else {
                return (
                  <Grid key={index} item xs={12} sm={12} md={12}>
                    <TextField
                      fullWidth
                      InputProps={{ readOnly: true }}
                      id={`outlined-adornment-${key}`}
                      value={form[`${key}`]}
                      label={key}
                    />
                  </Grid>
                );
              }
            })}

            <Grid item xs={12} sm={12} md={12}>
              <TextField
                fullWidth
                InputProps={{ readOnly: true }}
                label="Objet"
                variant="outlined"
                size="small"
                value={"Offres n°" + offer.offer_id + " - " + offer.title}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <TextField
                required
                fullWidth
                label="Message"
                multiline
                rows={6}
                variant="outlined"
                size="small"
                value={textMessage}
                onChange={(e) => {
                  setTextMessage(e.target.value);
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button
            variant="outlined"
            endIcon={<SendIcon />}
            sx={{ bgcolor: "#ABC4FF", color: "black" }}
            type="submit"
          >
            Envoyer
          </Button>
        </DialogActions>
      </Box>

      {openModal && (
        <SnackbarMessage message={textFlash} open={openModal} />
      )}
    </Dialog>
  );
}
