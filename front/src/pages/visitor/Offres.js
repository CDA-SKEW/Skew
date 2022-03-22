import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import VisiteurLayout from 'layouts/VisiteurLayout';
import Slide from '@mui/material/Slide';
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import TextField from '@mui/material/TextField';
import Pagination from '@mui/material/Pagination';

import DialogCardOffreId from 'components/visiteur/offres/DialogCardOffreId';
import CardOffreUnique from 'components/visiteur/offres/CardOffreUnique';

import { useSelector } from "react-redux";
import { getOffreVisiteur } from "../../store/actions/OffreVisiteurActions"
import { store } from 'store';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

store.dispatch(getOffreVisiteur())

export default function Offres() {

    const [job, setJob] = useState("");
    const [type, setType] = useState("");
    const [location, setLocation] = useState("");
    const [page, setPage] = useState(1);
    const [valueModal, setValueModal] = useState({});
    const [open, setOpen] = useState(false);

    const listOffer = useSelector(state => state.offreVisiteur.listOffer)

    const handleSearchJob = (value) => {
        setJob(value);
        setPage(1);
    };
    const handleSearchType = (value) => {
        setType(value);
        setPage(1);
    };
    const handleSearchLocation = (value) => {
        setLocation(value);
        setPage(1);
    };
    const handleClickOpen = (data) => {
        setValueModal(data)
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setJob('');
        setType('');
        setLocation('');
    };

    const handleChange = (event, value) => { setPage(value); };

    const title = (item) => item.title.toLowerCase().includes(job.toLowerCase());
    const types = (item2) => item2.type.toLowerCase().includes(type.toLowerCase());
    const locations = (item3) => item3.town.toLowerCase().includes(location.toLowerCase());

    const filterList = listOffer
        .filter((item) => title(item))
        .filter((item2) => types(item2))
        .filter((item3) => locations(item3))

    function splitArray(array, chunk) {
        var i, j, rslt = [];
        chunk = chunk - 1;
        for (i = 0, j = array.length; i < j; i += chunk) { rslt.push(array.slice(i, i + chunk + 1)); }
        return rslt;
    }

    const SplitList = splitArray(filterList, 8)
    const pages = SplitList.length

    return (
        <VisiteurLayout>
            <Typography variant="h2"
                sx={{
                    fontSize: { xs: 30, md: 55 },
                    fontFamily: "'Indie Flower', cursive"
                }}
            >
                Plus de 10 000 offres d'emplois sur notre site
            </Typography>

            {/* Moteur de recherche d'offres */}
            <Paper
                component="form"
                sx={{
                    display: { xs: 'block', md: "flex" },
                    alignItems: "center", bgcolor: '#fff',
                    width: { xs: 350, md: 600, lg: 900 },
                    height: { md: 75 },
                    mb: 10, mx: "auto", p: 3,
                    boxShadow: '0 0 25px #1e90ff',
                }}
            >
                <TextField
                    placeholder="Job" name='job' fullWidth variant='standard'
                    onChange={(e) => handleSearchJob(e.target.value)}
                    sx={{ width: 300 }}
                />
                <Divider variant='fullWidth' sx={{ m: 0.5, }} orientation="vertical" />
                <TextField
                    placeholder="Type" name='type' fullWidth variant='standard'
                    onChange={(e) => handleSearchType(e.target.value)}
                    sx={{ width: 300 }}
                />
                <Divider variant='fullWidth' sx={{ m: 0.5 }} orientation="vertical" />
                <TextField
                    placeholder="Localisation" name='location' fullWidth variant='standard'
                    onChange={(e) => handleSearchLocation(e.target.value)}
                    sx={{ width: 300 }}
                />
            </Paper>

            {/* Liste des offres accueil */}
            <Box maxWidth="lg" sx={{ m: 'auto', }}>
                {SplitList.length > 0 && (
                    <Box sx={{ m: 'auto' }}>
                        <Box
                            sx={{
                                display: 'flex', flexWrap: 'wrap', m: 'auto',
                                justifyContent: { xs: "center", md: "space-around" },
                                flexDirection: { xs: "column", md: "row" },
                                alignItems: { xs: "center", md: "none" },
                            }}
                        >
                            {SplitList[(page - 1)].map((listOffer, index) => (
                                <CardOffreUnique
                                    handleClickOpen={handleClickOpen}
                                    key={index}
                                    listOffer={listOffer}
                                />
                            ))}
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Pagination
                                count={pages} page={page}
                                onChange={handleChange}
                                size='large' sx={{ margin: "auto" }}
                            />
                        </Box>
                    </Box>
                )}
                {!SplitList.length && (
                    <Typography variant='body1' sx={{ textAlign: 'center', color: '#808080' }}>
                        Aucun résultat ne correspond à votre recherche
                    </Typography>
                )}
            </Box>

            <DialogCardOffreId
                open={open} handleClose={handleClose}
                Transition={Transition} data={valueModal}
            />
        </VisiteurLayout>
    );
};