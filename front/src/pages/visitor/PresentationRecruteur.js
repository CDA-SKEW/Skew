import React from 'react';
import VisiteurLayout from 'layouts/VisiteurLayout';
import WhyRecruteur from 'components/visiteur/presentationRecruteur/WhyRecruteur';
import RecrutementBanniere from 'components/visiteur/presentationRecruteur/RecrutementBanniere';
import MethodsRecruteur from 'components/visiteur/presentationRecruteur/MethodsRecruteur';
import ConfianceEntreprise from 'components/visiteur/ConfianceEntreprise';
import MatchRecruteur from 'components/visiteur/presentationRecruteur/MatchRecruteur';

export default function PresentationRecruteur() {
    return (
        <VisiteurLayout>
            <WhyRecruteur />
            <RecrutementBanniere />
            <MethodsRecruteur />
            <ConfianceEntreprise />
            <MatchRecruteur />
        </VisiteurLayout>
    );
};