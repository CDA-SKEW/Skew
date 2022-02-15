import React, { useState } from 'react';
import { Typography } from '@mui/material';
import VisiteurLayout from 'layouts/VisiteurLayout';
import Logo1 from 'assets/images/imageEmployor.png';
import Logo2 from 'assets/images/WhyCandidat01.jpg';
import Logo3 from 'assets/images/WhyCandidat02.jpg';
import Logo4 from 'assets/images/WhyHome01.jpg';
import Logo5 from 'assets/images/WhyHome02.jpg';
import Slide from '@mui/material/Slide';

import MoteurRechercheOffres from 'components/visiteur/offres/MoteurRechercheOffres';
import ListOffresFiltrees from 'components/visiteur/offres/ListOffresFiltrees';
import LastOffres from 'components/visiteur/offres/LastOffres';
import DialogCardOffreId from 'components/visiteur/offres/DialogCardOffreId';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

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

const listOffer = [
    {
        image: Logo1,
        titleOffer: 'Maçon',
        nameEmployor: 'Maconnerie',
        dateOfferDays: '01/01/2021',
        badgeEmployor: true,
        typeContrat: 'CDI',
        localisation: "Rouen",
        descriptif: 'Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum orci. Donec in ullamcorper lacus, molestie accumsan tortor. Cras tristique leo nulla, quis condimentum nisi volutpat ut. Praesent non ipsum massa. Vestibulum ut consequat sapien. Curabitur mattis felis id dolor tristique lobortis. Donec mattis nunc ut ornare malesuada. Vivamus id congue ipsum.',
        profil: 'Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum orci. Donec in ullamcorper lacus, molestie accumsan tortor. Cras tristique leo nulla, quis condimentum nisi volutpat ut. Praesent non ipsum massa. Vestibulum ut consequat sapien. Curabitur mattis felis id dolor tristique lobortis. Donec mattis nunc ut ornare malesuada. Vivamus id congue ipsum.'
    },
    {
        image: Logo2,
        titleOffer: 'Developpeur',
        nameEmployor: 'Google',
        dateOfferDays: '01/01/2021',
        badgeEmployor: true,
        typeContrat: 'CDI',
        localisation: "Paris",
        descriptif: 'Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum orci. Donec in ullamcorper lacus, molestie accumsan tortor. Cras tristique leo nulla, quis condimentum nisi volutpat ut. Praesent non ipsum massa. Vestibulum ut consequat sapien. Curabitur mattis felis id dolor tristique lobortis. Donec mattis nunc ut ornare malesuada. Vivamus id congue ipsum.',
        profil: 'Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum orci. Donec in ullamcorper lacus, molestie accumsan tortor. Cras tristique leo nulla, quis condimentum nisi volutpat ut. Praesent non ipsum massa. Vestibulum ut consequat sapien. Curabitur mattis felis id dolor tristique lobortis. Donec mattis nunc ut ornare malesuada. Vivamus id congue ipsum.'
    },
    {
        image: Logo3,
        titleOffer: 'Intégrateur',
        nameEmployor: 'Faceboock',
        dateOfferDays: '01/01/2021',
        badgeEmployor: false,
        typeContrat: 'CDI',
        localisation: "Grenoble",
        descriptif: 'Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum orci. Donec in ullamcorper lacus, molestie accumsan tortor. Cras tristique leo nulla, quis condimentum nisi volutpat ut. Praesent non ipsum massa. Vestibulum ut consequat sapien. Curabitur mattis felis id dolor tristique lobortis. Donec mattis nunc ut ornare malesuada. Vivamus id congue ipsum.',
        profil: 'Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum orci. Donec in ullamcorper lacus, molestie accumsan tortor. Cras tristique leo nulla, quis condimentum nisi volutpat ut. Praesent non ipsum massa. Vestibulum ut consequat sapien. Curabitur mattis felis id dolor tristique lobortis. Donec mattis nunc ut ornare malesuada. Vivamus id congue ipsum.'

    },
    {
        image: Logo4,
        titleOffer: 'Boulanger',
        nameEmployor: 'Boulangerie',
        dateOfferDays: '01/01/2021',
        badgeEmployor: false,
        typeContrat: 'CDD',
        localisation: "Lyon",
        descriptif: 'Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum orci. Donec in ullamcorper lacus, molestie accumsan tortor. Cras tristique leo nulla, quis condimentum nisi volutpat ut. Praesent non ipsum massa. Vestibulum ut consequat sapien. Curabitur mattis felis id dolor tristique lobortis. Donec mattis nunc ut ornare malesuada. Vivamus id congue ipsum.',
        profil: 'Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum orci. Donec in ullamcorper lacus, molestie accumsan tortor. Cras tristique leo nulla, quis condimentum nisi volutpat ut. Praesent non ipsum massa. Vestibulum ut consequat sapien. Curabitur mattis felis id dolor tristique lobortis. Donec mattis nunc ut ornare malesuada. Vivamus id congue ipsum.'

    },
    {
        image: Logo5,
        titleOffer: 'Patissier',
        nameEmployor: 'Patisserie',
        dateOfferDays: '01/01/2021',
        badgeEmployor: true, typeContrat: 'CDD',
        localisation: "Paris",
        descriptif: 'Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum orci. Donec in ullamcorper lacus, molestie accumsan tortor. Cras tristique leo nulla, quis condimentum nisi volutpat ut. Praesent non ipsum massa. Vestibulum ut consequat sapien. Curabitur mattis felis id dolor tristique lobortis. Donec mattis nunc ut ornare malesuada. Vivamus id congue ipsum.',
        profil: 'Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum orci. Donec in ullamcorper lacus, molestie accumsan tortor. Cras tristique leo nulla, quis condimentum nisi volutpat ut. Praesent non ipsum massa. Vestibulum ut consequat sapien. Curabitur mattis felis id dolor tristique lobortis. Donec mattis nunc ut ornare malesuada. Vivamus id congue ipsum.'
    },
    {
        image: Logo1,
        titleOffer: 'Maçon',
        nameEmployor: 'Ecole',
        dateOfferDays: '01/01/2021',
        badgeEmployor: true,
        typeContrat: 'CDD',
        localisation: "Paris",
        descriptif: 'Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum orci. Donec in ullamcorper lacus, molestie accumsan tortor. Cras tristique leo nulla, quis condimentum nisi volutpat ut. Praesent non ipsum massa. Vestibulum ut consequat sapien. Curabitur mattis felis id dolor tristique lobortis. Donec mattis nunc ut ornare malesuada. Vivamus id congue ipsum.',
        profil: 'Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum orci. Donec in ullamcorper lacus, molestie accumsan tortor. Cras tristique leo nulla, quis condimentum nisi volutpat ut. Praesent non ipsum massa. Vestibulum ut consequat sapien. Curabitur mattis felis id dolor tristique lobortis. Donec mattis nunc ut ornare malesuada. Vivamus id congue ipsum.'
    },
    {
        image: Logo2,
        titleOffer: 'Maçon',
        nameEmployor: 'Mc Donald',
        dateOfferDays: '01/01/2021',
        badgeEmployor: true,
        typeContrat: 'CDD',
        localisation: "Paris",
        descriptif: 'Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum orci. Donec in ullamcorper lacus, molestie accumsan tortor. Cras tristique leo nulla, quis condimentum nisi volutpat ut. Praesent non ipsum massa. Vestibulum ut consequat sapien. Curabitur mattis felis id dolor tristique lobortis. Donec mattis nunc ut ornare malesuada. Vivamus id congue ipsum.',
        profil: 'Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum orci. Donec in ullamcorper lacus, molestie accumsan tortor. Cras tristique leo nulla, quis condimentum nisi volutpat ut. Praesent non ipsum massa. Vestibulum ut consequat sapien. Curabitur mattis felis id dolor tristique lobortis. Donec mattis nunc ut ornare malesuada. Vivamus id congue ipsum.'
    },
    {
        image: Logo3,
        titleOffer: 'Developpeur',
        nameEmployor: 'Vinci',
        dateOfferDays: '01/01/2021',
        badgeEmployor: true,
        typeContrat: 'Interim',
        localisation: "Marseille",
        descriptif: 'Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum orci. Donec in ullamcorper lacus, molestie accumsan tortor. Cras tristique leo nulla, quis condimentum nisi volutpat ut. Praesent non ipsum massa. Vestibulum ut consequat sapien. Curabitur mattis felis id dolor tristique lobortis. Donec mattis nunc ut ornare malesuada. Vivamus id congue ipsum.',
        profil: 'Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum orci. Donec in ullamcorper lacus, molestie accumsan tortor. Cras tristique leo nulla, quis condimentum nisi volutpat ut. Praesent non ipsum massa. Vestibulum ut consequat sapien. Curabitur mattis felis id dolor tristique lobortis. Donec mattis nunc ut ornare malesuada. Vivamus id congue ipsum.'

    },
    {
        image: Logo4,
        titleOffer: 'Developpeur',
        nameEmployor: 'Faceboock',
        dateOfferDays: '22/06/2021',
        badgeEmployor: false,
        typeContrat: 'CDI',
        localisation: "Paris",
        descriptif: 'Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum orci. Donec in ullamcorper lacus, molestie accumsan tortor. Cras tristique leo nulla, quis condimentum nisi volutpat ut. Praesent non ipsum massa. Vestibulum ut consequat sapien. Curabitur mattis felis id dolor tristique lobortis. Donec mattis nunc ut ornare malesuada. Vivamus id congue ipsum.',
        profil: 'Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum orci. Donec in ullamcorper lacus, molestie accumsan tortor. Cras tristique leo nulla, quis condimentum nisi volutpat ut. Praesent non ipsum massa. Vestibulum ut consequat sapien. Curabitur mattis felis id dolor tristique lobortis. Donec mattis nunc ut ornare malesuada. Vivamus id congue ipsum.'
    },
    {
        image: Logo5,
        titleOffer: 'Developpeur',
        nameEmployor: 'MaLiterie',
        dateOfferDays: '20/06/2021',
        badgeEmployor: true,
        typeContrat: 'CDI',
        localisation: "Lyon",
        descriptif: 'Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum orci. Donec in ullamcorper lacus, molestie accumsan tortor. Cras tristique leo nulla, quis condimentum nisi volutpat ut. Praesent non ipsum massa. Vestibulum ut consequat sapien. Curabitur mattis felis id dolor tristique lobortis. Donec mattis nunc ut ornare malesuada. Vivamus id congue ipsum.',
        profil: 'Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum orci. Donec in ullamcorper lacus, molestie accumsan tortor. Cras tristique leo nulla, quis condimentum nisi volutpat ut. Praesent non ipsum massa. Vestibulum ut consequat sapien. Curabitur mattis felis id dolor tristique lobortis. Donec mattis nunc ut ornare malesuada. Vivamus id congue ipsum.'
    },
    {
        image: Logo1,
        titleOffer: 'Developpeur',
        nameEmployor: 'Faceboock',
        dateOfferDays: '20/06/2021',
        badgeEmployor: true,
        typeContrat: 'CDI',
        localisation: "Paris",
        descriptif: 'Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum orci. Donec in ullamcorper lacus, molestie accumsan tortor. Cras tristique leo nulla, quis condimentum nisi volutpat ut. Praesent non ipsum massa. Vestibulum ut consequat sapien. Curabitur mattis felis id dolor tristique lobortis. Donec mattis nunc ut ornare malesuada. Vivamus id congue ipsum.',
        profil: 'Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum orci. Donec in ullamcorper lacus, molestie accumsan tortor. Cras tristique leo nulla, quis condimentum nisi volutpat ut. Praesent non ipsum massa. Vestibulum ut consequat sapien. Curabitur mattis felis id dolor tristique lobortis. Donec mattis nunc ut ornare malesuada. Vivamus id congue ipsum.'
    },
]