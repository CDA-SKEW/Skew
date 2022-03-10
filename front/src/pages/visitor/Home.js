import React from 'react';
import VisiteurLayout from 'layouts/VisiteurLayout';
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import RecruteurCard from 'assets/images/recruteurCard.jpg';
import CandidatCard from 'assets/images/candidatCard.jpg'
import { useNavigate } from 'react-router-dom';
import WhyHome1 from 'assets/images/WhyHome01.jpg';
import WhyHome2 from 'assets/images/WhyHome02.jpg';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import ParagraphCard from 'components/visiteur/ParagraphCard';

export default function Home() {

    const navigate = useNavigate();

    const CardsList = [
        { titre: "Je suis un recruteur", lien: "recruteur", color: "tiers", image: RecruteurCard },
        { titre: "Je suis un candidat", lien: "candidat", color: "secondary", image: CandidatCard }
    ];
    const CardsContents = [
        { image: WhyHome1, titre: "Pourquoi nous?", texte: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", position: true },
        { image: WhyHome2, titre: "Nos méthodes", texte: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", position: false },
    ];
    const StatList = [
        { nombre: "2500", titre: "Candidats" },
        { nombre: "500", titre: "Entreprises" },
        { nombre: "25000", titre: "Offres" }
    ];

    return (
        <VisiteurLayout>
            <Typography variant="h2"
                sx={{
                    fontSize: { xs: 30, md: 55 },
                    fontFamily: "'Indie Flower', cursive"
                }}
            >
                Ici on ne cherche pas un travail <br />
                On le trouve
            </Typography>

            {/* CardHome */}
            <Box maxWidth='xl' disableGutters
                sx={{ display: 'flex', mx: 'auto', my: 10 }}>
                {CardsList.map((card, index) => (
                    <Card
                        key={index}
                        sx={{ width: "45%", m: 'auto', minWidth: 150, maxWidth: 600, }}
                    >
                        <CardActionArea
                            onClick={() => navigate({ pathname: `/${card.lien}` })}

                        >
                            <CardMedia
                                component="img"
                                image={card.image}
                                sx={{
                                    filter: 'sepia(100%) opacity(65%)',
                                    height: 400
                                }}
                            />
                            <Typography color="initial" align='center'
                                sx={{
                                    fontSize: { xs: 20, md: 45 },
                                    fontWeight: 'bold',
                                    position: 'absolute',
                                    top: '20%',
                                    width: "100%",

                                }}>
                                {card.titre}
                            </Typography>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>

            {/* Carte du pourquoi */}
            <Box maxWidth="xl" sx={{ mx: 'auto' }}>
                {CardsContents.map((cardsContent, index) => (
                    <ParagraphCard cardsContent={cardsContent} key={index} />
                ))}
            </Box>

            {/* Barre de statistique */}
            <Box
                maxWidth='xl'
                sx={{ bgcolor: "primary.main", mx: 'auto', my: 10, borderRadius: { sx: 0, md: 50 } }}>
                <Stack direction="row" spacing={2} sx={{ mx: { xs: 0, xl: "75px" } }}>
                    {StatList.map((stat, index) => (
                        <Typography
                            variant='h3' key={index} align='center'
                            sx={{ boxShadow: "none", py: 3, width: '33%', fontSize: { xs: 17, md: 35 } }}>
                            {stat.nombre}
                            <br />
                            {stat.titre}
                        </Typography>
                    ))}
                </Stack>
            </Box>

        </VisiteurLayout>
    );
};