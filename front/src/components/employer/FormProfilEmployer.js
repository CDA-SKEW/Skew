import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { useDispatch, useSelector } from "react-redux";
import {
  getApiSiret,
  getProfilEmployer,
  postFormProfilEmployer,
} from "store/actions/EmployerActions";

// import image en static mais à voir pour aller chercher l'image dans le back plus tard
import imageEmployer from "assets/images/imageEmployor.png";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "50%",
  maxHeight: "50%",
});

export default function FormProfilEmployer() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("effect getDataProfilEmployer");
    dispatch(getProfilEmployer());
  }, []);

  const dataProfil = useSelector((state) => state.employer.dataProfil);
  console.log("store dataProfil", dataProfil);

  // const dataSiretApi = useSelector((state) => state.employer.dataSiretApi);
  // console.log("store dataSiretApi", dataSiretApi);
  // console.log(
  //   "data dataSiretApi",
  //   "siret:",
  //   dataSiretApi.siret,
  //   "siren:",
  //   dataSiretApi.siren,
  //   "name:"
  // dataSiretApi.unite_legale.denomination
  // );

  const [stateImgUpload, setStateImgUpload] = useState("");
  // const [imgUpload, setImgUpload] = useState(dataProfil.imageEmployer);
  // const [imgUpload, setImgUpload] = useState(imageEmployer);
  // const [siret, setSiret] = useState(dataProfil.siret || dataSiretApi.siret);
  // const [siren, setSiren] = useState(dataProfil.siren || dataSiretApi.siren);
  // const [name, setname] = useState(dataProfil.name || "");
  // const [address, setAddress] = useState(dataProfil.address || "");
  // const [zipCode, setZipCode] = useState(dataProfil.zipCode || "");
  // const [town, setTown] = useState(dataProfil.town || "");
  // const [category, setCategory] = useState(dataProfil.category || "");
  const [profil, setProfil] = useState(dataProfil ? dataProfil : {});
  console.log("useStateProfil", profil, "---");

  // const handleImageChange = (e) => {
  //   // console.log("fct changeImage");

  //   setStateImgUpload("Image non enregistrée");

  //   e.preventDefault();

  //   let reader = new FileReader();
  //   let file = e.target.files[0];

  //   reader.onloadend = () => {
  //     setImgUpload(reader.result);
  //   };
  //   reader.readAsDataURL(file);
  // };

  // const handleName = (e) => {
  //   console.log("eee", e.target.name);
  //   let p = profil;
  //   p.name = e.target.value;
  //   setProfil(p);
  //   console.log("profil", p);
  // };

  const handleProfil = (e) => {
    let p = profil;
    console.log("e.target.name", e.target.id);

    switch (e.target.id) {
      // case "img":
      //   console.log("fct changeImage");
      //   setStateImgUpload("Image non enregistrée");
      //   // e.preventDefault();
      //   let reader = new FileReader();
      //   let file = e.target.files[0];

      //   reader.onloadend = () => {
      //     p.imgUpload =e.target.files[0];
      //   };
      //   reader.readAsDataURL(file);
      //   console.log("file", file);
      //   break;
      // case "siret":
      //   // p.siret = e.target.value;
      //   // setProfil(p);
      //   break;
      case "nameProfilEmployer":
        console.log("case name");
        p.name = e.target.value;
        break;
      case "zipCode":
        // p.zipCode = e.target.value;
        break;
      default:
        break;
    }
    // setProfil(p);
    console.log("profil Change----", p);  
    // console.log("profil----");
  };

  const cancelFormProfil = () => {
    console.log("Cancel upload", profil, dataProfil);
    setProfil(dataProfil);
  };

  const handleSendFormProfil = async (e) => {
    console.log("Form waitsend");
    //empeche le formunliare d'etre submiter
    // console.log("event", e)
    e.preventDefault();

    // const dataFormProfilEmployer = {
    //   siret,
    //   siren,
    //   name,
    //   adress,
    //   zipCode,
    //   town,
    //   category,
    //   imgUpload,
    // };

    const dataFormProfilEmployer = {
      ...profil,
    };

    // setStateImgUpload("");
    console.log("dataFormProfilEmployer", dataProfil, dataFormProfilEmployer);
    // await dispatch(postFormProfilEmployer(dataFormProfilEmployer));
  };

  const handleSendApiSiret = async (e) => {
    console.log("Send Api Siret wait");
    //empeche le formunliare d'etre submiter
    // console.log("event", e)
    // e.preventDefault();

    // if (siret.lenght === 14) {
    //   console.log("N° de siret", siret);
    //   await dispatch(getApiSiret(siret));
    // }
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={(e) => handleSendFormProfil(e)}
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
                {/* { profil.imgUpload && (
                <Img alt="imageEmployer" src={profil.imgUpload} />
                )}
                {{ stateImgUpload } && (
                  <Typography color={"red"}>{stateImgUpload}</Typography>
                )} */}
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
                    onChange={(e) => handleProfil(e)}
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
                name="siret"
                defaultValue={profil.siret}
                onChange={(e) => handleProfil(e)}
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
                defaultValue={profil.siren}
                onChange={(e) => handleProfil(e)}
              />
            </Grid>

            <Grid item xs={10}>
              <TextField
                required
                label="Nom de l'entreprise:"
                fullWidth
                variant="outlined"
                size="small"
                id="nameProfilEmployer"
                defaultValue={profil.name}
                // defaultValue={profil.name}
                onChange={(e) => handleProfil(e)}
              />
            </Grid>

            <Grid item xs={10}>
              <TextField
                required
                label="Adresse:"
                fullWidth
                variant="outlined"
                size="small"
                defaultValue={profil.address}
                onChange={(e) => handleProfil(e)}
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
                defaultValue={profil.zipCode}
                onChange={(e) => handleProfil(e)}
              />
            </Grid>

            <Grid item xs={10}>
              <TextField
                required
                label="Commune:"
                fullWidth
                variant="outlined"
                size="small"
                defaultValue={profil.town}
                onChange={(e) => handleProfil(e)}
              />
            </Grid>

            <Grid item xs={10}>
              <TextField
                required
                label="Categorie:"
                fullWidth
                variant="outlined"
                size="small"
                defaultValue={profil.category}
                onChange={(e) => handleProfil(e)}
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
                type="submit"
              >
                Valider
              </Button>

              <Button
                variant="contained"
                size="small"
                sx={{ bgcolor: "gray", color: "white", m: 1 }}
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
