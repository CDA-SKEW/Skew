import React from 'react';
import VisiteurLayout from 'layouts/VisiteurLayout';
import { Container } from '@mui/material';
import CardHome from 'components/CardHome';
import WhyHome from 'components/WhyHome';
import StatBarHome from 'components/StatBarHome';

const Home = () => {
    return (
        <VisiteurLayout>
            <Container>
                <CardHome />
                <WhyHome />
                <StatBarHome />
            </Container>
        </VisiteurLayout>
    );
};

export default Home;