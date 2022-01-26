import * as React from 'react';
import WhyCandidat1 from '../../assets/images/WhyCandidat01.jpg';
import WhyCandidat2 from '../../assets/images/WhyCandidat02.jpg';
import Container from '@mui/material/Container';
import CardParagrapheImg from './CardParagrapheImg';

export default function WhyCandidat() {

    const CardsContents = [
        { key: 1, image: WhyCandidat1, titre: "Trouver votre job", texte: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." },
        { key: 2, image: WhyCandidat2, titre: "Nos méthodes", texte: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." },
    ]

    return (
        <Container maxWidth="lg">
            {CardsContents.map((index) => (
                <CardParagrapheImg key={index.key} index={index} />
            ))}
        </Container>
    );
}
