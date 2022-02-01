import React from 'react'
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';

export default function MenuListResponsive({ pages, ListItemLink }) {

    const { window } = pages;
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

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
                onClick={toggleDrawer(true)}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <SwipeableDrawer
                container={container}
                anchor="top"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <Box
                    sx={{
                        listStyleType: 'none',
                        textAlign: 'center',
                    }}
                >
                    {pages.map((page) => (
                        <ListItemLink
                            key={page.titre}
                            primary={page.titre}
                            to={page.lien}
                        />
                    ))}
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: '#ABC4FF',
                            fontWeight: 'bold',
                            py: 2,
                            width: '80%',
                            my: 2,
                            mx: 'auto',
                        }}
                    >Log in / Sign in</Button>
                </Box>
            </SwipeableDrawer>
        </Box>

    )
}