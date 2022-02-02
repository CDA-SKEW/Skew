import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import { useDispatch, useSelector } from "react-redux";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "50%",
  maxHeight: "50%",
});

export default function FormPersonalEmployer(editProfilPersonal) {

  // console.log("state button personam data", editProfilPersonal)

  const dataProfil = useSelector((state) => state.employer.dataProfil);
  // console.log("essai", dataProfil)

  const dispatch = useDispatch()
  const [stateInputDisable, setStateInputDisable] = useState(true);
  const [stateButtonVisible, setStateButtonVisible] = useState(editProfilPersonal);
  const [mail, setMail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");



  const cancelFormPersonalProfil = () => {
    // console.log("Cancel upload");
    setMail(dataProfil.mail);
    setpassword("")
    setConfirmPassword("")
    // setStateButtonVisible("none")
    // setStateInputDisable(true)

  };

  const sendFormPersonalProfil = async (e) => {
    console.log("Form waitsend");
    //empeche le formunliare d'etre submiter
    // console.log("event", e)
    e.preventDefault();

    const dataFormPersonalEmployer = {
      mail,
      password,
    };
    console.log("dataFormPersonalEmployer", dataFormPersonalEmployer);

    // await dispatch(postFormProfilEmployer(dataFormPersonnalEmployerr))
  };

  return (

    <form
      onSubmit={(e) => sendFormPersonalProfil(e)}
    >

      <Grid
        container
        rowSpacing={1}
        direction="row-reverse"
        justifyContent="center"
        alignItems="center"
        textAlign="center"

      >

        <Grid item md={6} xs={12} sm={12}>
        </Grid>


        <Grid item md={6} xs={12} sm={12}>
          <Grid container justifyContent="center" alignItems="center" spacing={2}>

            <Grid item xs={10}>
              <TextField
                required
                label="Adresse mail:"
                fullWidth
                variant="outlined"
                size="small"
                type="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </Grid>

            <Grid item xs={10}>
              <TextField
                required
                label="Ancien mot de passe"
                fullWidth
                variant="outlined"
                size="small"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </Grid>

            <Grid item xs={10}>
              <TextField
                required
                label="Nouveau mot passe"
                fullWidth
                variant="outlined"
                size="small"
                value={password}
                // onChange={(e) => setpassword(e.target.value)}
              />
            </Grid>

            <Grid item xs={10}>
              <TextField
                required
                label="Confirme nouveau mot passe"
                fullWidth
                variant="outlined"
                size="small"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Grid>


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
                sx={{ bgcolor: "#DC143C", color: "white", m: 1, display: editProfilPersonal }}
                type="submit"
              >
                Valider
              </Button>

              <Button
                variant="contained"
                size="small"
                sx={{ bgcolor: "gray", color: "white", m: 1, display: editProfilPersonal }}
                onClick={(e) => cancelFormPersonalProfil()}
              >
                Annuler
              </Button>
            </Grid>
          </Grid>
        </Grid>



      </Grid>
    </form>
  );
}
