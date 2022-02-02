import { Box, Typography } from '@mui/material'
import React from 'react'
import CardMethodRecruteur from './CardMethodRecruteur'

export default function MethodsRecruteur() {

    const MethodsList = [
        { key: 1, titre: "Nos outils", text: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed posuere egestas nunc ut tempus. Fusce sagittis bibendum est. Pellentesque eu tortor euismod, varius odio ac, auctor arcu." },
        { key: 2, titre: "Nos tests", text: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed posuere egestas nunc ut tempus. Fusce sagittis bibendum est. Pellentesque eu tortor euismod, varius odio ac, auctor arcu." },
        { key: 3, titre: "Nos garanties", text: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed posuere egestas nunc ut tempus. Fusce sagittis bibendum est. Pellentesque eu tortor euismod, varius odio ac, auctor arcu." },
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
                {MethodsList.map((index) => (
                    <CardMethodRecruteur key={index.key} index={index} />
                ))}
            </Box>
        </Box>
    )
}