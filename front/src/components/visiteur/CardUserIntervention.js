import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';

export default function CardUserIntervention({ index }) {
    return (
        <Card>
            <CardActionArea>
                <Avatar alt={index.alt} src={index.img} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {index.prenom} {index.nom}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {index.message}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
