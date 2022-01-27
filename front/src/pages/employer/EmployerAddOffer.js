import { Box, Container, CssBaseline, Typography } from "@mui/material";
import React from "react";
import { themeUser } from "configs/theme";

const EmployerAddOffer = () => {
  return (
    <React.Fragment>
    <CssBaseline />
    <Container
      sx={{
        bgcolor: themeUser.palette.background.default,
        p: 2,
      }}
    >
      {/* Card résumé dashboard */}

      <Box
        sx={{
          bgcolor: themeUser.palette.text.primary,
          borderRadius: 1,
          pt: 2,
          pb: 8,
          mt: 8,
        }}
      >
        {/* Titre section Résumé dashboard */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            component="h5"
            sx={{
              px: 1,
              bgcolor: themeUser.palette.primary.main,
              color: themeUser.palette.text.primary,
              borderRadius: 1,
              position: "relative",
              top: "-30px",
            }}
          >
            Déposer une offre
          </Typography>
        </Box>

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

    </Container>
  </React.Fragment>
  );
};

export default EmployerAddOffer;
