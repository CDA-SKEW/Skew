import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CardParagrapheImg ({ index }){
    return (
        <Card sx={{
            my: 20,
            display: "flex",
            bgcolor: "#fff",
            boxShadow: "none",
            justifyContent: { xs: "center", md: "space-around" },
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "none" },
        }}>
            <CardMedia
                component="img"
                image={index.image}
                alt="Pourquoi-nous"
                sx={{
                    minWidth: 340,
                    width: '90%'
                }}
            />
            <CardContent sx={{
                pt: 0,
                px: 2,
                width: '90%',
                verticalAlign: 'top'
            }}>
                <Typography
                    variant="h5"
                >
                    {index.titre}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    align="justify"
                >
                    {index.texte}
                </Typography>
            </CardContent>
        </Card>
    );
};