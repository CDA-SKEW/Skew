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
            mx: "10%",
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
                primaryTypographyProps={{fontWeight: 'bold', fontSize: '25px'}}
            />
        </ListItem>
    );
};