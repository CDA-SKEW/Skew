import React from 'react';
import Dialog from '@mui/material/Dialog';
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
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import url from 'utils/url';

export default function DialogCardOffreId({ listOffer, open, handleClose, Transition, date, type, job, location, image, description, profil }) {

    return (
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
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
                        image={url.url + listOffer.avatar}
                        alt=""
                    />
                    <IconButton
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                        sx={{
                            position: 'absolute',
                            top: 90,
                            bgcolor: 'secondary.main'
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <CardContent>
                        <Box sx={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'space-between',
                        }}>
                            <Typography variant="body2" color="text.secondary">
                                publié le <br />
                                {listOffer.createDate}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {listOffer.type}
                            </Typography>
                        </Box>
                        <Typography gutterBottom variant="h5" component="div">
                            {listOffer.title}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            {listOffer.town}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'left', px: 5 }}>
                            Descriptif:
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ px: 5 }}>
                            {listOffer.description}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'left', mt: 5, px: 5 }}>
                            Profil recherché:
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ px: 5 }}>
                            {listOffer.profil}
                        </Typography>
                    </CardContent>
                    <CardActions
                        sx={{
                            mt: 2,
                            justifyContent: 'space-between',
                            px: 5
                        }}
                    >
                        <Button
                            variant='contained'
                            sx={{
                                bgcolor: 'secondary.main'
                            }}
                        >
                            <FavoriteBorderIcon />
                        </Button>
                        <Button
                            variant='contained'
                            sx={{
                                bgcolor: 'secondary.main'
                            }}
                        >
                            Postuler
                        </Button>
                    </CardActions>
                </Card>
            </List>
        </Dialog>
    );
};