import * as React from 'react';
import { Box } from '@mui/system';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';

import Logo1 from '../../assets/societesImgs/logo1.jpg';
import Logo2 from '../../assets/societesImgs/logo2.jpg';
import Logo3 from '../../assets/societesImgs/logo3.jpg';
import Logo4 from '../../assets/societesImgs/logo4.jpg';
import Logo5 from '../../assets/societesImgs/logo5.jpg';
import Logo6 from '../../assets/societesImgs/logo6.jpg';
import Logo7 from '../../assets/societesImgs/logo7.jpg';
import Logo8 from '../../assets/societesImgs/logo8.jpg';

export default function DirectionStack() {

    const ImgList = [
        { img: Logo1, alt: 'img1', key: 1 },
        { img: Logo2, alt: 'img2', key: 2 },
        { img: Logo3, alt: 'img3', key: 3 },
        { img: Logo4, alt: 'img4', key: 4 },
        { img: Logo5, alt: 'img5', key: 5 },
        { img: Logo6, alt: 'img6', key: 6 },
        { img: Logo7, alt: 'img7', key: 7 },
        { img: Logo8, alt: 'img8', key: 8 },
    ]

    return (
        <Box sx={{
            my:20,
            width: '100%'
        }}>
            <Typography variant="h2" component="div" sx={{
                textAlign: 'center',
                my: 5
            }}>
                Ils nous font confiance
            </Typography>
            <Stack spacing={2}>
                <ImageListItem sx={{
                    display: 'flex',
                    py: 3,
                    borderTop: 2,
                    borderBottom: 2,
                    width: '100%',
                    m: 'auto',
                    justifyContent: { xs: "center", md: "space-around" },
                    alignItems: { xs: "center", md: "none" },
                }}>
                    {ImgList.map((index) => (
                        <Avatar key={index.key} alt={index.alt} src={index.img}/>
                    ))}
                </ImageListItem>
            </Stack>
        </Box>
    );
}
