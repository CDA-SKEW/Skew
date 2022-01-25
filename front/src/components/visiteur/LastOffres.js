import * as React from 'react';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import ListOffre from './ListOffre';

export default function LastOffres() {

    const OffresList = [
        { key: 1, titre: "Maçon", date: "25/12/2021", type: "CDD", lieu: "Paris" },
        { key: 2, titre: "Cuisinier", date: "25/12/2021", type: "CDI", lieu: "Monaco" },
        { key: 3, titre: "Patissier", date: "21/12/2021", type: "CDI", lieu: "Lyon" },
    ]

    return (
        <Box sx={{
            bgcolor: '#FFD9B8'
        }}>
            <Typography variant="h5" component="div" sx={{
                textAlign: 'center',
                my: 5
            }}>
                Nos dernières offres
            </Typography>
            <List>
                {OffresList.map((index) => (
                    <ListOffre key={index.key} index={index}/>
                ))}
            </List>
        </Box>
    );
}
