import { Box } from '@mui/system';
import React from 'react';
import Typography from '@mui/material/Typography';
import Avatar1 from '../../../assets/avatars/avatar1.jpg';
import Avatar2 from '../../../assets/avatars/avatar2.jpg';
import Avatar3 from '../../../assets/avatars/avatar3.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';

export default function MatchRecruteur() {

    const UsersList = [
        { prenom: 'Bruno', nom: 'Bruno', img: Avatar2, alt: 'img1', message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
        { prenom: 'Luke', nom: 'Skywalker', img: Avatar1, alt: 'image2', message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
        { prenom: 'Bob', nom: 'Sponge', img: Avatar3, alt: 'image2', message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
    ]

    return (
        <Box sx={{ bgcolor: 'primary.main', width: '100%' }}>
            <Typography variant="h2" component="div" sx={{ textAlign: 'center', py: 5 }}>
                Ils ont matchés
            </Typography>
            <Box
                align='center'
                sx={{
                    display: 'flex',
                    pb: 5,
                    mb: 10,
                    justifyContent: { xs: "center", md: "space-around" },
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: "center", md: "none" },
                }}
            >
                {UsersList.map((userList, index) => (
                    <Card key={index} sx={{ mx: 5, textAlign: 'center', bgcolor: 'primary.main', boxShadow: 'none', }}>
                        <Avatar alt={userList.alt} src={userList.img} sx={{ width: 100, height: 100, m: 'auto' }} />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div" sx={{
                                textAlign: 'center'
                            }}>
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
    );
};