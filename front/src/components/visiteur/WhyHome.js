import * as React from 'react';
import WhyHome1 from '../../assets/images/WhyHome01.jpg';
import WhyHome2 from '../../assets/images/WhyHome02.jpg';
import { Box } from '@mui/system';
import CardParagrapheImg from '../CardParagrapheImg';

export default function WhyHome() {

    const CardsContents = [
        { image: WhyHome1, titre: "Pourquoi nous?", texte: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." },
        { image: WhyHome2, titre: "Nos méthodes", texte: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." },
    ]

    return (
        <Box>
            {CardsContents.map((index) => (
                <CardParagrapheImg index={index} />
            ))}
        </Box>
    );
}
