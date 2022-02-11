import React from 'react'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Toolbar } from '@mui/material';
import LogoSkew from 'components/core/navBarUser/LogoSkew'
import Title from 'components/core/navBarUser/Title'

export default function TopNav() {
    return (
        <Toolbar disableGutters >
            <Box sx={{ flexGrow: 0, display: 'flex' }}>
                <LogoSkew />
            </Box>

            <Box sx={{ flexGrow: 1, display: 'flex' }}></Box>

            <Typography
                variant="h1"
                noWrap
                component="h1"
                sx={{ flexGrow: 1, display: 'flex' }}
            >
             <Title />
            </Typography>
        </Toolbar>


    )
}
