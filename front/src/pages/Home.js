import React from 'react';
import VisiteurLayout from 'layouts/VisiteurLayout';
import { Container } from '@mui/material';
import CardHome from 'components/CardHome';

const Home = () => {
    return (
        <VisiteurLayout>
            <Container>
                <CardHome />
            </Container>
        </VisiteurLayout>
    );
};

export default Home;