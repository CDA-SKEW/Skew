import React from 'react'
import Avatar from "@mui/material/Avatar";
import Logo from "assets/logo/logo.png";
import Box from "@mui/material/Box";

export default function LogoSkew() {
    return (
        <Box>
            <Avatar
                variant="square"
                src={Logo}
                sx={{
                    width: { xs: 40, md: 60 },
                    height: { xs: 40, md: 60 },
                }}
            />
        </Box>
    )
}
