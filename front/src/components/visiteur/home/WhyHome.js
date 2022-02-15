import * as React from 'react';
import WhyHome1 from '../../../assets/images/WhyHome01.jpg';
import WhyHome2 from '../../../assets/images/WhyHome02.jpg';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function WhyHome() {

    const CardsContents = [
        { image: WhyHome1, titre: "Pourquoi nous?", texte: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." },
        { image: WhyHome2, titre: "Nos méthodes", texte: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." },
    ]

    return (
        <Container maxWidth="xl">
            {CardsContents.map((cardsContent, index) => (
                <Card
                    key={index}
                    sx={{
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
                        image={cardsContent.image}
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
                    }}>
                        <Typography
                            variant="h2"
                        >
                            {cardsContent.titre}
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            align="justify"
                            sx={{
                                fontSize: { sx: '1rem', md: 20 }
                            }}
                        >
                            {cardsContent.texte}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Container>
    );
}
