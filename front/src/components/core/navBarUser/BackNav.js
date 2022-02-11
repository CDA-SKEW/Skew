import React from 'react'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
import LogoSkew from 'components/core/navBarUser/LogoSkew'
import Title from 'components/core/navBarUser/Title'
import { Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function BackNav(props) {

    const {pages} = props

    const [anchorElNav, setAnchorElNav] = React.useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Toolbar>
            <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{page}</Typography>
                        </MenuItem >
                    ))}
                </Menu>
            </Box>


            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <Box sx={{ flexGrow: 1, display: 'flex' }}></Box>

                <Typography
                    variant="h1"
                    noWrap
                    component="h1"
                    sx={{ flexGrow: 1, display: 'flex' }}
                >
                    <Title />
                </Typography>

                <Box sx={{ flexGrow: 0, display: 'flex' }}>
                    <LogoSkew />
                </Box>


            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "space-around" }}>
                {pages.map((page) => (
                    <Button
                        size="small"
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ color: "black" }}
                    >
                        {page}
                    </Button>
                ))}

                <Button
                    size="small"
                    variant="contained"
                    onClick={handleCloseNavMenu}
                    sx={{ bgcolor: '#ABC4FF', color: "black" }}
                >
                    Déconnexion
                </Button>

            </Box>

        </Toolbar>
    )
}
