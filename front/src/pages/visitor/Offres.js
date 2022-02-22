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

    const [date, setDate] = useState("");
    const [job, setJob] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("")
    const [profil, setProfil] = useState("")
    const [type, setType] = useState("");
    const [location, setLocation] = useState("");
    const [page, setPage] = useState(1);
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
        setOpen(true);
        setJob(data.titleOffer);
        setImage(data.image);
        setDescription(data.descriptif);
        setProfil(data.profil);
        setDate(data.dateOfferDays);
        setType(data.typeContrat);
        setLocation(data.localisation)
    };
    const handleClose = () => {
        setOpen(false);
        setJob('');
        setImage('');
        setDescription('');
        setProfil('');
        setDate('');
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
                listOffer={listOffer}
                job={job}
                image={image}
                description={description}
                profil={profil}
                date={date}
                type={type}
                location={location}
            />
        </VisiteurLayout>
    );
};

// const listOffer = [
//     {
//         image: Logo1,
//         title: 'Developpeur',
//         name: 'Faceboock',
//         Createdate: '20/06/2021',
//         badge: true,
//         type: 'CDI',
//         town: "Paris",
//         descriptif: 'Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum orci. Donec in ullamcorper lacus, molestie accumsan tortor. Cras tristique leo nulla, quis condimentum nisi volutpat ut. Praesent non ipsum massa. Vestibulum ut consequat sapien. Curabitur mattis felis id dolor tristique lobortis. Donec mattis nunc ut ornare malesuada. Vivamus id congue ipsum.',
//         profil: 'Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum orci. Donec in ullamcorper lacus, molestie accumsan tortor. Cras tristique leo nulla, quis condimentum nisi volutpat ut. Praesent non ipsum massa. Vestibulum ut consequat sapien. Curabitur mattis felis id dolor tristique lobortis. Donec mattis nunc ut ornare malesuada. Vivamus id congue ipsum.'
//     },
// ]