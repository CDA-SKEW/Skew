import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CardDashboard from "components/CardDashboard";
import CardOffer from "components/CardOffer";
import { themeEmployer } from "configs/theme";
import withRecruteur from "components/auth/withRecruteur";

// import image en static mais à voir pour aller chercher l'image dans le back plus tard
import { useDispatch, useSelector } from "react-redux";
import { getOffer } from "store/actions/EmployerActions";
const EmployerDashboard = () => {


  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getOffer());
  }, []);


  const offers = useSelector(
    (state) => state.employer.dataOffers.offers
  );

  let NbMyOffers =[]
  if (offers) NbMyOffers=offers.length

  const { nbNotif, nbCandidateReceive } = {
    nbNotif: [0, 1, 2, 3, 4, 5],
    nbCandidateReceive: [0, 1, 2, 3],
  };

  const arrayDash = [
    {
      icon: <LibraryBooksIcon sx={{ width: "35px", height: "35px" }} />,
      number: NbMyOffers,
      text: "Mes offres déposée",
    },
    {
      icon: <VisibilityIcon sx={{ width: "35px", height: "35px" }} />,
      number: nbCandidateReceive.length,
      text: "Candidatures reçues",
    },
    {
      icon: <NotificationsActiveIcon sx={{ width: "35px", height: "35px" }} />,
      number: nbNotif.length,
      text: "Notifications",
    },
  ];


  return (
    <Container
    >
      {/* Card résumé dashboard */}

      <Box
        bgcolor={themeEmployer.palette.bgBox.main}
        borderRadius={3}
        paddingBottom={2}
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
            top={"-20px"}
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
        paddingBottom={4}
        marginTop={4}
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
          {offers &&
            offers
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

export default withRecruteur(EmployerDashboard);
//  