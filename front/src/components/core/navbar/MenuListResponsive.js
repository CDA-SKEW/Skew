import React from 'react'
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import ListItemLink from "components/core/navbar/ListItemLink";
import PropTypes from 'prop-types';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { Global } from '@emotion/react';

<ListItemLink />

ListItemLink.propTypes = {
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

const Root = styled('div')(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

export default function MenuListResponsive({ pages }) {

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
            <Root>
                <Global
                    styles={{
                        '.MuiDrawer-root > .MuiPaper-root': {
                            overflow: 'visible',
                            backgroundColor: '#fff'
                        },
                    }}
                />
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
                    <Box sx={{ listStyleType: 'none' }}>
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
            </Root>
        </Box>

    )
}