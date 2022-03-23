import * as React from 'react';
import { Box } from '@mui/system';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import { urlImg } from "utils/url";

import { getVisiteurDataEntrepriseAvatar } from "../../store/actions/VisiteurDataActions"
import { useSelector } from "react-redux";
import { store } from 'store';

store.dispatch(getVisiteurDataEntrepriseAvatar())

export default function ConfianceEntreprise() {

    const listAvatar = useSelector(state => state.visiteurData.VisiteurDataEntrepriseAvatar)

    return (
        <Box sx={{ my: 20, width: '100%' }}>
            <Typography variant="h2" component="div" sx={{ textAlign: 'center', my: 5, fontSize: { xs: 35, xl: 45 } }}>
                Ils nous font confiance
            </Typography>
            <Stack spacing={2}>
                <ImageListItem sx={{
                    display: 'flex', flexWrap: 'wrap',
                    py: 3, borderTop: 2, borderBottom: 2,
                    alignItems: "center", width: '100%',
                    justifyContent: "space-around"
                }}>
                    {listAvatar.map((list, index) => (
                        <Avatar key={index} alt={list.avatar} src={`${urlImg + list.avatar}`} sx={{ my: 3 }} />
                    ))}
                </ImageListItem>
            </Stack>
        </Box>
    );
}
