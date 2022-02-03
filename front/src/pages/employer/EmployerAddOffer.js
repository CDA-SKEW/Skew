import { Box, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { themeUser } from "configs/theme";

const EmployerAddOffer = () => {
  return (
    <Container
      sx={{
        bgcolor: themeUser.palette.background.default,
        p: 2,
      }}
    >

      {/* partie information entreprise */}
      <Box
        sx={{
          bgcolor: themeUser.palette.text.primary,
          borderRadius: 1,
          pt: 2,
          pb: 8,
          mt: 8,
        }}
      >


        {/* Titre section deposé une offre */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              px: 1,
              bgcolor: themeUser.palette.primary.main,
              color: themeUser.palette.text.primary,
              borderRadius: 1,
              position: "relative",
              top: "-45px",
              textAlign: "center",
            }}
          >
            Déposer une offre
          </Typography>
        </Box>

        <Typography sx={{
          position: "relative",
          top: "-30px",
          textAlign: "center", mb: 2
        }} variant="h5">
          Informations entreprise
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "space-around" },
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "none" },
          }}
        >


        </Box>
      </Box>



      {/* partie sur l'offre */}
      <Box
        sx={{
          bgcolor: themeUser.palette.text.primary,
          borderRadius: 1,
          pt: 2,
          pb: 8,
          mt: 8,
        }}
      >

        <Typography sx={{ textAlign: "center", mb: 2 }} variant="h5">
          Informations de l'offre
        </Typography>

        <Grid
          container
          rowSpacing={1}
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >

          <Grid item xs={12} sm={12} md={12} sx={{ px: 2 }}>
            <TextField
              required
              fullWidth
              label="titre de l'offre:"
              variant="outlined"
              size="small"
            // value={title || ""}
            // onChange={(e) => {
            //   setTitle(e.target.value);
            // }}
            />
          </Grid>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: { xs: "center", md: "space-around" },
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center", md: "center" },
            }}
          >


            
          </Box>

          <Grid item xs={12} sm={12} md={12} sx={{ px: 2 }}>
            <TextField
              required
              fullWidth
              label="titre de l'offre:"
              variant="outlined"
              size="small"
              multiline
              rows={5}
            // value={title || ""}
            // onChange={(e) => {
            //   setTitle(e.target.value);
            // }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12} sx={{ px: 2 }}>
            <TextField
              required
              fullWidth
              label="titre de l'offre:"
              variant="outlined"
              size="small"
              multiline
              rows={5}
            // value={title || ""}
            // onChange={(e) => {
            //   setTitle(e.target.value);
            // }}
            />
          </Grid>


          {/* <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: { xs: "center", md: "space-around" },
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center", md: "center" },
              mb: 2,
            }}
          >
      </Box> */}

          {/* <Grid item md={6} xs={12} sm={12}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: { xs: "center", md: "space-around" },
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center", md: "none" },
              mb: 2,
            }}
          >
            <Grid
              container
              rowSpacing={1}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                {avatar ? (<Img alt="imageEmployer" src={avatar} />) : (<Img />)} 
                {{ stateImgUpload } && (
                  <Typography color={"red"}>{stateImgUpload}</Typography>
                )}
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  component="label"
                  size="small"
                  sx={{ bgcolor: "#2B2E30", display: displayButton }}
                >
                  <Typography>Choisir une image</Typography>
                  <TextField
                    sx={{ display: "none" }}
                    size="small"
                    type="file"
                    inputProps={{ accept: 'image/*' }}
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
                fullWidth
                label="N° de Siret:"
                variant="outlined"
                size="small"
                id="siret"
                value={siret || ""}
                name="siret"
                InputProps={{ inputComponent: NumberFormatCustom, inputProps }}
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
                  ml: 1,
                  my: 1,
                  display: displayButton,
                  width: "160px",
                }}
                onClick={(e) => handleSendApiSiret(e)}
              >
                Saisie Auto.
              </Button>
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
                sx={{
                  bgcolor: "#DC143C",
                  color: "white",
                  m: 1,
                }}
                startIcon={<TaskAltIcon />}
                type="submit"
              >
                Publier
              </Button>

              <Button
                variant="contained"
                size="small"
                sx={{
                  bgcolor: "gray",
                  color: "white",
                  m: 1,
                }}
                startIcon={<HighlightOffIcon />}
                onClick={(e) => cancelFormAddOffer()}
              >
                Annuler
              </Button>
            </Grid>
          </Grid>
        </Grid> */}


        </Grid>

      </Box >

    </Container >
  );
};

export default EmployerAddOffer;
