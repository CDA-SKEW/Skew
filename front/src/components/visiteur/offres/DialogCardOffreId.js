import React, { useState, useEffect } from 'react';
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
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import { Box } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { urlImg } from "utils/url";
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import { checkToken } from "store/actions/AuthActions"
import { store } from 'store';
import { getOffreFavoriteId, postOffreFavorite } from 'store/actions/OffreFavoriteActions'

store.dispatch(checkToken(localStorage['user_token']));

export default function DialogCardOffreId({ data, open, handleClose, Transition }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [openNoToken, setOpenNoToken] = useState(false);

    const checkToken = useSelector(state => state.auth.token);
    const favoris = useSelector(state => state.offreFavorite.favoris);
    console.log("favoris", favoris)

    const handleOpenModal = () => {
        setOpenNoToken(true)
    }

    const handleCloseNoToken = () => {
        setOpenNoToken(false);
    };

    const handleClickFavoris = async () => {
        if (!localStorage["user_token"]) handleOpenModal();
        else if (!favoris) {
            await dispatch(postOffreFavorite(data.offer_id, checkToken));
            dispatch(getOffreFavoriteId(data.offer_id, checkToken))
        }
        else { console.log('non') }
    }

    const handleClickPostuled = () => {
        if (localStorage["user_token"]) { navigate(`/postuled/${data.offer_id}`); }
        else { handleOpenModal() }
    }

    useEffect(() => {
        if (data.offer_id) dispatch(getOffreFavoriteId(data.offer_id, checkToken));
    }, [dispatch, data.offer_id, checkToken]);

    return (
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <List sx={{ bgcolor: "#cecece" }}>
                <Card sx={{ width: "80%", maxWidth: 800, mx: 'auto', my: 10, bgcolor: '#fff' }}>
                    <CardMedia
                        component="img"
                        image={`${urlImg + data.avatar}`}
                        alt={data.title}
                        sx={{ maxHeight: 250 }}
                    />
                    <IconButton
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                        sx={{ position: 'absolute', top: 90, bgcolor: 'secondary.main' }}>
                        <CloseIcon />
                    </IconButton>
                    <CardContent>
                        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', }}>
                            <Typography variant="body2" color="text.secondary">
                                publié le <br />
                                {data.createDate}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {data.type}
                            </Typography>
                        </Box>
                        <Typography gutterBottom variant="h5" component="div">
                            {data.title}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            {data.town}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'left', px: 5 }}>
                            Descriptif:
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ px: 5 }}>
                            {data.description}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'left', mt: 5, px: 5 }}>
                            Profil recherché:
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ px: 5 }}>
                            {data.profil}
                        </Typography>
                    </CardContent>
                    <CardActions
                        sx={{ mt: 2, justifyContent: 'space-between', px: 5 }}>
                        {!favoris &&
                            <Button
                                variant='contained'
                                sx={{ bgcolor: 'secondary.main' }}
                                onClick={() => handleClickFavoris()}
                            >
                                <FavoriteBorderIcon />
                            </Button>
                        }
                        {favoris &&
                            <Button
                                variant='contained'
                                sx={{ bgcolor: 'secondary.main' }}
                                onClick={() => handleClickFavoris()}
                            >
                                <FavoriteIcon />
                            </Button>
                        }
                        <Button
                            variant='contained'
                            sx={{ bgcolor: 'secondary.main' }}
                            onClick={() => handleClickPostuled()}
                        >
                            Postuler
                        </Button>
                    </CardActions>
                </Card>
            </List>

            <Dialog
                open={openNoToken}
                onClose={handleCloseNoToken}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{ bgcolor: '#fff' }}
            >
                <Card sx={{ bgcolor: '#fff' }}>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Vous n'êtes pas connecté
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={handleCloseNoToken}
                            variant='contained'
                            sx={{ color: '#000' }}
                        >
                            Fermer
                        </Button>
                    </DialogActions>
                </Card>
            </Dialog>

        </Dialog>
    );
};