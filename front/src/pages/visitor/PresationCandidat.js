import React from 'react';
import VisiteurLayout from 'layouts/VisiteurLayout';
import { Container } from '@mui/material';
import WhyCandidat from 'components/visiteur/WhyCandidat';
import CollaborationCandidat from 'components/visiteur/CollaborationCandidat';

const PresentationCandidat = () => {
    return (
        <VisiteurLayout>
            <Container>
                <WhyCandidat />
                <CollaborationCandidat />
            </Container>
        </VisiteurLayout>
    );
};

export default PresentationCandidat;