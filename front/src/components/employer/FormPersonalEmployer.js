import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { useDispatch } from "react-redux";
import { Box } from "@mui/system";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { putFormProfilEmployer } from "store/actions/EmployerActions";

export default function FormPersonalEmployer(props) {
  const {
    dataProfilEmployer,
    profilPersonnalNotEditabled,
    buttonProfilPersonnalVisible,
  } = props;
  // console.log("dataProfilEmployer", dataProfilEmployer);

  const dispatch = useDispatch();

  // constante generale pour le formulaire
  const [editPassword, setEditPassword] = React.useState(false);
  const [mail, setMail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkpassword, setCheckpassword] = useState(false);

  // useEffect pour donner les datas par défault au form qui est à l'écoute du state du store dataProfilEmployer
  useEffect(() => {
    // console.log("effect for useState form personnal employer");
    setMail(dataProfilEmployer.mail);
  }, [dataProfilEmployer]);

  // constante pour visualisation des differents mot de passe
  const [showOldPassword, setShowOldPassword] = React.useState(false);
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  // fonction pour la gestion des differents textField des mot de passe
  const handleClickShowPassword = (choice) => {
    // console.log(choice)
    if (choice === "oldPassword") setShowOldPassword(!showOldPassword);
    if (choice === "newPassword") setShowNewPassword(!showNewPassword);
    if (choice === "confirmPassword")
      setShowConfirmPassword(!showConfirmPassword);
  };

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
    // console.log("Cancel upload");
    setEditPassword(false);
    setMail(dataProfilEmployer.mail);
    setOldPassword("");
    setPassword("");
    setConfirmPassword("");
    setCheckpassword(false);
  };

  // Fonction pour l'envoi du formulaire
  const sendFormPersonalProfil = async (e) => {
    console.log("Form waitsend");
    //empeche le formunliare d'etre submiter
    // console.log("event", e)
    e.preventDefault();

    // ckeck si formulaire mot passe renseigné
    if (oldPassword !== "" && password !== "" && confirmPassword !== "") {
      // si oui, check si mot de passe correspondent
      if (password === confirmPassword) {
        const dataFormPersonalEmployer = {
          mail,
          oldPassword,
          password,
        };
        // console.log(
        //   "dataFormPersonalEmployer change all",
        //   dataFormPersonalEmployer
        // );
        setEditPassword(false);
        await dispatch(putFormProfilEmployer(dataFormPersonalEmployer));
      } else {
        setCheckpassword(true);
      }
      // si non, envoi du formulaire avec seulement le mail
    } else {
      const dataFormPersonalEmployer = {
        mail,
      };
      // // console.log(
      //   "dataFormPersonalEmployer change mail only",
      //   dataFormPersonalEmployer
      // );
      await dispatch(putFormProfilEmployer(dataFormPersonalEmployer));
    }
  };

  return (
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
            <Grid item xs={10} sx={{ mb: 1 }}>
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
          {editPassword && (
            <Grid
              container
              rowSpacing={1}
              justifyContent="center"
              alignItems="center"
              textAlign="center"
            >
              <Grid item xs={10}>
                <TextField
                  required
                  label="Ancien mot de passe"
                  fullWidth
                  variant="outlined"
                  size="small"
                  // value={oldPassword}
                  type={showOldPassword ? "text" : "password"}
                  value={oldPassword}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="oldPassword"
                          onClick={() => handleClickShowPassword("oldPassword")}
                          edge="end"
                        >
                          {showOldPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </Grid>

              <Grid item xs={10}>
                <TextField
                  required
                  label="Nouveau mot passe"
                  fullWidth
                  variant="outlined"
                  size="small"
                  type={showNewPassword ? "text" : "password"}
                  value={password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="password"
                          onClick={() => handleClickShowPassword("newPassword")}
                          edge="end"
                        >
                          {showNewPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>

              <Grid item xs={10}>
                <TextField
                  required
                  label="Confirme nouveau mot passe"
                  fullWidth
                  variant="outlined"
                  size="small"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="password"
                          onClick={() =>
                            handleClickShowPassword("confirmPassword")
                          }
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

                {checkpassword && (
                  <Typography variant="span" color="red">
                    Les deux mots de passe ne correspondent pas
                  </Typography>
                )}
              </Grid>
            </Grid>
          )}
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid
              item
              xs={10}
              sx={{
                p: 1,
                display: "flex",
                justifyContent: { xs: "center", md: "end" },
              }}
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
                startIcon={<TaskAltIcon />}
                type="submit"
              >
                Valider
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
                startIcon={<HighlightOffIcon />}
                onClick={(e) => cancelFormPersonalProfil()}
              >
                Annuler
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
