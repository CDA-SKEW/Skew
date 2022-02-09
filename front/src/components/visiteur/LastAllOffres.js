import { Box } from '@mui/system';
import CardOffreUnique from 'components/visiteur/CardOffreUnique';
import React from 'react';
import { Typography } from '@mui/material';

export default function LastAllOffres({ listOffer, handleClickOpen }) {

    const SliceList = listOffer.slice(0, 4)

    return (
        <Box
            maxWidth="xl"
            sx={{
                m: 'auto',
                my: 5
            }}
        >
            <Typography variant='h5' sx={{my: 10}}>
                Dernières offres plubliées
            </Typography>
            {SliceList.length > 0 && (
                <Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            m: 'auto',
                            justifyContent: { xs: "center", md: "space-around" },
                            flexDirection: { xs: "column", md: "row" },
                            alignItems: { xs: "center", md: "none" },
                        }}
                    >
                        {SliceList.map((listOffer, index) => (
                            <CardOffreUnique handleClickOpen={handleClickOpen} key={index} listOffer={listOffer} />
                        ))}
                    </Box>
                </Box>
            )}
            {!SliceList.length && (
                <Typography
                    variant='body1'
                    sx={{
                        textAlign: 'center',
                        color: '#808080'
                    }}
                >
                    Aucune dernière offre
                </Typography>
            )}
        </Box>
    );
};