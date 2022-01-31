import * as React from "react";
import CardUser from 'components/visiteur/CardUser';
import { Box } from "@mui/material";

export default function CardHome() {

    const CardsList = [
        { key: 1, titre: "Je suis un recruteur", lien: "/recruteur", color: "#ABC4FF" },
        { key: 2, titre: "Je suis un candidat", lien: "/candidat", color: "#C4FFE9" }
    ]

    return (
        <Box
            maxWidth='md'
            disableGutters
            sx={{
                display: 'flex',
                mx: 'auto',
                my: 10
            }}>
            {CardsList.map((index) => (
                <CardUser key={index.key} index={index} />
            ))}
        </Box>
    );
}