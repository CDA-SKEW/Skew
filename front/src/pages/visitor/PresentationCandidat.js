import React from 'react';
import WhyCandidat1 from 'assets/images/WhyCandidat01.jpg';
import WhyCandidat2 from 'assets/images/WhyCandidat02.jpg';
import Avatar1 from 'assets/avatars/avatar1.jpg';
import Avatar2 from 'assets/avatars/avatar2.jpg';
import Avatar3 from 'assets/avatars/avatar3.jpg';
import VisiteurLayout from 'layouts/VisiteurLayout';
import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import ParagraphCard from 'components/visiteur/ParagraphCard';
import ConfianceEntreprise from 'components/visiteur/ConfianceEntreprise';

export default function PresentationCandidat() {

    const CardsContents = [
        { image: WhyCandidat1, titre: "Trouver votre job", texte: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", position: true },
        { image: WhyCandidat2, titre: "Nos méthodes", texte: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", position: false },
    ];

    const UsersList = [
        { prenom: 'Bruno', nom: 'Bruno', img: Avatar2, alt: 'img1', message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
        { prenom: 'Luke', nom: 'Skywalker', img: Avatar1, alt: 'image2', message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
        { prenom: 'Bob', nom: 'Sponge', img: Avatar3, alt: 'image2', message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
    ];

    const OffresList = [
        { titre: "Maçon", date: "25/12/2021", type: "CDD", lieu: "Paris" },
        { titre: "Cuisinier", date: "25/12/2021", type: "CDI", lieu: "Monaco" },
        { titre: "Patissier", date: "21/12/2021", type: "CDI", lieu: "Lyon" },
    ];

    return (
        <VisiteurLayout>

            {/* Carte du pourquoi nous */}
            <Box maxWidth="xl">
                {CardsContents.map((cardsContent, index) => (
                    <ParagraphCard cardsContent={cardsContent} key={index} />
                ))}
            </Box>

            {/* Collaboration candidats */}
            <Box sx={{ bgcolor: 'primary.main', width: '100%' }}>
                <Typography variant="h2" component="div" sx={{ textAlign: 'center', py: 5, fontSize: { xs: 35, xl: 45 } }}>
                    Ils ont collaborés avec nous
                </Typography>
                <Box
                    align='center'
                    sx={{
                        display: 'flex', pb: 5,
                        justifyContent: { xs: "center", md: "space-around" },
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: { xs: "center", md: "none" },
                    }}
                >
                    {UsersList.map((userList, index) => (
                        <Card
                            key={index}
                            sx={{ mx: 5, textAlign: 'center', bgcolor: 'primary.main', boxShadow: 'none' }}>
                            <Avatar alt={userList.alt} src={userList.img} sx={{ width: 100, height: 100, m: 'auto' }} />
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

            <ConfianceEntreprise />

            {/* Dernières offres */}
            <Box sx={{ mb: 10, my: 10 }}>
                <Typography variant="h2" component="div" sx={{ textAlign: 'center', my: 2, fontSize: { xs: 35, xl: 45 } }}>
                    Nos dernières offres
                </Typography>
                <Box sx={{ bgcolor: 'primary.main' }}>
                    <List>
                        {OffresList.map((list, index) => (
                            <ListItem
                                key={index}
                                sx={{
                                    bgcolor: "offre.main",
                                    width: '80%',
                                    maxWidth: 1200,
                                    mx: "auto", my: 2, py: 2
                                }}>
                                <ListItemText
                                    primary={
                                        <Typography variant='h4'
                                            sx={{ textAlign: { xs: 'center', md: 'left' }, mb: 3, fontWeight: 'bold' }}>
                                            {list.titre}
                                        </Typography>
                                    }
                                    secondary={
                                        <React.Fragment>
                                            {[{ prop: list.date }, { prop: list.lieu }, { prop: list.type }].map((indice) => (
                                                <Typography
                                                    key={indice.prop}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                    sx={{
                                                        display: 'inline-block',
                                                        width: { xs: "100%", md: 200, lg: 300 },
                                                        fontSize: '25px',
                                                        textAlign: 'center', my: 1
                                                    }}
                                                >
                                                    {indice.prop}
                                                </Typography>
                                            ))}
                                        </React.Fragment>
                                    }
                                    primaryTypographyProps={{ fontWeight: 'bold', fontSize: '25px', mb: 5 }}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
            
        </VisiteurLayout>
    );
};