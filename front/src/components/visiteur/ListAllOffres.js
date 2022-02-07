import { Box } from '@mui/system';
import CardOffer from 'components/CardOffer';
import React from 'react';

export default function ListAllOffres({ listOffer, job, type, location }) {

    const title = (item) =>
        item.titleOffer.toLowerCase().includes(job.toLowerCase());
    const types = (item2) =>
        item2.nameEmployor.toLowerCase().includes(type.toLowerCase());
    const locations = (item3) =>
        item3.dateOfferDays.toLowerCase().includes(location.toLowerCase());
    const filterList = listOffer
        .filter((item) => title(item))
        .filter((item2) => types(item2))
        .filter((item3) => locations(item3))

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