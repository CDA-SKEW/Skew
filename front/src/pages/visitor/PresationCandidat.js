import React from 'react';
import VisiteurLayout from 'layouts/VisiteurLayout';
import { Container } from '@mui/material';
import WhyCandidat from 'components/visiteur/WhyCandidat';

const PresentationCandidat = () => {
    return (
        <VisiteurLayout>
            <Container>
                <WhyCandidat />
            </Container>
        </VisiteurLayout>
    );
};

export default PresentationCandidat;