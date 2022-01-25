import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CardParagrapheImg = ({index}) => {
    return (
        <Card sx={{
            Width: 1000,
            my: 20,
            display: "flex",
            bgcolor: "#fff",
            boxShadow: "none"
        }}>
            <CardMedia
                component="img"
                height="400"
                image={index.image}
                alt="Pourquoi-nous"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {index.titre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {index.texte}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardParagrapheImg;