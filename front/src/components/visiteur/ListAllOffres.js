import { Box } from '@mui/system';
import CardOffer from 'components/CardOffer';
import React from 'react';

export default function ListAllOffres({ listOffer, job, type, location }) {

    const title = (item1) =>
        item1.titleOffer.toLowerCase().includes(job.toLowerCase());
    const filterList = listOffer.filter((item1) => title(item1))

    return (
        <Box
            maxWidth="lg"
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                m: 'auto',
                justifyContent: { xs: "center", md: "space-around" },
            }}
        >
            {filterList.map((listOffer, index) => (
                <Box my={5}>
                    <CardOffer key={index} listOffer={listOffer} />
                </Box>
            ))}
        </Box>
    );
};