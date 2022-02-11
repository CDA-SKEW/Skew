import React from 'react'
import Avatar from "@mui/material/Avatar";
import Logo from "assets/logo/logo.png";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Titre() {
    return (
        <Box sx={{ display: { xs: "flex", md: "block" } }}>
            <Box
                sx={{
                    flexGrow: 0,
                    display: 'flex',
                }}
            >
                <Avatar
                    variant="square"
                    src={Logo}
                    sx={{
                        mx: 1,
                        width: {md: 50},
                        height: {md: 50},
                        mt: {md: 1}
                    }}
                />
                <Typography
                    variant='h1'
                    sx={{
                        width: '100%',
                        mt: {md: 1}
                    }}
                >
                    SKEW
                </Typography>
            </Box>
        </Box>
    )
}