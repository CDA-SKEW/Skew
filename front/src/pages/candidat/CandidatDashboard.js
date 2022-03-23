import { Container, CssBaseline, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CardDashboard from "components/CardDashboard";
import CardOffer from "components/CardOfferCandidate";
import { themeCandidate } from "configs/theme";
import withCandidat from "components/auth/withCandidat";

// import image en static mais à voir pour aller chercher l'image dans le back plus tard
// import imageEmployer from "assets/images/imageEmployor.png";
import { useDispatch, useSelector } from "react-redux";
import { getOffreCandidate } from "store/actions/CandidateActions";

const CandidatDashboard = () => {
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
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOffreCandidate())
  }, [])

  const arrayOffer = useSelector(state => state.candidate.candidaturesProfil)
  console.log('arrayOffer', arrayOffer)

  // {
  //   image: imageEmployer,
  //   titleOffer: "Cuisinier",
  //   nameEmployor: "pole emploi",
  //   dateOfferDays: "15",
  //   badgeEmployor: true,
  // },
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        sx={{
          bgcolor: themeCandidate.palette.bgPage.main,
          p: 2,
        }}
      >
        {/* Card résumé dashboard */}

        <Box
          sx={{
            bgcolor: themeCandidate.palette.bgBox.main,
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
                bgcolor: themeCandidate.palette.bgTitleItems.main,
                color: themeCandidate.palette.textTitleItems.main,
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
            bgcolor: themeCandidate.palette.bgBox.main,
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
                bgcolor: themeCandidate.palette.bgTitleItems.main,
                color: themeCandidate.palette.textTitleItems.main,
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

// export default CandidatDashboard;
export default withCandidat(CandidatDashboard);