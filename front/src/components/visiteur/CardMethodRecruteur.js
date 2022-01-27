import { Card, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export default function CardMethodRecruteur({ index }) {
    return (
        <Card
            sx={{
                bgcolor: "#FFD9B8",
            }}
        >
            <SearchIcon
                fontSize="1000px"
                sx={{
                    display: 'block',
                    
                }}
            />
            <Typography variant="h6" color="initial">
                {index.titre}
            </Typography>
            <Typography variant="body1" color="initial">
                {index.text}
            </Typography>
        </Card>
    )
}
