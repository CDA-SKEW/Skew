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

export default function FormPersonnalEmployer(editProfilPersonal) {

  console.log("state button personam data", editProfilPersonal)

  const dataProfil = useSelector((state) => state.employer.dataProfil);
  // console.log("essai", dataProfil)

  const dispatch = useDispatch()
  const [stateInputDisable, setStateInputDisable] = useState(true);
  const [stateButtonVisible, setStateButtonVisible] = useState(editProfilPersonal);
  const [adressMail, setAdressMail] = useState(dataProfil.adressMail);
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");



  const cancelFormPersonnalProfil = () => {
    // console.log("Cancel upload");
    setAdressMail(dataProfil.adressMail);
    setpassword("")
    setConfirmPassword("")
    // setStateButtonVisible("none")
    // setStateInputDisable(true)

  };

  const sendFormPersonnalProfil = async (e) => {
    console.log("Form waitsend");
    //empeche le formunliare d'etre submiter
    // console.log("event", e)
    e.preventDefault();

    const dataFormPersonnalEmployer = {
      adressMail,
      password,
    };
    console.log("dataFormPersonnalEmployer", dataFormPersonnalEmployer);

    // await dispatch(postFormProfilEmployer(dataFormPersonnalEmployerr))
  };

  return (

    <form
      onSubmit={(e) => sendFormPersonnalProfil(e)}
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
                disabled={stateInputDisable}
                value={adressMail}
                onChange={(e) => setAdressMail(e.target.value)}
              />
            </Grid>

            <Grid item xs={10}>
              <TextField
                required
                label="mot de passe"
                fullWidth
                variant="outlined"
                size="small"
                disabled={stateInputDisable}
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </Grid>

            <Grid item xs={10}>
              <TextField
                required
                label="Confirm mot de passe"
                fullWidth
                variant="outlined"
                size="small"
                disabled={stateInputDisable}
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
                onClick={(e) => cancelFormPersonnalProfil()}
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
