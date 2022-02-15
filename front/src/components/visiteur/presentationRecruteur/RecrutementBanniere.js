import { Box } from '@mui/system'
import React from 'react'
import Typography from '@mui/material/Typography'

export default function RecrutementBanniere() {
    
    return (
        <Box sx={{ bgcolor: 'primary.main', width: '100%', my: 3 }}>
            <Typography
                variant="h2"
                color="initial"
                sx={{
                    py: 2
                }}
            >
                Un recrutement simplifé
            </Typography>
            <Typography
                align='justify'
                sx={{ px: 10, pb: 10, fontSize: { sx: '1rem', md: 20 } }}
            >
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </Typography>
        </Box>
    )
}