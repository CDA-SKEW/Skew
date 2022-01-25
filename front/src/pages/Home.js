import React from 'react';
import VisiteurLayout from 'layouts/VisiteurLayout';
import { Container } from '@mui/material';
import CardHome from 'components/CardHome';
import WhyHome from 'components/WhyHome';

const Home = () => {
    return (
        <VisiteurLayout>
            <Container>
                <CardHome />
                <WhyHome />
            </Container>
        </VisiteurLayout>
    );
};

export default Home;