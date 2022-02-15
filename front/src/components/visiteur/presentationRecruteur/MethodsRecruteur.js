import React from 'react';
import { Card, Box, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


export default function MethodsRecruteur() {

    const MethodsList = [
        { titre: "Nos outils", text: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed posuere egestas nunc ut tempus. Fusce sagittis bibendum est. Pellentesque eu tortor euismod, varius odio ac, auctor arcu." },
        { titre: "Nos tests", text: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed posuere egestas nunc ut tempus. Fusce sagittis bibendum est. Pellentesque eu tortor euismod, varius odio ac, auctor arcu." },
        { titre: "Nos garanties", text: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed posuere egestas nunc ut tempus. Fusce sagittis bibendum est. Pellentesque eu tortor euismod, varius odio ac, auctor arcu." },
    ]

    return (
        <Box>
            <Typography variant="h2" color="initial">
                Nos méthodes
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "space-around" },
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: "center", md: "none" },
                }}
            >
                {MethodsList.map((method, index) => (
                    <Card key={index} sx={{ bgcolor: "primary.main", width: 300, m: 5, }}                    >
                        <SearchIcon
                            sx={{ fontSize: "75px", display: 'block', mx: 'auto', mt: 5 }}
                        />
                        <Typography variant="h4" color="initial">
                            {method.titre}
                        </Typography>
                        <Typography
                            variant="body1"
                            color="initial"
                            sx={{ px: 5, pb: 3, fontSize: { sx: '1rem', md: 20 } }}
                        >
                            {method.text}
                        </Typography>
                    </Card>
                ))}
            </Box>
        </Box>
    )
}