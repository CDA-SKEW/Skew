import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function OfferDataFactory(props) {
  const { dataProfilEmployer } = props;

  return (
    <Box>
      <Grid container rowSpacing={1} marginBottom={1} paddingX={2}>
        {/* siret */}
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { sm: "flex-start", md: "flex-start", lg:"center" },
              flexWrap:"wrap"
            }}
          >
            <Typography>N° de siret: </Typography>
            <Typography paddingLeft={1}>{dataProfilEmployer.siret}</Typography>
          </Box>
        </Grid>

        {/* nom */}
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { sm: "flex-start", md: "flex-start", lg:"center" },
              flexWrap:"wrap"
            }}
          >
            <Typography>Nom: </Typography>
            <Typography paddingLeft={1}>{dataProfilEmployer.name}</Typography>
          </Box>
        </Grid>

        {/* categorie */}
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { sm: "flex-start", md: "flex-start", lg:"center" },
              flexWrap:"wrap"
            }}
          >
            <Typography>Categorie: </Typography>
            <Typography paddingLeft={1}>
              {dataProfilEmployer.category}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container rowSpacing={1} marginBottom={1} paddingX={2}>
        {/*Adress*/}
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { sm: "flex-start", md: "flex-start", lg:"center" },
              flexWrap:"wrap"
            }}
          >
            <Typography>Adresse: </Typography>
            <Typography paddingLeft={1}>
              {dataProfilEmployer.address}
            </Typography>
          </Box>
        </Grid>

        {/* code Postal*/}
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { sm: "flex-start", md: "flex-start", lg:"center" },
              flexWrap:"wrap"
            }}
          >
            <Typography>Code postal: </Typography>
            <Typography paddingLeft={1}>
              {dataProfilEmployer.zipCode}
            </Typography>
          </Box>
        </Grid>

        {/* Commune*/}
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { sm: "flex-start", md: "flex-start", lg:"center" },
              flexWrap:"wrap"
            }}
          >
            <Typography>Commune: </Typography>
            <Typography paddingLeft={1}>{dataProfilEmployer.town}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
