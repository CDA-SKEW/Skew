import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

// import image en static mais à voir pour aller chercher l'image dans le back plus tard
import imageEmployer from "assets/images/imageEmployor.png";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "50%",
  maxHeight: "50%",
});

export default function FormProfilEmployer() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        rowSpacing={1}
        direction="row-reverse"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Grid item md={6} xs={12} sm={12}>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={1}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Img alt="imageEmployer" src={imageEmployer} />
              </Grid>

              <Grid item xs={12}>

                  
                <TextField
                  required
                  size="small"
                  id="upload-photo"
                  type="file"
                  accept="image/*"
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item md={6} xs={12} sm={12}>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={10}>
                <TextField
                required
                  label="N° de Siren:"
                  variant="outlined"
                  fullWidth
                  size="small"
                  id="outlined-basic"
                />
              </Grid>

              <Grid item xs={10}>
                <TextField
                required
                  label="N° de Siret:"
                  fullWidth
                  variant="outlined"
                  size="small"
                  id="outlined-basic"
                />
              </Grid>

              <Grid item xs={10}>
                <TextField
                required
                  label="Nom de l'entreprise:"
                  fullWidth
                  variant="outlined"
                  size="small"
                  id="outlined-basic"
                />
              </Grid>

              <Grid item xs={10}>
                <TextField
                required
                  label="Adresse:"
                  fullWidth
                  variant="outlined"
                  size="small"
                  id="outlined-basic"
                />
              </Grid>

              <Grid item xs={10}>
                <TextField
                required
                  label="Code postal:"
                  fullWidth
                  variant="outlined"
                  size="small"
                  id="outlined-basic"
                />
              </Grid>

              <Grid item xs={10}>
                <TextField
                required
                  label="Commune:"
                  fullWidth
                  variant="outlined"
                  size="small"
                  id="outlined-basic"
                />
              </Grid>

              <Grid item xs={10}>
                <TextField
                required
                  label="Categorie:"
                  fullWidth
                  variant="outlined"
                  size="small"
                  id="outlined-basic"
                />
              </Grid>

              <Grid item xs={10}>
                <Box sx={{ p: 1, display: "flex", justifyContent: "end" }}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ bgcolor: "#DC143C", color: "white" }}
                    type="submit"
                  >
                    Valider
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
