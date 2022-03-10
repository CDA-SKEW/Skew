import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CardDashboard from "components/CardDashboard";
import CardOffer from "components/CardOffer";
import { themeEmployer } from "configs/theme";
import withRecruteur from "components/auth/withRecruteur";

import { useDispatch, useSelector } from "react-redux";
import { getDashboardEmployer } from "store/actions/EmployerActions";

const EmployerDashboard = () => {
  const dispatch = useDispatch();
  const [nbOffer, setNbOffer] = useState("");
  const [nbCandidateReceive, setNbCandidateReceive] = useState("");
  const [nbNotif, setNbNotif] = useState("");

  useEffect(() => {
    dispatch(getDashboardEmployer());
  }, []);

  const dashboard = useSelector(
    (state) => state.employer.dataDashboardEmployer
  ) || "";

  useEffect(() => {
    setNbOffer(dashboard.numberOffers);
    setNbCandidateReceive(dashboard.numberCandidate);
    setNbNotif(dashboard.numberCandidateNull);
  }, [dashboard]);

  const arrayDash = [
    {
      icon: <LibraryBooksIcon sx={{ width: "35px", height: "35px" }} />,
      number: nbOffer,
      text: "Mes offres déposée",
    },
    {
      icon: <VisibilityIcon sx={{ width: "35px", height: "35px" }} />,
      number: nbCandidateReceive,
      text: "Candidatures reçues",
    },
    {
      icon: <NotificationsActiveIcon sx={{ width: "35px", height: "35px" }} />,
      number: nbNotif,
      text: "Notifications",
    },
  ];

  return (
    <Container>
      {/* Card résumé dashboard */}

      <Box
        bgcolor={themeEmployer.palette.bgBox.main}
        borderRadius={3}
        paddingBottom={2}
      >
        {/* Titre section Résumé dashboard */}
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
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
        bgcolor={themeEmployer.palette.bgBox.main}
        borderRadius={3}
        paddingTop={2}
        paddingBottom={4}
        marginTop={4}
      >
        {/* Titre section Dernieres offres postées dashboard */}
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
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
            alignItems: { xs: "center", md: "none" },
          }}
        >
          {dashboard.offers &&
            dashboard.offers
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
