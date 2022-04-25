import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import {
  Button,
  Grid,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import { putFormProfilUser } from "store/actions/EmployerActions";
import FormPasswordChange from "components/FormPasswordChange";
import SnackbarMessage from "components/SnackbarMessage";
import { useNavigate } from "react-router-dom";


export default function FormPersonalEmployer(props) {
  const {
    dataProfilUser,
    profilPersonnalNotEditabled,
    buttonProfilPersonnalVisible,
  } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // declaration des constantes pour le SnackbarMessage
  const [openModal, setOpenModal] = useState(false);
  const messageFlash = useSelector((state) => state.employer.flash);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (messageFlash.length>=0) {
    setMessage(messageFlash);  
    }
  }, [messageFlash]);

  // constante generale pour le formulaire
  const [editPassword, setEditPassword] = React.useState(false);
  const [mail, setMail] = useState("");


  // fonction set des useState
  const setUseState = () => {
    setEditPassword(false);
    setMail(dataProfilUser.mail);
  };

  // useEffect pour donner les datas par défault au form qui est à l'ecoute de l'etat du boton etidable dans parent
  useEffect(() => {
    if (profilPersonnalNotEditabled===true) {
    setEditPassword(false);
    setMail(dataProfilUser.mail);}
  }, [profilPersonnalNotEditabled,dataProfilUser]);

  // useEffect pour donner les datas par défault au form qui est à l'écoute du state du store dataProfilUser
  useEffect(() => {
    setMail(dataProfilUser.mail);   
  }, [dataProfilUser]);


  //constante pour mettre les input soit readOnly soit editable
  const inputProps = {
    readOnly: profilPersonnalNotEditabled,
    disabled: profilPersonnalNotEditabled,
  };

  // constante pour affiche les boutons si form editable
  let displayProps = buttonProfilPersonnalVisible;
  let displayButton;

  if (displayProps === true) {
    displayButton = "";
  } else {
    displayButton = "none";
  }

  // fonction pour remettre le formulaire par défaut
  const cancelFormPersonalProfil = () => {
    setUseState();
  };

  // Fonction pour l'envoi du formulaire
  const sendFormPersonalProfil = async (e) => {
    //empeche le formunliare d'etre submiter
    e.preventDefault();

    const dataFormPersonalEmployer = {
      user_id: dataProfilUser.user_id,
      oldmail: dataProfilUser.mail,
      mail,
    };


    //passage de la variable pour SnackbarMessage à false apres 2 secondes et fermeture dialogue
    setOpenModal(true);
    setTimeout(function () {
      setOpenModal(false);
      navigate("/Employer/dashboard")
    }, 2000);
    await dispatch(putFormProfilUser(dataFormPersonalEmployer));

  };

  return (
    <Box>
      <Box component="form" onSubmit={(e) => sendFormPersonalProfil(e)}>
        <Grid
          container
          rowSpacing={1}
          direction="row-reverse"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Grid item md={6} xs={12} sm={12}></Grid>

          <Grid item md={6} xs={12} sm={12}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={10} marginBottom={1}>
                <TextField
                  required
                  label="Adresse mail:"
                  fullWidth
                  variant="outlined"
                  size="small"
                  type="email"
                  value={mail || ""}
                  InputProps={{ inputProps }}
                  onChange={(e) => setMail(e.target.value)}
                />
              </Grid>
            </Grid>

            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid
                item
                xs={10}
                display={"flex"}
                justifyContent={{ xs: "center", md: "end" }}
                padding={2}
              >
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    bgcolor: "#DC143C",
                    color: "white",
                    m: 1,
                    display: displayButton,
                  }}
                  startIcon={<TaskAltIcon sx={{ display: { xs: "none", sm: "block" } }} />}
                  type="submit"
                >
                  Modifier
                </Button>

                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    bgcolor: "gray",
                    color: "white",
                    m: 1,
                    display: displayButton,
                  }}
                  startIcon={<HighlightOffIcon sx={{ display: { xs: "none", sm: "block" } }} />}
                  onClick={(e) => cancelFormPersonalProfil()}
                >
                  Annuler
                </Button>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Grid item md={6} xs={12} sm={12}>
        <Box
          display={"flex"}
          justifyContent={"center"}
        >
          <Button
            variant="contained"
            size="small"
            sx={{
              my: 1,
              display: displayButton,
            }}
            onClick={(e) => setEditPassword(!editPassword)}
          >
            Edit password
          </Button>
        </Box>
        {editPassword && <FormPasswordChange displayButton={true} dataProfilUser={dataProfilUser} />}
      </Grid>

              {openModal && (
        <SnackbarMessage message={message} open={openModal} />
      )}

    </Box>
  );
}
