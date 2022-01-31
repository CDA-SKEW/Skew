import React from 'react'
import Box from "@mui/material/Box";
import { List } from "@mui/material";
import ListItemLink from "components/core/navbar/ListItemLink";
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

<ListItemLink />

ListItemLink.propTypes = {
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};
export default function MenuList({ pages }) {
    return (
        <Box sx={{ display: { xs: "none", md: "block" } }}>
            <List
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    justifyContent: 'center',
                }}>
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
                        fontWeight: 'bold'
                    }}
                >Log in / Sign in</Button>
            </List>
        </Box>
    )
}