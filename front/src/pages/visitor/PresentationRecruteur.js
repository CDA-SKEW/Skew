import React from 'react';
import VisiteurLayout from 'layouts/VisiteurLayout';
import WhyRecruteur from 'components/visiteur/WhyRecruteur';
import ContactButton from 'components/visiteur/ContactButton';
import RecrutementBanniere from 'components/visiteur/RecrutementBanniere';
import MethodsRecruteur from 'components/visiteur/MethodsRecruteur';

export default function PresentationRecruteur() {
    return (
        <VisiteurLayout>
            <WhyRecruteur />
            <ContactButton />
            <RecrutementBanniere />
            <MethodsRecruteur />
        </VisiteurLayout>
    );
};