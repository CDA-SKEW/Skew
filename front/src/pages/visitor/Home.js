import React from 'react';
import VisiteurLayout from 'layouts/VisiteurLayout';
import CardHome from 'components/visiteur/home/CardHome';
import WhyHome from 'components/visiteur/home/WhyHome';
import StatBarHome from 'components/visiteur/home/StatBarHome';
import { Typography } from '@mui/material';

export default function Home() {
    return (
        <VisiteurLayout>
            <Typography variant="h2" sx={{fontSize:{xs: 30, md: 50}, mx: 5}}>
                Ici on ne cherche pas un travail <br/>
                On le trouve
            </Typography>
            <CardHome />
            <WhyHome />
            <StatBarHome />
        </VisiteurLayout>
    );
};