import React from 'react'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Divider, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
import LogoSkew from 'components/core/navBarUser/LogoSkew'
import Title from 'components/core/navBarUser/Title'
import { Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import ModalConfimation from 'components/ModalConfimation';

export default function BackNav(props) {
    const navigate = useNavigate()

    const { pages, pagesReponsive } = props

    // console.log(pages)

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    //constante pour le modal contact
    const [openModalConfirmation, setOpenModalConfirmation] = React.useState(false);
    const handleClickOpenModalConfirmation = () => {
        setOpenModalConfirmation(true);
    };
    const handleCloseModalConfirmation = () => {
        setOpenModalConfirmation(false);
        setAnchorElNav(null)
    };


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Toolbar disableGutters >
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
                    {pages && pages.map((page, index) => (
                        <MenuItem key={index} onClick={() => navigate({ pathname: `/${page.link}` }, setAnchorElNav(null))}>
                            <Typography textAlign="center">{page.name}</Typography>
                        </MenuItem >
                    ))}
                    <Divider />

                    {pagesReponsive && pagesReponsive.map((pagesReponsive, index) => (
                        <MenuItem key={index} onClick={
                            () => navigate({ pathname: `/${pagesReponsive.link}` }, setAnchorElNav(null))
                        }>
                            <Typography textAlign="center">{pagesReponsive.name}</Typography>
                        </MenuItem >
                    ))}

                    <MenuItem onClick={handleClickOpenModalConfirmation}>
                        <Typography textAlign="center"> Déconnexion</Typography>
                    </MenuItem >

                    <ModalConfimation
                        keepMounted
                        open={openModalConfirmation}
                        onClose={handleCloseModalConfirmation}
                        titleModal="Déconnexion"
                        textModal="Êtes-vous sûr de vouloir vous deconnecter?"
                        colorBgModal="#ABC4FF"
                        colorTextModal="#000000"
                        action="disconnect"
                    />

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
                {pages && pages.map((page, index) => (
                    <Button
                        size="small"
                        key={index}
                        onClick={() => navigate({ pathname: `/${page.link}` })}
                        sx={{ color: "black" }}
                    >
                        {page.name}
                    </Button>
                ))}

                <Button
                    size="small"
                    variant="contained"
                    sx={{ bgcolor: '#ABC4FF', color: "black" }}
                    onClick={handleClickOpenModalConfirmation}
                >
                    Déconnexion
                </Button>

                <ModalConfimation
                    keepMounted
                    open={openModalConfirmation}
                    onClose={handleCloseModalConfirmation}
                    titleModal="Déconnexion"
                    textModal="Êtes-vous sûr de vouloir vous deconnecter?"
                    colorBgModal="#ABC4FF"
                    colorTextModal="#000000"
                    action="disconnect"
                />

            </Box>

        </Toolbar>
    )
}
