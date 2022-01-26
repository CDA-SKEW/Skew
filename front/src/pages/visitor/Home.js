import React from 'react';
import VisiteurLayout from 'layouts/VisiteurLayout';
import { Container } from '@mui/material';
import CardHome from 'components/visiteur/CardHome';
import WhyHome from 'components/visiteur/WhyHome';
import StatBarHome from 'components/visiteur/StatBarHome';

export default function Home () {
    return (
        <VisiteurLayout>
            <Container
                maxWidth='xl'
                disableGutters
            >
                <CardHome />
                <WhyHome />
                <StatBarHome />
            </Container>
        </VisiteurLayout>
    );
};