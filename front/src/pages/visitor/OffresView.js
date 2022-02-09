import { Typography } from '@mui/material';
import MoteurRechercheOffres from 'components/visiteur/MoteurRechercheOffres';
import VisiteurLayout from 'layouts/VisiteurLayout';
import ListAllOffres from 'components/visiteur/ListAllOffres';
import React, { useState } from 'react';
import Logo1 from 'assets/images/imageEmployor.png';
import Logo2 from 'assets/images/WhyCandidat01.jpg';
import Logo3 from 'assets/images/WhyCandidat02.jpg';
import Logo4 from 'assets/images/WhyHome01.jpg';
import Logo5 from 'assets/images/WhyHome02.jpg';
import LastAllOffres from 'components/visiteur/LastAllOffres';
import Slide from '@mui/material/Slide';
import DialogCardOffreId from 'components/visiteur/DialogCardOffreId';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function OffresView() {

    const [job, setJob] = useState("");
    const [type, setType] = useState("");
    const [location, setLocation] = useState("");
    const [page, setPage] = useState(1);
    const [open, setOpen] = useState(false);

    const listOffer = [
        { image: Logo1, titleOffer: 'Maçon', nameEmployor: 'Maconnerie', dateOfferDays: '01/01/2021', badgeEmployor: true, typeContrat: 'CDI', localisation: "Rouen" },
        { image: Logo2, titleOffer: 'Developpeur', nameEmployor: 'Google', dateOfferDays: '01/01/2021', badgeEmployor: true, typeContrat: 'CDI', localisation: "Paris" },
        { image: Logo3, titleOffer: 'Intégrateur', nameEmployor: 'Faceboock', dateOfferDays: '01/01/2021', badgeEmployor: false, typeContrat: 'CDI', localisation: "Grenoble" },
        { image: Logo4, titleOffer: 'Boulanger', nameEmployor: 'Boulangerie', dateOfferDays: '01/01/2021', badgeEmployor: false, typeContrat: 'CDD', localisation: "Lyon" },
        { image: Logo5, titleOffer: 'Patissier', nameEmployor: 'Patisserie', dateOfferDays: '01/01/2021', badgeEmployor: true, typeContrat: 'CDD', localisation: "Paris" },
        { image: Logo1, titleOffer: 'Maçon', nameEmployor: 'Ecole', dateOfferDays: '01/01/2021', badgeEmployor: true, typeContrat: 'CDD', localisation: "Paris" },
        { image: Logo2, titleOffer: 'Maçon', nameEmployor: 'Mc Donald', dateOfferDays: '01/01/2021', badgeEmployor: true, typeContrat: 'CDD', localisation: "Paris" },
        { image: Logo3, titleOffer: 'Developpeur', nameEmployor: 'Vinci', dateOfferDays: '01/01/2021', badgeEmployor: true, typeContrat: 'Interim', localisation: "Marseille" },
        { image: Logo4, titleOffer: 'Developpeur', nameEmployor: 'Faceboock', dateOfferDays: '22/06/2021', badgeEmployor: false, typeContrat: 'CDI', localisation: "Paris" },
        { image: Logo5, titleOffer: 'Developpeur', nameEmployor: 'MaLiterie', dateOfferDays: '20/06/2021', badgeEmployor: true, typeContrat: 'CDI', localisation: "Lyon" },
        { image: Logo1, titleOffer: 'Developpeur', nameEmployor: 'Faceboock', dateOfferDays: '20/06/2021', badgeEmployor: true, typeContrat: 'CDI', localisation: "Paris" },
    ]

    const handleSearchJob = (value) => {
        setJob(value)
        setPage(1)
    }
    const handleSearchType = (value) => {
        setType(value)
        setPage(1)
    }
    const handleSearchLocation = (value) => {
        setLocation(value)
        setPage(1)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
            <ListAllOffres
                listOffer={listOffer}
                job={job}
                type={type}
                location={location}
                page={page}
                setPage={setPage}
                handleClickOpen={handleClickOpen}
            />
            <LastAllOffres
                listOffer={listOffer}
                handleClickOpen={handleClickOpen}
            />
            <DialogCardOffreId
                open={open}
                handleClose={handleClose}
                Transition={Transition}
                listOffer={listOffer}
            />
        </VisiteurLayout>
    );
};