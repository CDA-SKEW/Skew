import React from 'react'
import Avatar from "@mui/material/Avatar";
import Logo from "assets/logo/logo.png";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Toolbar } from '@mui/material';

export default function Title() {
    return (
        <Toolbar >
            <Box sx={{ flexGrow: 0, display: 'flex'  }}>
                <Avatar
                    variant="square"
                    src={Logo}
                    sx={{
                        width: 40,
                        height: 40,
                    }}
                />
            </Box>

            <Box sx={{ flexGrow: 1, display: 'flex' }}></Box>

            <Typography
                variant="h1"
                noWrap
                component="h1"
                sx={{ flexGrow: 1, display:'flex' }}
            >
                SKEW
            </Typography>
        </Toolbar>


    )
}
