import React, { useState } from 'react';
import { Typography } from '@mui/material';
import VisiteurLayout from 'layouts/VisiteurLayout';
import Slide from '@mui/material/Slide';

import MoteurRechercheOffres from 'components/visiteur/offres/MoteurRechercheOffres';
import ListOffresFiltrees from 'components/visiteur/offres/ListOffresFiltrees';
import LastOffres from 'components/visiteur/offres/LastOffres';
import DialogCardOffreId from 'components/visiteur/offres/DialogCardOffreId';

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

    return (
        <VisiteurLayout>
            <Typography variant="h2">
                Plus de 10 000 offres d'emplois sur notre site
            </Typography>
            <MoteurRechercheOffres
                handleSearchJob={handleSearchJob}
                handleSearchType={handleSearchType}
                handleSearchLocation={handleSearchLocation}
            />
            <ListOffresFiltrees
                listOffer={listOffer}
                job={job}
                type={type}
                location={location}
                page={page}
                setPage={setPage}
                handleClickOpen={handleClickOpen}
            />
            <LastOffres
                listOffer={listOffer}
                handleClickOpen={handleClickOpen}
            />
            <DialogCardOffreId
                open={open}
                handleClose={handleClose}
                Transition={Transition}
                data={valueModal}
            />
        </VisiteurLayout>
    );
};