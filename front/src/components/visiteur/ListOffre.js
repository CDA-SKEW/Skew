import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { fontWeight } from '@mui/system';

export default function ListOffre({ index }) {

    return (
        <ListItem sx={{
            bgcolor: "#E6C3A5",
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
                        sx={{
                            textAlign: { xs: 'center', md: 'left' },
                            mb: 3,
                            fontWeight: 'bold'
                        }}
                    >
                        {index.titre}
                    </Typography>
                }
                secondary={
                    <React.Fragment>
                        {[{ prop: index.date }, { prop: index.lieu }, { prop: index.type }].map((indice) => (
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
    );
};