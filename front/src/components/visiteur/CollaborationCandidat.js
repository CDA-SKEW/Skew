import { Box } from '@mui/system';
import React from 'react';
import Typography from '@mui/material/Typography';
import Avatar1 from '../../assets/avatars/avatar1.jpg';
import Avatar2 from '../../assets/avatars/avatar2.jpg';
import CardUserIntervention from './CardUserIntervention';

const CollaborationCandidat = () => {

    const UsersList = [
        { key: 1, prenom: 'Bruno', nom: 'Bruno', img: Avatar2, alt: 'img1', message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
        { key: 2, prenom: 'Luke', nom: 'Skywalker', img: Avatar1, alt: 'image2', message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
    ]
    return (
        <Box sx={{
            bgcolor: '#FFD9B8',
            width: '100%'
        }}>
            <Typography variant="h5" component="div" sx={{
                textAlign: 'center'
            }}>
                Ils ont collaborés avec nous
            </Typography>
            <Box sx={{
                display: 'flex'
            }}>
                {UsersList.map((index) => (
                    <CardUserIntervention key={index.key} index={index} />
                ))}
            </Box>
        </Box>
    );
};

export default CollaborationCandidat;