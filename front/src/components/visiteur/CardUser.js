import React from 'react'
import { Button } from "@mui/material";
import PropTypes from 'prop-types';
import { StaticRouter } from 'react-router-dom/server';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';



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

export default function CardUser({ index }) {

    return (
        <Button
            key={index.key}
            href={index.lien}
            variant='contained'
            sx={{
                width: "40%",
                m: 'auto',
                minWidth: 150,
                maxWidth: 370
            }}
        >
            {index.titre}
        </Button>
    )
}
