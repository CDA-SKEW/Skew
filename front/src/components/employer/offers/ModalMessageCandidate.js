import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import SendIcon from '@mui/icons-material/Send';
import { Box } from "@mui/system";
import { postMessageCandidate } from "store/actions/EmployerActions";
import { useDispatch, useSelector } from "react-redux";
import SnackbarMessage from "components/SnackbarMessage";

export default function ModalMessageCandidate(props) {
  const dispatch = useDispatch();

  const messageEmployer = useSelector((state) => state.employer.flashs);
  // declaration des constantes pour le SnackbarMessage
  const [openModal, setOpenModal] = useState(false);

  const { onClose, open, offer, row } = props;
  // console.log("row, offer", row, offer)

  const [form, setForm] = useState({ ...row });
  // console.log("form", form)

  const [textMessage, setTextMessage] = useState();

  const handleCancel = () => {
    setTextMessage("")
    onClose();
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    const dataFormMessageCandidate = {
      name: form.name,
      lastName: form.lastName,
      tel: form.tel,
      mail: form.mail,
      textMessage
    };
    setTextMessage("")

    //passage de la varaiblesecondesSnackbarMessage à false apres 2 secondes et fermeture dialogue 
    setOpenModal(true)
    setTimeout(function () {
      setOpenModal(false);
      onClose();
    }, 2000);
    // console.log(dataFormMessageCandidate)
    await dispatch(postMessageCandidate(dataFormMessageCandidate));
  
  };
  // 
  return (

    <Dialog
      sx={{ "& .MuiDialog-paper": { width: "100%", maxHeight: "100%" } }}
      maxWidth="xs"
      open={open}
    >

      <Box component="form"
        onSubmit={(e) => handleSendMessage(e)}
      >
        <DialogTitle sx={{ bgcolor: "#004F98", textAlign: "center", display: "flex", justifyContent: "space-between", alignItems: "center" }} >
          Message au candidat <CancelTwoToneIcon sx={{ fontSize: 40, color: "white" }} onClick={handleCancel} />
        </DialogTitle>
        <DialogContent dividers>
          <Grid container rowSpacing={2}>

            {Object.entries(row).map((arr, index) => {
              const key = arr[0]
              if (key === "address") return;
              if (key === "zipCode") return;
              if (key === "town") return;
              if (key === "statut") return;
              if (key === "cvCandidat") return;
              else {
                // console.log("key",key)
                // console.log("index", index)
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
                )
              }

            })}

            <Grid item xs={12} sm={12} md={12}>
              <TextField
                fullWidth
                InputProps={{ readOnly: true }}
                label="Objet"
                variant="outlined"
                size="small"
                value={"Offres n°" + offer.number + " - " + offer.title}
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
          <Button variant="outlined" endIcon={<SendIcon />} sx={{ bgcolor: "#ABC4FF", color: "black" }} type="submit">Envoyer</Button>
        </DialogActions>
      </Box>

      {openModal && (
        <SnackbarMessage messageEmployer={messageEmployer} open={openModal} />)}
    </Dialog>


  );
}