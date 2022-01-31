import React from 'react';
import VisiteurLayout from 'layouts/VisiteurLayout';
import WhyRecruteur from 'components/visiteur/WhyRecruteur';
import { Container } from '@mui/material';

export default function PresentationRecruteur () {
    return (
        <VisiteurLayout>
            <Container>
                <WhyRecruteur />
            </Container>
        </VisiteurLayout>
    );
};