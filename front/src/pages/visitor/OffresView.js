import { Typography } from '@mui/material';
import MoteurRechercheOffres from 'components/visiteur/MoteurRechercheOffres';
import VisiteurLayout from 'layouts/VisiteurLayout';
import ListAllOffres from 'components/visiteur/ListAllOffres';
import React from 'react';

export default function OffresView () {
    return (
        <VisiteurLayout>
            <Typography variant="h2">
                Plus de 10 000 offres d'emplois sur notre site
            </Typography>
            <MoteurRechercheOffres />
            <ListAllOffres />
        </VisiteurLayout>
    );
};