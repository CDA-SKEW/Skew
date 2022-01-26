import React from 'react';
import VisiteurLayout from 'layouts/VisiteurLayout';
import WhyRecruteur from 'components/visiteur/WhyRecruteur';
import { Container } from '@mui/material';

const PresentationRecruteur = () => {
    return (
        <VisiteurLayout>
            <Container>
                <WhyRecruteur />
            </Container>
        </VisiteurLayout>
    );
};

export default PresentationRecruteur;