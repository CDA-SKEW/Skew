import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CardParagrapheImg = ({ index }) => {
    return (
        <Card sx={{
            Width: 1000,
            my: 20,
            display: "flex",
            bgcolor: "#fff",
            boxShadow: "none",
            display: "flex",
            justifyContent: { xs: "center", md: "space-around" },
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "none" },
        }}>
            <CardMedia
                component="img"
                image={index.image}
                alt="Pourquoi-nous"
                sx={{
                    maxWidth: "40%",
                    minWidth: "340px",
                }}
            />
            <CardContent sx={{
                pt: 0,
                px: 2
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

export default CardParagrapheImg;