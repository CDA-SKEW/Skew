import React, { useState } from 'react';
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

function CardsHome({ card }) {

    const navigate = useNavigate();
    const [isShownHoverContent, setIsShownHoverContent] = useState(false);

    const handleOverEnter = () => {
        setIsShownHoverContent(true)
    }
    const handleOverLeave = () => {
        setIsShownHoverContent(false)
    }
    return (
        <React.Fragment>
            {!isShownHoverContent && (
                <Card
                    sx={{ width: "45%", m: 'auto', minWidth: 150, maxWidth: 600, }}
                    onMouseEnter={() => handleOverEnter()}
                    onMouseLeave={() => handleOverLeave()}
                >
                    <CardActionArea onClick={() => navigate({ pathname: `/${card.lien}` })}>
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
            )}
            {isShownHoverContent && (
                <Card
                    sx={{ width: "45%", m: 'auto', minWidth: 150, maxWidth: 600, }}
                    onMouseEnter={() => handleOverEnter()}
                    onMouseLeave={() => handleOverLeave()}
                >
                    <CardActionArea onClick={() => navigate({ pathname: `/${card.lien}` })}>
                        <CardMedia
                            component="img"
                            image={card.image}
                            sx={{
                                filter: 'blur(6px)',
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
                            {card.titre2}
                        </Typography>
                    </CardActionArea>
                </Card>
            )}
        </React.Fragment>
    )
}

export default function Home() {

    const CardsList = [
        { titre: "Je suis un recruteur", titre2: 'Tous nos talents à votre disposition', lien: "recruteur", color: "tiers", image: RecruteurCard },
        { titre: "Je suis un candidat", titre2: 'Viens découvrir toutes nos offres d\'emploi', lien: "candidat", color: "secondary", image: CandidatCard }
    ];
    const CardsContents = [
        { image: WhyHome1, titre: "Pourquoi nous?", texte: "Skew est une toute nouvelle plateforme de recherche d'emploi innovante! En effet, nous proposons un lien direct avec les candidat ou employeur, une interface clair et ergonomique ainsi qu'un tableau de bord repertoriant toutes les informations souhaitées pour postuler ou proposer des offres venant de tous domaines.", position: true },
        { image: WhyHome2, titre: "Notre peuple", texte: "Chez Indeed, notre mission est d'aider les gens à trouver un emploi. Nous avons plus de 11,500 les employés du monde entier poursuivent passionnément cet objectif et améliorent le parcours de recrutement grâce à des histoires et des données réelles. Nous favorisons un lieu de travail collaboratif qui s'efforce de créer la meilleure expérience pour les demandeurs d'emploi.", position: false },
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
                    <CardsHome key={index} card={card} />
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
                maxWidth='md'
                sx={{
                    bgcolor: "primary.main",
                    mx: 'auto',
                    my: 10,
                    borderRadius: { sx: 0, md: 50 }
                }}
            >
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