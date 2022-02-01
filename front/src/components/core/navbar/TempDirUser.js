import React from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { StaticRouter } from 'react-router-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { Box } from "@mui/material";

function Router(props) {
    const { children } = props;
    if (typeof window === 'undefined') {
        return <StaticRouter location="/">{children}</StaticRouter>;
    }

    return <MemoryRouter>{children}</MemoryRouter>;
}

Router.propTypes = {
    children: PropTypes.node,
};

export default function TempDirUser() {

    const CardsList = [
        { key: 1, titre: "recruteur", lien: "/employer/dashboard" },
        { key: 2, titre: "candidat", lien: "/candidat/dashboard" },
        { key: 3, titre: "admin", lien: "/candidat" },
    ]

    return (
        <Box
            maxWidth='xl'
            disableGutters
            sx={{
                display: 'flex',
                mx: 'auto',
                my: 10,
            }}>
            {CardsList.map((index) => (
                <Button
                    key={index.key}
                    href={index.lien}
                    variant='contained'
                    sx={{
                        width: "15%",
                        m: 'auto',
                        minWidth: 100,
                        maxWidth: 200,
                        height: 100,
                    }}
                >
                    <Typography
                        color="initial"
                        sx={{
                            fontSize: { xs: 10, md: 10 }
                        }}
                    >
                        {index.titre}
                    </Typography>
                </Button>
            ))}
        </Box>
    )
}