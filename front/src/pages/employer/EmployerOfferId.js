
import React, { useEffect } from "react";
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/system';
import { Button, Container, Divider, Typography } from "@mui/material";
import OfferIdDataFactory from "components/employer/offers/OfferIdDataFactory"
import OfferIdDataOffer from "components/employer/offers/OfferIdDataOffer"
import { getProfilEmployer } from "store/actions/EmployerActions";
import { useLocation, useNavigate } from "react-router-dom";
import withRecruteur from "components/auth/withRecruteur";

const EmployerOfferId = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (!state) navigate(-1);
    // }, [navigate, state]);

    // console.log("state", state);

    const dispatch = useDispatch();

    useEffect(() => {
        // console.log("effect getDataProfilEmployerEmployer");
        dispatch(getProfilEmployer());
    }, []);

    // dispatch(getProfilEmployer());

    const dataProfilEmployer = useSelector(
        (state) => state.employer.dataProfilEmployer
    );

    return (
        <Container
        >
            <Box bgcolor={"whitesmoke"}>
                {/* Title and bouton close */}
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    bgcolor={"#FF7F50"}
                    color={"white"}
                    px={2}
                >
                    <Typography variant='h6' align="center">
                        {state && "Offres n°"+ state.offer.offer_id +" - "+ state.offer.title}
                    </Typography>

                    <Button onClick={e => navigate(-1)}>
                        <CancelTwoToneIcon sx={{
                            fontSize: 50, color: "white", p: 1
                        }}
                        />
                    </Button>
                </Box>

                {/* Information entreprise */}
                {dataProfilEmployer &&
                    <OfferIdDataFactory dataProfilEmployer={dataProfilEmployer} />
                }

                {dataProfilEmployer &&
                    <Divider sx={{ mx: 4, mb: 2 }} />
                }


                {/* Information offre*/}
                {state &&
                    <OfferIdDataOffer offer={state.offer} />
                }


            </Box>
        </Container >
    );
};

export default withRecruteur(EmployerOfferId);
