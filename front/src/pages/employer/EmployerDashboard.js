import { Container, CssBaseline, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CardDashbord from "components/CardDashbord";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

const arrayDash = [
  {
    icon: <LibraryBooksIcon sx={{ width: "45px", height: "45px" }} />,
    number: 128,
    text: "Mes offres déposée",
  },
  {
    icon: <VisibilityIcon sx={{ width: "45px", height: "45px" }} />,
    number: 10,
    text: "Candidatures reçues",
  },
  {
    icon: <NotificationsActiveIcon sx={{ width: "45px", height: "45px" }} />,
    number: 5,
    text: "Notifications",
  },
];

const EmployerDashboard = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        sx={{
          bgcolor: "#E5E5E5",
          p: 2,
          height: "100vh",
          mt: 2,
        }}
      >
        <Box
          sx={{
            bgcolor: "#FFFFFF",
            height: "auto",
            borderRadius: 1,
            my: 4,
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
                <CardDashbord key={index} list={list} />
              ))}
          </Box>
        </Box>

        {/* part2 */}

        <Box
          sx={{
            bgcolor: "#FFFFFF",
            height: "auto",
            borderRadius: 1,
            mt: 8,
            mb: 4,
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
              Dernière offres postulées
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
                <CardDashbord key={index} list={list} />
              ))}
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default EmployerDashboard;
