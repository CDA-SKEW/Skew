import { Container, CssBaseline, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const EmployerDashboard = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        sx={{
          bgcolor: "#E5E5E5",
          mt: 4,
          p: 2,
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            component="h6"
            sx={{
              px: 1,
              bgcolor: "#004F98",
              color: "#FFFFFF",
              borderRadius: 1,
              position: "relative",
              top: 15,
            }}
          >
            Resumé
          </Typography>
        </Box>

        <Box
          sx={{
            bgcolor: "#FFFFFF",
            height: "40vh",
            borderRadius: 1,
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            component="h6"
            sx={{
              px: 1,
              bgcolor: "#004F98",
              color: "#FFFFFF",
              borderRadius: 1,
              position: "relative",
              top: 15,
            }}
          >
            Dernière offres postulées
          </Typography>
        </Box>

        <Box
          sx={{
            bgcolor: "#FFFFFF",
            height: "40vh",
            borderRadius: 1,
          }}
        />
      </Container>
    </React.Fragment>
  );
};

export default EmployerDashboard;
