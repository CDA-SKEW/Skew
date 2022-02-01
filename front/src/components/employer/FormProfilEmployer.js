import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

import { useDispatch } from "react-redux";
import {
  getApiSiret,
  postFormProfilEmployer,
} from "store/actions/EmployerActions";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "50%",
  maxHeight: "50%",
});

export default function FormProfilEmployer(props) {
  const { dataProfilEmployer, dataApiSiret } = props;
  const dispatch = useDispatch();

  // const dataApiSiret = useSelector((state) => state.employer.dataSiretApi);
  // console.log("dataApiSiret",dataApiSiret)
  // const [apiSiret, setApiSiret] = useState(dataApiSiret ? dataApiSiret : "");

  // useEffect(() => {
  //     console.log("Use effect dataApiSiret")
  //     setApiSiret(dataApiSiret)
  // }, []);


  if({dataApiSiret}) {
    console.log("use state dataApiSiret", dataApiSiret)
    console.log("siren", dataApiSiret.siren)
    const uniteLegales = dataApiSiret.unite_legale
    console.log("uniteLegale", uniteLegales )

  }

  const [stateImgUpload, setStateImgUpload] = useState(
    dataProfilEmployer.imageEmployer ? dataProfilEmployer.imageEmployer : ""
  );
  const [imageEmployer, setImageEmployer] = useState(dataProfilEmployer.ImageEmployer);
  const [name, setName] = useState("");
  const [siret, setSiret] = useState("");
  const [siren, setSiren] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [town, setTown] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    // console.log("effect for useState form employer");
    if (!dataProfilEmployer.imageEmployer) {
      setStateImgUpload("image obligatoire")
    } else setStateImgUpload("")
    setImageEmployer(dataProfilEmployer.imageEmployer);
    setSiret(dataProfilEmployer.siret);
    setSiren(dataProfilEmployer.siren);
    setName(dataProfilEmployer.name);
    setAddress(dataProfilEmployer.address);
    setZipCode(dataProfilEmployer.zipCode);
    setTown(dataProfilEmployer.town);
    setCategory(dataProfilEmployer.category);
  }, [dataProfilEmployer]);


  const handleSendApiSiret = async (e) => {
    console.log("Send Api Siret wait");
    //empeche le formunliare d'etre submiter
    // console.log("event", e)
    e.preventDefault();

    if (siret.length === 14) {
      console.log("N° de siret", siret);
      await dispatch(getApiSiret(siret));
    }
  };

  const handleImageChange = (e) => {
    // console.log("fct changeImage");
    setStateImgUpload("Image non enregistrée");
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImageEmployer(reader.result);
    };
    reader.readAsDataURL(file);
  };


  const handleSendFormProfil = async (e) => {
    // console.log("Form waitsend");
    //empeche le formunliare d'etre submiter
    // console.log("event", e)
    e.preventDefault();

    const dataFormProfilEmployer = {
      siret,
      siren,
      name,
      address,
      zipCode,
      town,
      category,
      imageEmployer,
    };

    setStateImgUpload("");
    // console.log("dataFormProfilEmployer", dataProfilEmployer, dataFormProfilEmployer);
    // console.log("dataFormProfilEmployer", dataFormProfilEmployer);
    await dispatch(postFormProfilEmployer(dataFormProfilEmployer));
  };


  const cancelFormProfil = () => {
    // console.log("Cancel upload", dataProfilEmployer);
    if (!dataProfilEmployer.imageEmployer) {
      setStateImgUpload("image obligatoire")
    } else setStateImgUpload("")
    setImageEmployer(dataProfilEmployer.imageEmployer);
    setSiret(dataProfilEmployer.siret);
    setSiren(dataProfilEmployer.siren);
    setName(dataProfilEmployer.name);
    setAddress(dataProfilEmployer.address);
    setZipCode(dataProfilEmployer.zipCode);
    setTown(dataProfilEmployer.town);
    setCategory(dataProfilEmployer.category);
  };


  return (
    <Box component="form" onSubmit={(e) => handleSendFormProfil(e)}>
      <Grid
        container
        rowSpacing={1}
        direction="row-reverse"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Grid item md={6} xs={12} sm={12}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: { xs: "center", md: "space-around" },
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center", md: "none" },
            }}
          >
            <Grid
              container
              rowSpacing={1}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                {imageEmployer && <Img alt="imageEmployer" src={imageEmployer} />}
                {{ stateImgUpload } && (
                  <Typography color={"red"}>{stateImgUpload}</Typography>
                )}
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  required
                  component="label"
                  size="small"
                  sx={{ bgcolor: "#2B2E30" }}
                >
                  <Typography>Choisir une image</Typography>
                  <TextField
                    sx={{ display: "none" }}
                    size="small"
                    id="upload-photo"
                    type="file"
                    accept="image/*"
                    name="img"
                    onChange={(e) => handleImageChange(e)}
                  />
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item md={6} xs={12} sm={12}>
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
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TextField
                required
                label="N° de Siret:"
                variant="outlined"
                size="small"
                sx={{ width: { xs: "100%", sm: "50%" } }}
                id="siret"
                value={siret || ""}
                onChange={(e) => {
                  setSiret(e.target.value);
                }}
              />

              <Button
                variant="contained"
                size="small"
                sx={{
                  bgcolor: "#DC143C",
                  color: "white",
                  ml: 2,
                  my: 1,
                }}
                onClick={(e) => handleSendApiSiret(e)}
              >
                {" "}
                Saisie par N° SIRET
              </Button>
            </Grid>

            <Grid item xs={10}>
              <TextField
                required
                label="N° de Siren:"
                variant="outlined"
                fullWidth
                size="small"
                value={siren || ""}
                onChange={(e) => setSiren(e.target.value)}
              />
            </Grid>

            <Grid item xs={10}>
              <TextField
                required
                label="Nom de l'entreprise:"
                fullWidth
                variant="outlined"
                size="small"
                value={name || ""}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>

            <Grid item xs={10}>
              <TextField
                required
                label="Adresse:"
                fullWidth
                variant="outlined"
                size="small"
                value={address || ""}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>

            <Grid item xs={10}>
              <TextField
                required
                label="Code postal:"
                fullWidth
                variant="outlined"
                size="small"
                name="zipCode"
                value={zipCode || ""}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </Grid>

            <Grid item xs={10}>
              <TextField
                required
                label="Commune:"
                fullWidth
                variant="outlined"
                size="small"
                value={town || ""}
                onChange={(e) => setTown(e.target.value)}
              />
            </Grid>

            <Grid item xs={10}>
              <TextField
                required
                label="Categorie:"
                fullWidth
                variant="outlined"
                size="small"
                value={category || ""}
                onChange={(e) => setCategory(e.target.value)}
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
                sx={{ bgcolor: "#DC143C", color: "white", m: 1 }}
                startIcon={<TaskAltIcon />}
                type="submit"
              >
                Valider
              </Button>

              <Button
                variant="contained"
                size="small"
                sx={{ bgcolor: "gray", color: "white", m: 1 }}
                startIcon={<HighlightOffIcon />}
                onClick={(e) => cancelFormProfil()}
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
