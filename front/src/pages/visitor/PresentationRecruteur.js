import React from 'react';
import VisiteurLayout from 'layouts/VisiteurLayout';
import WhyCandidat1 from 'assets/images/WhyCandidat01.jpg';
import { Box } from "@mui/material";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import RerutementSimplifie from 'assets/images/recrutementSimplifie.jpg';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

import ConfianceEntreprise from 'components/visiteur/ConfianceEntreprise';
import MatchRecruteur from 'components/visiteur/presentationRecruteur/MatchRecruteur';

export default function PresentationRecruteur() {

    const navigate = useNavigate();

    const BaliseList = [
        { titre: "20 000 Candidats" },
        { titre: "10 000 Recrutements" },
    ]
    const ContactList = [
        { text: "Contactez-nous", link: 'contactus' },
        { text: "06 06 06 06 06", link: 'contactus' }
    ]

    const MethodsList = [
        { titre: "Publicités", icon: <VisibilityIcon sx={{ fontSize: "75px", display: 'block', mx: 'auto', mt: 5 }} />, text: "Bénéficiez d'une meilleure visibilité auprès des talents que vous recherchez, grâce à notre réseau de sites et nos partenaires." },
        { titre: "Connections", icon: <SearchIcon sx={{ fontSize: "75px", display: 'block', mx: 'auto', mt: 5 }} />, text: "Entrez en contact avec les candidats qui vous intéressent, grâce à notre technologie de recherche et notre plateforme de communication." },
        { titre: "Solutions", icon: <EmojiObjectsIcon sx={{ fontSize: "75px", display: 'block', mx: 'auto', mt: 5 }} />, text: "Prenez des décisions éclairées grâce à notre gamme de logiciels, de services et d'outils d'analyses." },
    ]

    return (
        <VisiteurLayout>
            {/* Présentation agence à l employeur */}
            <Box sx={{
                maxWidth: { lg: 'lg', xl: 'xl' }
            }}
                mx={'auto'} >
                <Card sx={{
                    my: 10, display: "flex", bgcolor: "#fff", boxShadow: "none",
                    justifyContent: { xs: "center", md: "space-around" },
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: "center", md: "none" },
                }}>
                    <CardMedia
                        component="img"
                        image={WhyCandidat1}
                        alt="Pourquoi-nous"
                        sx={{ minWidth: 340, width: '90%', minHeight: 390 }}
                    />
                    <CardContent sx={{ pt: 0, px: 2, width: '90%' }}>
                        <Typography variant="h2" sx={{ fontSize: { xs: 35, xl: 45 } }}>
                            Vous recherchez de nouveaux talents
                        </Typography>
                        <Typography
                            variant="body2" color="text.secondary" align="justify"
                            sx={{ fontSize: { sx: '1rem', md: 15, xl: 20 } }}
                        >
                            Notre CVthèque vous permet de trier et trouver les bons candidats plus facilement et de les contacter plus rapidement, de façon automatisée et personnalisée. Plus d’instantanéité, moins de tâches chronophages, pour vous faire gagner en efficacité et dégager du temps pour construire une relation de confiance avec les candidats et les embaucher.
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex', flexWrap: 'wrap', pt: 3, width: '100%',
                                justifyContent: { xs: "center", md: "space-around" },
                            }}
                        >
                            {BaliseList.map((list, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        bgcolor: "primary.main", my: 1,
                                        mx: 'auto', width: 150,
                                        display: 'flex', justifyContent: "center",
                                    }}>
                                    <Typography variant="h6" color="initial">
                                        {list.titre}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </CardContent>
                </Card>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: { xs: "center", md: "space-around" },
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: { xs: "center", md: "none" },
                    }}
                >
                    {ContactList.map((contactList, index) => (
                        <Button
                            key={index}
                            variant="contained"
                            sx={{
                                bgcolor: 'secondary.main', py: 3, mb: 10,
                                mx: 'auto', width: 300, fontSize: 20,
                                display: 'flex', justifyContent: "center"
                            }}
                            onClick={() => navigate({ pathname: `/${contactList.link}` })}
                        >
                            {contactList.text}
                        </Button>
                    ))}
                </Box>
            </Box>

            {/* Recrutement simplifé */}
            <Box sx={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${RerutementSimplifie})`,
                // backgroundBlendMode: 'saturation',
                backgroundSize: 'cover',
                width: '100%', my: 3
            }}>
                <Box>
                    <Typography variant="h2" color="initial"
                        sx={{ pb: 2, pt: 20, fontSize: { xs: 35, xl: 45 }, color: '#fff' }}
                    >
                        Un recrutement simplifé
                    </Typography>
                    <Typography align='justify'
                        sx={{ px: { xs: 3, md: 30 }, pb: 20, fontSize: { sx: '1rem', md: 20 }, color: '#fff' }}>
                        Les petites entreprises n’ont pas les mêmes besoins que les grandes en termes de recrutement. Le secteur public ou les entreprises spécialisées en recrutement de même. SKEW a développé des solutions répondant aux problématiques de chaque entreprise.
                    </Typography>
                </Box>
            </Box>

            {/* Methodes */}
            <Box>
                <Typography variant="h2" color="initial" sx={{ fontSize: { xs: 35, xl: 45 } }}>
                    Nos méthodes
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: { xs: "center", md: "space-around" },
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: { xs: "center", md: "stretch" },
                    }}
                >
                    {MethodsList.map((method, index) => (
                        <Card key={index} sx={{ bgcolor: "primary.main", width: 300, m: 5, }}>
                            {method.icon}
                            <Typography variant="h4" color="initial">
                                {method.titre}
                            </Typography>
                            <Typography
                                variant="body1"
                                color="initial"
                                sx={{ px: 5, pb: 3, fontSize: { sx: '1rem', md: 20 } }}
                            >
                                {method.text}
                            </Typography>
                        </Card>
                    ))}
                </Box>
            </Box>

            <ConfianceEntreprise />
            <MatchRecruteur />
        </VisiteurLayout>
    );
};