import { Card, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export default function CardMethodRecruteur({ index }) {
    return (
        <Card
            sx={{
                bgcolor: "#FFD9B8",
                width: 300,
                m: 5,
            }}
        >
            <SearchIcon
                sx={{
                    fontSize: "75px",
                    display: 'block',
                    mx: 'auto',
                    mt: 5
                }}
            />
            <Typography variant="h4" color="initial">
                {index.titre}
            </Typography>
            <Typography
                variant="body1"
                color="initial"
                sx={{
                    px: 5,
                    pb: 3,
                    fontSize: { sx: '1rem', md: 20 }
                }}
            >
                {index.text}
            </Typography>
        </Card>
    )
}
