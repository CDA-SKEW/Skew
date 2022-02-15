import * as React from 'react';
import WhyCandidat1 from '../../../assets/images/WhyCandidat01.jpg';
import WhyCandidat2 from '../../../assets/images/WhyCandidat02.jpg';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function WhyCandidat() {

    const CardsContents = [
        { image: WhyCandidat1, titre: "Trouver votre job", texte: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." },
        { image: WhyCandidat2, titre: "Nos méthodes", texte: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." },
    ]

    return (
        <Container maxWidth="xl">
            {CardsContents.map((cardscontent, index) => (
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
                        image={cardscontent.image}
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
                            {cardscontent.titre}
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            align="justify"
                            sx={{
                                fontSize: { sx: '1rem', md: 20 }
                            }}
                        >
                            {cardscontent.texte}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Container>
    );
}
