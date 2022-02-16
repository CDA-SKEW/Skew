import React, { useState } from "react";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { putFormProfilUserPw } from "store/actions/EmployerActions";

export default function FormPasswordChange(props) {
  const { displayButton, dataProfilUser} = props;

  const dispatch = useDispatch();

  // constante pour visualisation des differents mot de passe
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkpassword, setCheckpassword] = useState(false);

  // fonction pour la gestion des differents textField des mot de passe
  const handleClickShowPassword = (choice) => {
    // console.log(choice)
    if (choice === "oldPassword") setShowOldPassword(!showOldPassword);
    if (choice === "newPassword") setShowNewPassword(!showNewPassword);
    if (choice === "confirmPassword")
      setShowConfirmPassword(!showConfirmPassword);
  };

  // Fonction pour l'envoi du formulaire
  const sendFormPassword = async (e) => {
    // console.log("Form waitsend");
    //empeche le formunliare d'etre submiter
    // console.log("event", e)  
    e.preventDefault();

    // check si mot de passe correspondent
    if (password === confirmPassword) {
      const dataFormPersonalEmployer = {
        user_id:dataProfilUser.user_id,
        mail:dataProfilUser.mail,
        oldPassword,  
        password,
      };
      // console.log(
      //   "dataFormPersonalEmployer change password",
      //   dataFormPersonalEmployer
      // );
      await dispatch(putFormProfilUserPw(dataFormPersonalEmployer));

      setOldPassword("");
      setPassword("");
      setConfirmPassword("");
      setCheckpassword(false);
    } else {
      setCheckpassword(true);
    }
  };

  // fonction pour remettre le formulaire par défaut
  const cancelFormPassword = () => {
    // console.log("Cancel upload");
    setOldPassword("");
    setPassword("");
    setConfirmPassword("");
    setCheckpassword(false);
  };

  return (
    <Box component="form" onSubmit={(e) => sendFormPassword(e)}>
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
                    onClick={() => handleClickShowPassword("confirmPassword")}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
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

        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid
            item
           xs={10}
            padding={1}
            display={"flex"}
            justifyContent={{ xs: "center", md: "end" }}
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
              type="submit"
              startIcon={<TaskAltIcon sx={{display:{xs:"none", sm:"block"}}}/>}
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
              startIcon={<HighlightOffIcon sx={{display:{xs:"none", sm:"block"}}} />}
              onClick={(e) => cancelFormPassword()}
            >
              Annuler
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
