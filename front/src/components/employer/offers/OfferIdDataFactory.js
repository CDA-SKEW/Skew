import React from "react";
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import styled from "@emotion/styled";

const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
});

export default function OfferIdDataFactory(props) {

    const { dataProfilEmployer } = props;

    return (
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
    );
};