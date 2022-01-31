import React from 'react'
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from '@mui/material/Button';
import { List } from "@mui/material";
import Box from "@mui/material/Box";
import ListItemLink from "components/core/navbar/ListItemLink";
import PropTypes from 'prop-types';

<ListItemLink />

ListItemLink.propTypes = {
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default function MenuListResponsive({ pages }) {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box
            sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                flexDirection: 'row-reverse',
            }}
        >
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


            {/* Menu responsive */}
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: "block", md: "none" },
                }}
            >
                <List onClick={handleCloseNavMenu}>
                    {pages.map((page) => (
                        <ListItemLink
                            key={page.titre}
                            to={page.lien}
                            primary={page.titre}
                            textAlign="center" />
                    ))}
                    <Button variant="contained">Log in / Sign in</Button>
                </List>
            </Menu>
        </Box>
    )
}