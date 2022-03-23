import React, { useEffect } from "react";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";

import CardTableOffer from "components/employer/offers/CardTableOffer";
import { themeEmployer } from "configs/theme";
import { getOffer, getProfilUser } from "store/actions/EmployerActions";
import { useDispatch, useSelector } from "react-redux";
import withRecruteur from "components/auth/withRecruteur";

const EmployerOffer = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOffer());
    dispatch(getProfilUser());
  }, [dispatch]);

  const dataProfilUser = useSelector(
    (state) => state.employer.dataProfilUser
  );

  const dataOffers = useSelector(
    (state) => state.employer.dataOffers.offers
  );
  
  return (
    <Container
    >
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Typography
          variant="h5"
          paddingX={1}
          bgcolor={themeEmployer.palette.bgTitleItems.main}
          color={themeEmployer.palette.textTitleItems.main}
          borderRadius={1}
          position={"relative"}
          top={"15px"}
          textAlign={"center"}
        >
          Mes offres
        </Typography>
      </Box>
      {/* {/* partie mes offres/} */}
      { (dataOffers !== undefined && dataOffers) && (dataOffers.map((offer, index) => <CardTableOffer key={index} offer={offer} dataProfilUser={dataProfilUser} />))}
    </Container>
  );
};

export default withRecruteur(EmployerOffer);
