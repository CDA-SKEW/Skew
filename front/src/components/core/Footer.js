import { Box } from '@mui/system'
import React from 'react'
import Typography from '@mui/material/Typography'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button } from '@mui/material';

export default function Footer() {

    const UserList = [
        { user: 'Souka', link: 'https://www.linkedin.com/in/soukainata-attoumani-39131b13b/', color: 'souka' },
        { user: 'Etienne', link: 'https://www.linkedin.com/in/etienne-massot-8398b31b8/', color: 'etienne' },
        { user: 'Kevin', link: 'https://www.linkedin.com/in/kevin-hueri/', color: 'kevin' },
        { user: 'Wilfried', link: 'https://www.linkedin.com/in/liwza/', color: 'wil' },
    ]
    return (
        <Box
            sx={{
                bgcolor: '#696969',
                // display: 'flex'
            }}>
            <Typography
                variant="body2"
                color="#fff"
                align='center'
                sx={{
                    py: 1,
                }}
            >
                copiright@2022 SKEW
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                {UserList.map((list, index) => (
                    <Button
                        key={index}
                        color={list.color}
                        sx={{
                            mx: 2,
                            display: 'flex'
                        }}>
                        <LinkedInIcon />
                        <Typography variant="body2" sx={{ verticalAlign: 'center' }}>
                            {list.user}
                        </Typography>
                    </Button>
                ))}
            </Box>
        </Box>
    )
}