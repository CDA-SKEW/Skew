import { Container, CssBaseline, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CardDashboard from "components/CardDashboard";
import CardOffer from "components/CardOffer";
import { themeUser } from "configs/theme";

// import image en static mais à voir pour aller chercher l'image dans le back plus tard
import imageEmployer from "assets/images/imageEmployor.png";

const EmployerDashboard = () => {
  const { nbNotif, nbProfilView, NbMyPost } = {
    nbNotif: [0, 1, 2, 3, 4, 5],
    nbProfilView: [0, 1, 2, 3],
    NbMyPost: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  };

  const arrayDash = [
    {
      icon: <LibraryBooksIcon sx={{ width: "45px", height: "45px" }} />,
      number: NbMyPost.length,
      text: "Candidatures",
    },
    {
      icon: <VisibilityIcon sx={{ width: "45px", height: "45px" }} />,
      number: nbProfilView.length,
      text: "Nombre de vue Profil",
    },
    {
      icon: <NotificationsActiveIcon sx={{ width: "45px", height: "45px" }} />,
      number: nbNotif.length,
      text: "Notifications",
    },
  ];

  const arrayOffer = [
    {
      image: imageEmployer,
      titleOffer: "Devellopeur Application",
      nameEmployor: "arinfo",
      dateOfferDays: "10",
      badgeEmployor: true,
    },
    {
      image: imageEmployer,
      titleOffer: "Développeur web",
      nameEmployor: "SII",
      dateOfferDays: "20",
      badgeEmployor: true,
    },
    {
      image: imageEmployer,
      titleOffer: "Assistante de direction et gestion de paye",
      nameEmployor: "Covea",
      dateOfferDays: "2",
      badgeEmployor: false,
    },
    {
      image: imageEmployer,
      titleOffer: "Chauffeur Routier",
      nameEmployor: "ST micro electronique",
      dateOfferDays: "1",
      badgeEmployor: false,
    },
    {
      image: imageEmployer,
      titleOffer: "Cuisinier",
      nameEmployor: "pole emploi",
      dateOfferDays: "15",
      badgeEmployor: true,
    },
  ];

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
            bgcolor: themeUser.palette.secondary.main,
            borderRadius: 1,
            pt: 2,
            pb: 8,
            my: 8,
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
                bgcolor: themeUser.palette.primary.main,
                color: themeUser.palette.text.primary,
                borderRadius: 1,
                position: "relative",
                top: "-30px",
              }}
            >
              Dernieres offres postulés
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
            {arrayOffer.length > 0 &&
              arrayOffer
                .slice(-3)
                .reverse()
                .map((listOffer, index) => (
                  <CardOffer key={index} listOffer={listOffer} />
                ))}
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default EmployerDashboard;
