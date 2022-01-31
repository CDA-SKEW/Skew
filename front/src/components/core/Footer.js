import { Box } from '@mui/system'
import React from 'react'
import Typography from '@mui/material/Typography'

export default function Footer() {
    return (
        <Box sx={{ bgcolor: '#000' }}>
            <Typography
                variant="body1"
                color="#fff"
                align='center'
                sx={{
                    py: 2,
                    fontSize:30
                }}
            >
                Footer
            </Typography>
        </Box>
    )
}