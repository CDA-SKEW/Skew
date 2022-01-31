import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

export default function CardUserIntervention({ index }) {
    return (
        <Card 
        sx={{
            // width: '30%',
            mx: 5,
            textAlign: 'center',
            bgcolor: '#FFD9B8',
            boxShadow: 'none',
        }}>
            <Avatar alt={index.alt} src={index.img} sx={{
                width: 100,
                height: 100,
                m: 'auto'
            }} />
            <CardContent>
                <Typography gutterBottom variant="h3" component="div" sx={{
                    textAlign: 'center'
                }}>
                    {index.prenom} {index.nom}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{
                    textAlign: 'justify',
                    fontSize: {sx: 10, md: 20}
                }}>
                    {index.message}
                </Typography>
            </CardContent>
        </Card>
    );
}
