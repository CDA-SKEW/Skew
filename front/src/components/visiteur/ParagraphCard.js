import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const ParagraphCard = ({ cardsContent }) => {

    return (
        <Box>
            {cardsContent.position === true && (
                <Card
                    sx={{
                        my: 20, display: "flex", bgcolor: "#fff", boxShadow: "none",
                        justifyContent: { xs: "center", md: "space-around" },
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: { xs: "center", md: "none" }
                    }}>
                    <CardMedia
                        component="img"
                        image={cardsContent.image}
                        alt="Pourquoi-nous"
                        sx={{ minWidth: 340, width: '90%' }} />
                    <CardContent sx={{ pt: 0, px: 2, width: '90%' }}>
                        <Typography variant="h2" sx={{ fontSize: { xs: 35, xl: 45 } }}>{cardsContent.titre}</Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            align="justify"
                            sx={{ fontSize: { sx: '1rem', md: 20 } }}>
                            {cardsContent.texte}
                        </Typography>
                    </CardContent>
                </Card>
            )}
            {cardsContent.position === false && (
                <Card
                    sx={{
                        my: 20, display: "flex", bgcolor: "#fff", boxShadow: "none",
                        justifyContent: { xs: "center", md: "space-around" },
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: { xs: "center", md: "none" },
                    }}>
                    <CardContent sx={{ pt: 0, px: 2, width: '90%' }}>
                        <Typography variant="h2" sx={{ fontSize: { xs: 35, xl: 45 } }}>{cardsContent.titre}</Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            align="justify"
                            sx={{ fontSize: { sx: '1rem', md: 20 } }}>
                            {cardsContent.texte}
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        image={cardsContent.image}
                        alt="Pourquoi-nous"
                        sx={{ minWidth: 340, width: '90%' }} />
                </Card>
            )}
        </Box >
    );
};

export default ParagraphCard;