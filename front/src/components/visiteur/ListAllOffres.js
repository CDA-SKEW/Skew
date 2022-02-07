import { Box } from '@mui/system';
import CardOffer from 'components/CardOffer';
import React from 'react';
import Logo1 from 'assets/images/imageEmployor.png';
import Logo2 from 'assets/images/WhyCandidat01.jpg';
import Logo3 from 'assets/images/WhyCandidat02.jpg';
import Logo4 from 'assets/images/WhyHome01.jpg';
import Logo5 from 'assets/images/WhyHome02.jpg';

export default function ListAllOffres() {

    const listOffer = [
        { image: Logo1, titleOffer: 'Maçon', nameEmployor: 'Maconnerie', dateOfferDays: '01/01/2021', badgeEmployor: true },
        { image: Logo2, titleOffer: 'Developpeur', nameEmployor: 'Google', dateOfferDays: '02/02/2021', badgeEmployor: true },
        { image: Logo3, titleOffer: 'Intégrateur', nameEmployor: 'Faceboock', dateOfferDays: '03/03/2021', badgeEmployor: false },
        { image: Logo4, titleOffer: 'Boulanger', nameEmployor: 'Boulangerie', dateOfferDays: '05/05/2021', badgeEmployor: false },
        { image: Logo5, titleOffer: 'Patissier', nameEmployor: 'Patisserie', dateOfferDays: '04/04/2021', badgeEmployor: true },
        { image: Logo1, titleOffer: 'Professeur', nameEmployor: 'Ecole', dateOfferDays: '02/04/2021', badgeEmployor: true },
        { image: Logo2, titleOffer: 'Cuisinier', nameEmployor: 'Mc Donald', dateOfferDays: '03/05/2021', badgeEmployor: true },
        { image: Logo3, titleOffer: 'Routier', nameEmployor: 'Vinci', dateOfferDays: '21/21/2021', badgeEmployor: true },
        { image: Logo4, titleOffer: 'Mangeur', nameEmployor: 'Nutella', dateOfferDays: '20/06/2021', badgeEmployor: false },
        { image: Logo5, titleOffer: 'Dormeur', nameEmployor: 'MaLiterie', dateOfferDays: '02/08/2021', badgeEmployor: true },
        { image: Logo1, titleOffer: 'Buveur', nameEmployor: 'Evian', dateOfferDays: '21/12/2021', badgeEmployor: true },
    ]

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
            {listOffer.map((listOffer, index) => (
                <Box my={5}>
                    <CardOffer key={index} listOffer={listOffer} />
                </Box>
            ))}
        </Box>
    );
};