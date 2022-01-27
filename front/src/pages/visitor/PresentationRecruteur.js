import React from 'react';
import VisiteurLayout from 'layouts/VisiteurLayout';
import WhyRecruteur from 'components/visiteur/WhyRecruteur';
import { Container } from '@mui/material';
import ContactButton from 'components/visiteur/ContactButton';

export default function PresentationRecruteur() {
    return (
        <VisiteurLayout>
            <Container>
                <WhyRecruteur />
                <ContactButton />
            </Container>
        </VisiteurLayout>
    );
};