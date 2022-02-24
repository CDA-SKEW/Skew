import React from 'react';
import VisiteurLayout from 'layouts/VisiteurLayout';
import { Box } from "@mui/material";
import { Button, Typography } from "@mui/material";
import RecruteurCard from 'assets/images/recruteurCard.jpg';
import { useNavigate } from 'react-router-dom';

import WhyHome from 'components/visiteur/home/WhyHome';
import StatBarHome from 'components/visiteur/home/StatBarHome';

export default function Home() {

    const CardsList = [
        { titre: "Je suis un recruteur", lien: "recruteur", color: "tiers", image: RecruteurCard },
        { titre: "Je suis un candidat", lien: "candidat", color: "secondary", image: RecruteurCard }
    ];
    const navigate = useNavigate();

    return (
        <VisiteurLayout>
            <Typography variant="h2" sx={{ fontSize: { xs: 30, md: 50 }, mx: 5 }}>
                Ici on ne cherche pas un travail <br />
                On le trouve
            </Typography>

            {/* CardHome */}
            <Box maxWidth='xl' disableGutters sx={{ display: 'flex', mx: 'auto', my: 10 }}>
                {CardsList.map((card, index) => (
                    <Button
                        key={index}
                        onClick={() => navigate({ pathname: `/${card.lien}` })}
                        variant='contained'
                        color={card.color}
                        sx={{ width: "45%", m: 'auto', minWidth: 150, maxWidth: 600, height: { xs: 400, md: 500 } }}>
                        <Typography color="initial" sx={{ fontSize: { xs: 20, md: 45 } }}>
                            {card.titre}
                        </Typography>
                    </Button>
                ))}
            </Box>

            <WhyHome />
            <StatBarHome />
        </VisiteurLayout>
    );
};