import React from 'react';
import VisiteurLayout from 'layouts/VisiteurLayout';
import WhyCandidat from 'components/visiteur/presentationCandidat/WhyCandidat';
import CollaborationCandidat from 'components/visiteur/presentationCandidat/CollaborationCandidat';
import ConfianceEntreprise from 'components/visiteur/ConfianceEntreprise';
import LastOffres from 'components/visiteur/presentationCandidat/LastOffres';

export default function PresentationCandidat() {
    return (
        <VisiteurLayout>
            <WhyCandidat />
            <CollaborationCandidat />
            <ConfianceEntreprise />
            <LastOffres />
        </VisiteurLayout>
    );
};