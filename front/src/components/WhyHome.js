import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WhyHome1 from '../assets/images/WhyHome01.jpg';
import WhyHome2 from '../assets/images/WhyHome02.jpg';
import { Box } from '@mui/system';

export default function WhyHome() {

    const CardsContents = [
        { image: WhyHome1, titre: "Pourquoi nous?", texte: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." },
        { image: WhyHome2, titre: "Nos méthodes", texte: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." },
    ]

    return (
        <Box>
            {CardsContents.map((index) => (
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
            ))}
        </Box>
    );
}
