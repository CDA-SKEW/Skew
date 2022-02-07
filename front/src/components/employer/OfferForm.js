import React, { useState } from "react";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import {
  Button,
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { postFormAddOffer } from "store/actions/EmployerActions";
import ModalOfferPublished from "./ModalOfferPublished";

export default function OfferForm() {
  const dispatch = useDispatch();

  const messageEmployer = useSelector((state) => state.employer.flashs);

  // console.log("messageEmployer ", messageEmployer);

  // declaration du tableau pour le select
  const types = [
    {
      value: "CDI",
      label: "CDI",
    },
    {
      value: "CDD",
      label: "CDD",
    },
    {
      value: "Contrat professionnel",
      label: "Contrat professionnel",
    },
    {
      value: "Stage",
      label: "Stage",
    },
  ];

  // declaration des constantes pour le modal
  const [openModal, setOpenModal] = useState(false);

  // declaration des constantes pour le formulaire
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [period, setPeriod] = useState("");
  const [description, setDescription] = useState("");
  const [profile, setProfile] = useState("");

  // code pour savoir si la valeur du select est à CDI pour affichage durée du contrat
  let typeCdi = false;
  if (type === "CDI") typeCdi = true;

  // fonction pour l'envoi du formulaire à la db
  const handleSendAddOffer = async (e) => {
    // console.log("Form waitsend");
    //empeche le formunliare d'etre submiter
    // console.log("e", e)
    e.preventDefault();

    const dataFormAddOffer = {
      title,
      type,
      period,
      description,
      profile,
    };

    //passage de la varaible openModal à false apres 2 secondes
    setOpenModal(true)
    setTimeout(function () {
      setOpenModal(false);
    }, 2000);

    // console.log("dataFormAddOffer", dataFormAddOffer);
    await dispatch(postFormAddOffer(dataFormAddOffer));

    setTitle("");
    setType("");
    setPeriod("");
    setDescription("");
    setProfile("");
  };

  return (
    <Box component="form" onSubmit={(e) => handleSendAddOffer(e)}>
      <Grid container rowSpacing={2} paddingX={2}>
        <Grid item xs={12} sm={12} md={12}>
          <TextField
            required
            fullWidth
            label="Titre de l'offre"
            variant="outlined"
            size="small"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={12} alignItems={"center"}>
          <Grid
            container
            rowSpacing={1}
            justifyContent={{ sm: "center", md: "space-between" }}
            textAlign={"center"}
            direction={{ xs: "column", sm: "column", md: "row" }}
          >
            <Grid item xs={6} sm={6} md={4}>
              <TextField
                required
                fullWidth
                select
                label="Type de contrat"
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                }}
              >
                {types.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {!typeCdi && (
              <Grid item xs={6} sm={6} md={4}>
                <TextField
                  fullWidth
                  required
                  label="Durée du contrat en mois"
                  variant="outlined"
                  type="number"
                  value={period}
                  onChange={(e) => {
                    setPeriod(e.target.value);
                  }}
                />
              </Grid>
            )}
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <TextField
            required
            fullWidth
            label="Descriptif du poste"
            variant="outlined"
            size="small"
            multiline
            rows={5}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <TextField
            required
            fullWidth
            label="Profil recherché"
            variant="outlined"
            size="small"
            multiline
            rows={5}
            value={profile}
            onChange={(e) => {
              setProfile(e.target.value);
            }}
          />
        </Grid>

        <Grid item xs={12} padding={1} display={"flex"} justifyContent={"end"}>
          <Button
            variant="contained"
            size="small"
            sx={{
              bgcolor: "#DC143C",
              color: "white",
              m: 1,
            }}
            startIcon={<PublishedWithChangesIcon />}
            type="submit"
          >
            Publier
          </Button>
        </Grid>
      </Grid>

      <ModalOfferPublished messageEmployer={messageEmployer} open={openModal} />
    </Box>
  );
}
