import * as React from "react";
import CardUser from 'components/visiteur/CardUser';
import Container from '@mui/material/Container';

export default function CardHome() {

    const CardsList = [
        { key: 1, titre: "Je suis un recruteur", lien: "/recruteur", color: "#ABC4FF" },
        { key: 2, titre: "Je suis un candidat", lien: "/candidat", color: "#C4FFE9" }
    ]

    return (
        <Container
            maxWidth='md'
            disableGutters='true'
            sx={{
                display: 'flex',
                mx: 'auto',
                my: 10
            }}>
            {CardsList.map((index) => (
                <CardUser key={index.key} index={index} />
            ))}
        </Container>
    );
}