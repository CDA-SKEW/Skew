import * as React from 'react';
import WhyCandidat1 from '../../assets/images/WhyCandidat01.jpg';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function WhyCandidat() {

    const BaliseList = [
        { key: 1, titre: "20 000 Candidats" },
        { key: 2, titre: "10 000 Recrutements" },
        { key: 3, titre: "4 consultants" },
    ]

    return (
        <Box>
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
                    image={WhyCandidat1}
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
                        Vous recherchez de nouveaux talents
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        align="justify"
                    >
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </Typography>
                    {BaliseList.map((index) => (
                        <Box
                            sx={{
                                bgcolor: "#FFD9B8"
                            }}>
                            <Typography variant="body1" color="initial">
                                {index.titre}
                            </Typography>
                        </Box>
                    ))}
                </CardContent>
            </Card>

        </Box>
    );
}
