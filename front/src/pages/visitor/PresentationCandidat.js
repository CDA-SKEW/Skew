import React from 'react';
import VisiteurLayout from 'layouts/VisiteurLayout';
import WhyCandidat from 'components/visiteur/WhyCandidat';
import CollaborationCandidat from 'components/visiteur/CollaborationCandidat';
import ConfianceCandidat from 'components/visiteur/ConfianceCandidat';
import LastOffres from 'components/visiteur/LastOffres';

export default function PresentationCandidat() {
    return (
        <VisiteurLayout>
            <WhyCandidat />
            <CollaborationCandidat />
            <ConfianceCandidat />
            <LastOffres />
        </VisiteurLayout>
    );
};