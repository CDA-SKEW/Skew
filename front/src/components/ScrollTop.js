import React from "react";
import {  Box, Zoom } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';


export default function ScrollTop(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    const handleClick = (event) => {

        // console.log("coucou je click")
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        // console.log("anchor", anchor)
        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };

    return (
        <Zoom in={trigger}>
            <Box
                onClick={(e) => handleClick(e)}
                role="presentation"
                sx={{ position: 'fixed', bottom: 200, right: 16 }}
            >
                {children}
            </Box>
        </Zoom>
    );
}
