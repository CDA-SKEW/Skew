import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CardDashboard from "components/CardDashboard";
import CardOffer from "components/CardOffer";
import { themeEmployer} from "configs/theme";

// import image en static mais à voir pour aller chercher l'image dans le back plus tard
import imageEmployer from "assets/images/imageEmployor.png";

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
      badgeEmployor: true,
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
    <Container
    sx={{ py: 4 }}
  >
      {/* Card résumé dashboard */}

      <Box
        bgcolor={themeEmployer.palette.bgBox.main}
        borderRadius={3}
        paddingTop={2}
        paddingBottom={2}
        marginTop={2}
      >
        {/* Titre section Résumé dashboard */}
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography
            variant="h5"
            component="h5"
            paddingX={1}
            bgcolor={themeEmployer.palette.bgTitleItems.main}
            color={themeEmployer.palette.textTitleItems.main}
            borderRadius={1}
            position={"relative"}
            top={"-35px"}
            textAlign={"center"}
          >
            Résumé
          </Typography>
        </Box>

        <Box
          display={"flex"}
          sx={{
            justifyContent: { xs: "center", md: "space-around" },
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "none" }
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
        bgcolor={themeEmployer.palette.bgBox.main}
        borderRadius={3}
        paddingTop={2}
        paddingBottom={8}
        marginTop={8}
      >
        {/* Titre section Dernieres offres postées dashboard */}
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography
             variant="h5"
             component="h5"
             paddingX={1}
             bgcolor={themeEmployer.palette.bgTitleItems.main}
             color={themeEmployer.palette.textTitleItems.main}
             borderRadius={1}
             position={"relative"}
             top={"-35px"}
             textAlign={"center"}
          >
            Dernieres offres postées
          </Typography>
        </Box>

        <Box
          display={"flex"}
          sx={{
            justifyContent: { xs: "center", md: "space-around" },
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "none" }
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
  );
};

export default EmployerDashboard;
