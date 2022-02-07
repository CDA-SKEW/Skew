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

export default function OffresView() {

    const [job, setJob] = useState("");
    const [type, setType] = useState("");
    const [location, setLocation] = useState("");

    const listOffer = [
        { image: Logo1, titleOffer: 'Maçon', nameEmployor: 'Maconnerie', dateOfferDays: '01/01/2021', badgeEmployor: true },
        { image: Logo2, titleOffer: 'Developpeur', nameEmployor: 'Google', dateOfferDays: '01/01/2021', badgeEmployor: true },
        { image: Logo3, titleOffer: 'Intégrateur', nameEmployor: 'Faceboock', dateOfferDays: '01/01/2021', badgeEmployor: false },
        { image: Logo4, titleOffer: 'Boulanger', nameEmployor: 'Boulangerie', dateOfferDays: '01/01/2021', badgeEmployor: false },
        { image: Logo5, titleOffer: 'Patissier', nameEmployor: 'Patisserie', dateOfferDays: '01/01/2021', badgeEmployor: true },
        { image: Logo1, titleOffer: 'Maçon', nameEmployor: 'Ecole', dateOfferDays: '01/01/2021', badgeEmployor: true },
        { image: Logo2, titleOffer: 'Maçon', nameEmployor: 'Mc Donald', dateOfferDays: '01/01/2021', badgeEmployor: true },
        { image: Logo3, titleOffer: 'Developpeur', nameEmployor: 'Vinci', dateOfferDays: '01/01/2021', badgeEmployor: true },
        { image: Logo4, titleOffer: 'Developpeur', nameEmployor: 'Faceboock', dateOfferDays: '22/06/2021', badgeEmployor: false },
        { image: Logo5, titleOffer: 'Developpeur', nameEmployor: 'MaLiterie', dateOfferDays: '20/06/2021', badgeEmployor: true },
        { image: Logo1, titleOffer: 'Developpeur', nameEmployor: 'Faceboock', dateOfferDays: '20/06/2021', badgeEmployor: true },
    ]

    const handleSearchJob = (value) => {
        setJob(value)
    }
    const handleSearchType = (value) => {
        setType(value)
    }
    const handleSearchLocation = (value) => {
        setLocation(value)
    }

    // const submitFormSearch = () => {
    //     console.log('submitFormSearch', job, type, location,)
    //     if (job || type || location) {
    //         setJob('')
    //         setType('')
    //         setLocation('')
    //     }
    // }

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
            />
        </VisiteurLayout>
    );
};