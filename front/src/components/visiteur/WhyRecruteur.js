import * as React from 'react';
import WhyCandidat1 from '../../assets/images/WhyCandidat01.jpg';
import { Box } from '@mui/system';
import CardParagrapheImg from './CardParagrapheImg';

export default function WhyCandidat() {

    const CardsContents = [
        { key: 1, image: WhyCandidat1, titre: "Vous recherchez de nouveaux talents", texte: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." },
    ]

    return (
        <Box>
            {CardsContents.map((index) => (
                <CardParagrapheImg key={index.key} index={index} />
            ))}
        </Box>
    );
}
