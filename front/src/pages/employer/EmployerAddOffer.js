import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { themeEmployer } from "configs/theme";
import { useDispatch, useSelector } from "react-redux";
import { getProfilEmployer } from "store/actions/EmployerActions";
import OfferDataFactory from "components/employer/addOffer/OfferDataFactory";
import OfferForm from "components/employer/addOffer/OfferForm";

const EmployerAddOffer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("effect getDataProfilEmployerEmployer");
    dispatch(getProfilEmployer());
  }, []);

  //dispatch(getProfilEmployer());

  const dataProfilEmployer = useSelector(
    (state) => state.employer.dataProfilEmployer
  );

  return (
    <Container>
      {/* partie information entreprise */}
      <Box
        bgcolor={themeEmployer.palette.bgBox.main}
        borderRadius={3}
        paddingTop={2}
        paddingBottom={2}
        marginTop={2}
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
            paddingX={1}
            bgcolor={themeEmployer.palette.bgTitleItems.main}
            color={themeEmployer.palette.textTitleItems.main}
            borderRadius={1}
            position={"relative"}
            top={"-35px"}
            textAlign={"center"}
          >
            Déposer une offre
          </Typography>
        </Box>

        <Typography
          position={"relative"}
          top={"-30px"}
          textAlign={"center"}
          variant="h5"
        >
          Informations entreprise
        </Typography>

        {/* component data entreprise */}
        {dataProfilEmployer && (
          <OfferDataFactory dataProfilEmployer={dataProfilEmployer} />
        )}
      </Box>

      {/* partie sur l'offre */}
      <Box
        bgcolor={themeEmployer.palette.bgBox.main}
        borderRadius={3}
        paddingTop={2}
        marginTop={2}
      >
        <Typography sx={{ textAlign: "center", mb: 2 }} variant="h5">
          Informations de l'offre
        </Typography>

        {/* component formulaire offre */}
        {dataProfilEmployer && <OfferForm />}
      </Box>
    </Container>
  );
};

export default EmployerAddOffer;
