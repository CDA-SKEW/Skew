import { Box } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';

function ContactButton() {
    const ContactList = [
        { key: 1, text: "Contactez-nous" },
        { key: 2, text: "06 06 06 06 06" },
    ]
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: { xs: "center", md: "space-around" },
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "center", md: "none" },
            }}
        >
            {ContactList.map((index) => (
                <Button
                    key={index.key}
                    variant="contained"
                    sx={{
                        bgcolor: '#ABC4FF',
                        width: 250,
                        py: 3,
                        my: 2,
                    }}
                >{index.text}</Button>
            ))}
        </Box>
    )
}

export default ContactButton
