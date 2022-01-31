import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

export default function ListOffre ({ index }) {

    return (
        <ListItem alignItems="flex-start" sx={{
            bgcolor: "#E6C3A5",
            my: 2,
            py: 2
        }}>
            <ListItemText
                primary={index.titre}
                secondary={
                    <React.Fragment>
                        {[{ prop: index.date }, { prop: index.lieu }, { prop: index.type }].map((indice) => (
                            <Typography
                                key={indice.prop}
                                sx={{ display: 'inline-block', width: "200px" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {indice.prop}
                            </Typography>
                        ))}
                    </React.Fragment>
                }
            />
        </ListItem>
    );
};