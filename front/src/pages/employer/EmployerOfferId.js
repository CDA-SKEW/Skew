import { Container, Divider, Grid, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React, { useEffect } from 'react';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import { themeUser } from 'configs/theme';
import { useDispatch, useSelector } from 'react-redux';
import { getProfilEmployer } from 'store/actions/EmployerActions';


const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
});

const EmployerOfferId = () => {


    const dispatch = useDispatch();

    // useEffect(() => {
    //     // console.log("effect getDataProfilEmployerEmployer");
    //     dispatch(getProfilEmployer());
    // }, []);

    //dispatch(getProfilEmployer());

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
                    <Box>
                        <Grid
                            container
                            rowSpacing={1}
                            justifyContent={"center"}
                            alignItems="center"
                            textAlign="center"
                            px={1}
                        >
                            <Grid item md={12}
                                alignItems={"center"}>
                                <Typography variant="subtitle1">
                                    {dataProfilEmployer.name}
                                </Typography>
                            </Grid>

                        </Grid>


                        <Grid
                            container
                            rowSpacing={1}
                            justifyContent={"center"}
                            alignItems="center"
                            textAlign="center"
                            px={2}
                            mb={2}
                        >
                            <Grid item xs={6}
                                alignContent={"center"}
                                display={{ xs: "block", sm: "none", md: "none", xl: "none" }}
                            >

                                <Img alt="imageEmployer"
                                    src={dataProfilEmployer.avatar}
                                />

                            </Grid>
                        </Grid>


                        <Grid
                            container
                            alignItems="center"
                            px={1}
                            mb={2}
                        >
                            <Grid item xs={0} sm={8} md={8}
                                mb={2}>


                                <Grid
                                    container
                                    rowSpacing={1}
                                    justifyContent={"flex-start"}
                                    flexDirection="column"
                                >

                                    <Grid item md={12}>
                                        <Typography variant="body2">
                                            N° de Siret: {dataProfilEmployer.siret}
                                        </Typography>
                                    </Grid>

                                    <Grid item md={12}>
                                        <Typography variant="body2">
                                            Adresse: {dataProfilEmployer.address}
                                        </Typography>
                                    </Grid>

                                    <Grid item md={12}>
                                        <Typography variant="body2">
                                            Commune: {dataProfilEmployer.town}
                                        </Typography>
                                    </Grid>

                                    <Grid item md={12}>
                                        <Typography variant="body2">
                                            Code postal: {dataProfilEmployer.zipCode}
                                        </Typography>
                                    </Grid>

                                    <Grid item md={12}>
                                        <Typography variant="body2">
                                            Categorie: {dataProfilEmployer.category}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={0} sm={4} md={4}
                                alignItems={"center"}
                                alignContent={"center"}
                                display={{ xs: "none", sm: "block", md: "block" }}
                                mb={2}
                            >

                                <Img alt="imageEmployer"
                                    src={dataProfilEmployer.avatar}
                                />
                            </Grid>
                        </Grid>
                    </Box>

                    <Divider sx={{ mx: 4, mb: 2 }} />

                    {/* Information offre*/}
                    <Box>


                        <Grid
                            container
                            justifyContent={"center"}
                            px={1}
                            pb={3}
                        >
                            <Grid item xs={12} sm={12} md={12} textAlign={"center"}>
                                <Typography variant="subtitle1">
                                    Titre: Developpeur web
                                </Typography>
                            </Grid>

                        </Grid>


                        <Grid
                            container
                            justifyContent={{ xs: "start", sm: "start", md: "center" }}
                            flexDirection={{ xs: "column", sm: "column", md: "row" }}
                            px={1}
                            pb={3}
                        >

                            <Grid item xs={12} sm={12} md={12} rowSpacing={1} display={"flex"} flexDirection={{ xs: "column", sm: "column", md: "row" }}>
                                <Typography variant="body2" mr={6}>
                                    Type de contrat: Contrat professionnel
                                </Typography>
                                <Typography variant="body2">
                                    Durée du contrat:  12  mois
                                </Typography>
                            </Grid>

                        </Grid>

                        <Grid
                            container
                            justifyContent={"start"}
                            px={1}
                            pb={1}
                        >
                            <Grid item xs={12} sm={12} md={2} alignItems="center"  >
                                <Typography variant="body2">
                                    Description du poste:
                                </Typography>
                            </Grid>


                            <Grid item xs={12} sm={12} md={10}>
                                <Typography variant="body2" paragraph={true} sx={{ whiteSpace: "pre-line" }}>
                                    websqscqsedeez
                                    ezcdscdcds
                                    sdcsdcsdcsdcsdcsdcsd zzefzececfez
                                    scqsc
                                    c
                                    qscqs
                                    cqscqs

                                </Typography>
                            </Grid>


                        </Grid>

                        <Grid
                            container
                            justifyContent={"start"}
                            px={1}
                            pb={3}
                        >
                            <Grid item xs={12} sm={12} md={2} alignItems="center"  >
                                <Typography variant="body2">
                                    Profil recherché:
                                </Typography>
                            </Grid>


                            <Grid item xs={12} sm={12} md={10}>
                                <Typography variant="body2" paragraph={true} sx={{ whiteSpace: "pre-line" }}>
                                    websqscqsedeez
                                    ezcdscdcds
                                    sdcsdcsdcsdcsdcsdcsd zzefzececfez
                                    scqsc
                                    c
                                    qscqs
                                    cqscqs

                                </Typography>
                            </Grid>


                        </Grid>


                    </Box>


                </Box>
            </Container >
        </Box >
    );
};

export default EmployerOfferId;
