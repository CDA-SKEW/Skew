import * as React from 'react';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function LastOffres() {

    const OffresList = [
        { titre: "Maçon", date: "25/12/2021", type: "CDD", lieu: "Paris" },
        { titre: "Cuisinier", date: "25/12/2021", type: "CDI", lieu: "Monaco" },
        { titre: "Patissier", date: "21/12/2021", type: "CDI", lieu: "Lyon" },
    ]

    return (
        <Box sx={{ mb: 10, my: 10 }}>
            <Typography
                variant="h2"
                component="div"
                sx={{ textAlign: 'center', my: 2, }}
            >
                Nos dernières offres
            </Typography>
            <Box sx={{ bgcolor: 'primary.main' }}>
                <List>
                    {OffresList.map((list, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                bgcolor: "offre.main",
                                width: '80%',
                                maxWidth: 1200,
                                mx: "auto",
                                my: 2,
                                py: 2
                            }}>
                            <ListItemText
                                primary={
                                    <Typography
                                        variant='h4'
                                        sx={{ textAlign: { xs: 'center', md: 'left' }, mb: 3, fontWeight: 'bold' }}
                                    >
                                        {list.titre}
                                    </Typography>
                                }
                                secondary={
                                    <React.Fragment>
                                        {[{ prop: list.date }, { prop: list.lieu }, { prop: list.type }].map((indice) => (
                                            <Typography
                                                key={indice.prop}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                                sx={{
                                                    display: 'inline-block',
                                                    width: { xs: "100%", md: 200, lg: 300 },
                                                    fontSize: '25px',
                                                    textAlign: 'center',
                                                    my: 1
                                                }}
                                            >
                                                {indice.prop}
                                            </Typography>
                                        ))}
                                    </React.Fragment>
                                }
                                primaryTypographyProps={{ fontWeight: 'bold', fontSize: '25px', mb: 5 }}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
}
