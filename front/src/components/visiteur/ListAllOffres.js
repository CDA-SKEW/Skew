import { Box } from '@mui/system';
import CardOffreUnique from 'components/visiteur/CardOffreUnique';
import React from 'react';
import Pagination from '@mui/material/Pagination';
import { Typography } from '@mui/material';

export default function ListAllOffres({ listOffer, job, type, location, page, setPage, handleClickOpen }) {

    const handleChange = (event, value) => {
        setPage(value);
    };

    const title = (item) =>
        item.titleOffer.toLowerCase().includes(job.toLowerCase());
    const types = (item2) =>
        item2.typeContrat.toLowerCase().includes(type.toLowerCase());
    const locations = (item3) =>
        item3.localisation.toLowerCase().includes(location.toLowerCase());

    const filterList = listOffer
        .filter((item) => title(item))
        .filter((item2) => types(item2))
        .filter((item3) => locations(item3))

    function splitArray(array, chunk) {
        var i, j, rslt = [];
        chunk = chunk - 1;
        for (i = 0, j = array.length; i < j; i += chunk) {
            rslt.push(array.slice(i, i + chunk + 1));
        }
        return rslt;
    }

    const SplitList = splitArray(filterList, 4)

    const pages = SplitList.length

    return (
        <Box
            maxWidth="xl"
            sx={{
                m: 'auto',
            }}
        >
            {SplitList.length > 0 && (
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
                        {SplitList[(page - 1)].map((listOffer, index) => (
                            <CardOffreUnique handleClickOpen={handleClickOpen} key={index} listOffer={listOffer} />
                        ))}
                    </Box>
                    <Pagination
                        count={pages}
                        page={page}
                        onChange={handleChange}
                        sx={{
                            margin: "auto",
                            maxWidth: '345px'
                        }}
                    />
                </Box>
            )}
            {!SplitList.length && (
                <Typography
                    variant='body1'
                    sx={{
                        textAlign: 'center',
                        color: '#808080'
                    }}
                >
                    Aucun résultat ne correspond à votre recherche
                </Typography>
            )}
        </Box>
    );
};