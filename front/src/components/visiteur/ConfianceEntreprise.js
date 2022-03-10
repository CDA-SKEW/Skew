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

export default function ConfianceEntreprise() {

    const ImgList = [
        { img: Logo1, alt: 'img1'},
        { img: Logo2, alt: 'img2'},
        { img: Logo3, alt: 'img3'},
        { img: Logo4, alt: 'img4'},
        { img: Logo5, alt: 'img5'},
        { img: Logo6, alt: 'img6'},
        { img: Logo7, alt: 'img7'},
        { img: Logo8, alt: 'img8'},
    ]

    return (
        <Box sx={{
            my: 20,
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
                    flexWrap: 'wrap',
                    py: 3,
                    borderTop: 2,
                    borderBottom: 2,
                    width: '100%',
                    justifyContent: { xs: "center", md: "space-around" },
                    alignItems: "center",
                }}>
                    {ImgList.map((list, index) => (
                        <Avatar
                            key={index}
                            alt={list.alt}
                            src={list.img}
                            sx={{
                                my: 3
                            }}
                        />
                    ))}
                </ImageListItem>
            </Stack>
        </Box>
    );
}
