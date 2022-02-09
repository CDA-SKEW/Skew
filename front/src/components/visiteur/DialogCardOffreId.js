import React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { Box } from '@mui/system';

export default function DialogCardOffreId({ open, handleClose, Transition, date, type, job, image, description, profil }) {

    return (
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        Offre {job}
                    </Typography>
                </Toolbar>
            </AppBar>
            <List sx={{ bgcolor: "#cecece" }}>
                <Card sx={{
                    width: "80%",
                    maxWidth: 800,
                    mx: 'auto',
                    my: 10,
                    bgcolor: '#fff'
                }}>
                    <CardMedia
                        component="img"
                        // height="200"
                        image={image}
                        alt=""
                    />
                    <CardContent>
                        <Box sx={{display: 'flex', width: '100%'}}>
                            <Typography variant="body2" color="text.secondary">
                                publié le <br />
                                {date}
                            </Typography>
                            <Typography variant="body2" color="text.secondary"
                                sx={{ flexDirection:'row-reverse' }}>
                                {type}
                            </Typography>
                        </Box>
                        <Typography gutterBottom variant="h5" component="div">
                            {job}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'left' }}>
                            Descriptif:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'left' }}>
                            Profil recherché:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {profil}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </List>
        </Dialog>
    );
};