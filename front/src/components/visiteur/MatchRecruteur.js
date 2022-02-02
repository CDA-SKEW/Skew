import { Box } from '@mui/system';
import React from 'react';
import Typography from '@mui/material/Typography';
import Avatar1 from '../../assets/avatars/avatar1.jpg';
import Avatar2 from '../../assets/avatars/avatar2.jpg';
import Avatar3 from '../../assets/avatars/avatar3.jpg';
import CardUserIntervention from './CardUserIntervention';

export default function MatchRecruteur () {

    const UsersList = [
        { key: 1, prenom: 'Bruno', nom: 'Bruno', img: Avatar2, alt: 'img1', message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
        { key: 2, prenom: 'Luke', nom: 'Skywalker', img: Avatar1, alt: 'image2', message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
        { key: 3, prenom: 'Bob', nom: 'Sponge', img: Avatar3, alt: 'image2', message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
    ]
    
    return (
        <Box sx={{
            bgcolor: '#FFD9B8',
            width: '100%'
        }}>
            <Typography variant="h2" component="div" sx={{
                textAlign: 'center',
                py: 5
            }}>
                Ils ont matchés
            </Typography>
            <Box
            align= 'center' 
            sx={{
                display: 'flex',
                pb: 5,
                mb: 10,
                justifyContent: { xs: "center", md: "space-around" },
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "center", md: "none" },
            }}
            >
                {UsersList.map((index) => (
                    <CardUserIntervention key={index.key} index={index} />
                ))}
            </Box>
        </Box>
    );
};