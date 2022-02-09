
import React, { useEffect } from "react";
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import { themeUser } from 'configs/theme';
import { useDispatch, useSelector } from 'react-redux';
import { Box} from '@mui/system';
import { Container, Divider, Typography } from "@mui/material";
import OfferIdDataFactory from "components/employer/offers/OfferIdDataFactory"
import OfferIdDataOffer from "components/employer/offers/OfferIdDataOffer"
import { getProfilEmployer } from "store/actions/EmployerActions";


const EmployerOfferId = () => {


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
        <Box
            bgcolor={themeUser.palette.background.default}
            height={"100vh"}>
            <Container
                sx={{
                    px: 2
                }}
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
                        mb={2}
                    >
                        <Typography justifyContent={"center"} variant='h5'>
                            Offre n°45445 - Developpeur web
                        </Typography>

                        <CancelTwoToneIcon sx={{
                            alignContent: "end",
                            position: 'relative',
                            left: 10,
                            top: 1, fontSize: 30, color: "white", p: 1
                        }}
                        //  onClick={} 
                        />
                    </Box>

                    {/* Information entreprise */}
                    <OfferIdDataFactory dataProfilEmployer={dataProfilEmployer}/>
                   
                    <Divider sx={{ mx: 4, mb: 2 }} />

                    {/* Information offre*/}
                    <OfferIdDataOffer />
                 

                </Box>
            </Container >
        </Box >
    );
};

export default EmployerOfferId;
