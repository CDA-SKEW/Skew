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
import Avatar1 from 'assets/avatars/avatar1.jpg';
import Avatar2 from 'assets/avatars/avatar2.jpg';
import Avatar3 from 'assets/avatars/avatar3.jpg';
import Avatar from '@mui/material/Avatar';

import ConfianceEntreprise from 'components/visiteur/ConfianceEntreprise';

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

    const UsersList = [
        { prenom: 'Bruno', nom: 'Bruno', img: Avatar2, alt: 'img1', message: 'C’est tellement motivant de travailler dans une compagnie si ambitieuse, avec les consommateurs au centre de ses préoccupations pour élaborer ses stratégies de marques. Ce qui m’a le plus impressionné depuis mon arrivée chez Bel, est l’expertise et la qualité des gens qui s’y trouvent, c’est ce qui en fait sa richesse !.' },
        { prenom: 'Luke', nom: 'Skywalker', img: Avatar1, alt: 'image2', message: 'Bel Canada est une compagnie avec une réelle ambition, non seulement en termes de performance et de croissance, mais aussi, en termes de développement et bien-être de ses collaborateurs. Travailler dans une compagnie qui offre un environnement de travail convivial et positif fait la différence!' },
        { prenom: 'Bob', nom: 'Sponge', img: Avatar3, alt: 'image2', message: 'Travailler chez Bel Canada offre le meilleur de deux mondes. On est à la fois une petite équipe au sein d’une multinationale. Cela veut dire qu’on a le contact humain plus personnel et l’atmosphère de travail agréable, mais également les moyens, les ambitions et des projets d’envergure d’un groupe international.' },
    ]

    return (
        <VisiteurLayout>
            {/* Présentation agence à l employeur */}
            <Box sx={{ maxWidth: { lg: 'lg', xl: 'xl' } }} mx={'auto'} >
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

            {/* Match recruteur */}
            <Box sx={{ bgcolor: 'primary.main', width: '100%' }}>
                <Typography variant="h2" component="div"
                    sx={{ textAlign: 'center', py: 5, fontSize: { xs: 35, xl: 45 } }}>
                    Ils ont matchés
                </Typography>
                <Box
                    align='center'
                    sx={{
                        display: 'flex', pb: 5, mb: 10,
                        justifyContent: { xs: "center", md: "space-around" },
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: { xs: "center", md: "none" },
                    }}
                >
                    {UsersList.map((userList, index) => (
                        <Card key={index} sx={{ mx: 5, textAlign: 'center', bgcolor: 'primary.main', boxShadow: 'none', }}>
                            <Avatar alt={userList.alt} src={userList.img} sx={{ width: 125, height: 125, m: 'auto' }} />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div" sx={{ textAlign: 'center' }}>
                                    {userList.prenom} {userList.nom}
                                </Typography>
                                <Typography variant="body2" color="text.secondary"
                                    sx={{ textAlign: 'justify', fontSize: { sx: 10, md: 20 } }}>
                                    {userList.message}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>
        </VisiteurLayout>
    );
};