import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Box} from '@mui/system';

export default function OfferIdDataOffer() {
    return (
        <div>
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
    </div>
    );
};