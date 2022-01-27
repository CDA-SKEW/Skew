import React from 'react';
import VisiteurLayout from 'layouts/VisiteurLayout';
import WhyRecruteur from 'components/visiteur/WhyRecruteur';
import { Container } from '@mui/material';
import BaliseRecruteurPres from 'components/visiteur/BalisesRecruteurPres';

export default function PresentationRecruteur () {
    return (
        <VisiteurLayout>
            <Container>
                <WhyRecruteur />
                {/* <BaliseRecruteurPres /> */}
            </Container>
        </VisiteurLayout>
    );
};