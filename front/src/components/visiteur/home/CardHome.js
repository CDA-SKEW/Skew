import * as React from "react";
import { Box } from "@mui/material";
import { Button, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import { StaticRouter } from 'react-router-dom/server';
import { MemoryRouter } from 'react-router-dom';

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

export default function CardHome() {

    const CardsList = [
        {titre: "Je suis un recruteur", lien: "/recruteur", color: "tiers" },
        {titre: "Je suis un candidat", lien: "/candidat", color: "secondary" }
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
            {CardsList.map((card, index) => (
                <Button
                    key={index}
                    href={card.lien}
                    variant='contained'
                    color={card.color}
                    sx={{
                        width: "45%",
                        m: 'auto',
                        minWidth: 150,
                        maxWidth: 600,
                        height: {xs: 400, md: 500},
                    }}
                >
                    <Typography
                        color="initial"
                        sx={{
                            fontSize: { xs: 20, md: 45 }
                        }}
                    >
                        {card.titre}
                    </Typography>
                </Button>
            ))}
        </Box>
    );
}