import { Container, CssBaseline, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CardDashboard from "components/CardDashboard";

const EmployerDashboard = () => {
  const { nbNotif, nbCandidateReceive, NbMyOffers } = {
    nbNotif: [0, 1, 2, 3, 4, 5],
    nbCandidateReceive: [0, 1, 2, 3],
    NbMyOffers: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  };

  const arrayDash = [
    {
      icon: <LibraryBooksIcon sx={{ width: "45px", height: "45px" }} />,
      number: NbMyOffers.length,
      text: "Mes offres déposée",
    },
    {
      icon: <VisibilityIcon sx={{ width: "45px", height: "45px" }} />,
      number: nbCandidateReceive.length,
      text: "Candidatures reçues",
    },
    {
      icon: <NotificationsActiveIcon sx={{ width: "45px", height: "45px" }} />,
      number: nbNotif.length,
      text: "Notifications",
    },
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        sx={{
          bgcolor: "#E5E5E5",
          p: 2,
          height: "auto",
          mt: 2,
        }}
      >
        {/* Card résumé dashboard */}

        <Box
          sx={{
            bgcolor: "#FFFFFF",
            height: "auto",
            borderRadius: 1,
            my: 4,
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
                bgcolor: "#004F98",
                color: "#FFFFFF",
                borderRadius: 1,
                position: "relative",
                top: -15,
              }}
            >
              Résumé
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
            {arrayDash.length > 0 &&
              arrayDash.map((list, index) => (
                <CardDashboard key={index} list={list} />
              ))}
          </Box>
        </Box>

        {/* Card Dernieres offres postées dashboard */}

        <Box
          sx={{
            bgcolor: "#FFFFFF",
            height: "auto",
            borderRadius: 1,
            my: 4,
          }}
        >
          {/* Titre section Dernieres offres postées dashboard */}
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
                bgcolor: "#004F98",
                color: "#FFFFFF",
                borderRadius: 1,
                position: "relative",
                top: -15,
              }}
            >
              Dernieres offres postées
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "space-around" },
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center", md: "none" },
            }}
          ></Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default EmployerDashboard;
