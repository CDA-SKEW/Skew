import React, { useState, useEffect } from 'react'
import Logo from "assets/logo/logo.png";

import { ThemeProvider } from "@mui/material";
import { theme } from "../configs/theme";
import { style } from '../configs/globalStyle';

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { List, MenuItem } from "@mui/material";
import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Modal from '@mui/material/Modal';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';

import Inscription from 'components/auth/Inscription';
import Connexion from 'components/auth/Connexion';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import jwt_decode from "jwt-decode";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function VisiteurLayout({ children }) {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [openDialogConnexion, setOpenDialogConnexion] = useState(false);
  const [openDialogInscription, setOpenDialogInscription] = useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [errorConnexion, setErrorConnexion] = useState('');
  const [successLostMdp, setSuccessLostMdp] = useState('')
  const [errorInscription, setErrorInscription] = useState('');
  const [successInscription, setSuccessInscription] = useState('');
  const [errorChamps, setErrorChamps] = useState('')
  const userToken = localStorage["user_token"];

  const pages = [
    { titre: "Accueil", lien: "" },
    { titre: "Offres", lien: "offres" },
    { titre: "Contactez-nous", lien: "contactus" }
  ];

  const UserListFooter = [
    { user: 'Souka', link: 'https://www.linkedin.com/in/soukainata-attoumani-39131b13b/', color: 'souka' },
    { user: 'Etienne', link: 'https://www.linkedin.com/in/etienne-massot-8398b31b8/', color: 'etienne' },
    { user: 'Kevin', link: 'https://www.linkedin.com/in/kevin-hueri/', color: 'kevin' },
    { user: 'Wilfried', link: 'https://www.linkedin.com/in/liwza/', color: 'wil' },
  ];

  const isAdmin = useSelector(state => state.auth.user.isAdmin);
  const isRecruteur = useSelector(state => state.auth.user.isRecruteur);
  const isCandidat = useSelector(state => state.auth.user.isCandidat);

  const flash = useSelector(state => state.auth.flash);
  const flashCon = useSelector(state => state.auth.flashCon);

  const handleCloseDialogConnexion = () => { setOpenDialogConnexion(false); }
  const handleCloseDialogInscription = () => { setOpenDialogInscription(false); }

  const toggleDrawer = (newOpenDrawer) => () => { setOpenDrawer(newOpenDrawer); };
  const logout = () => {
    localStorage.removeItem("user_token");
    window.location.reload()
  }
  const handleClickNavigate = () => {
    if (jwt_decode(localStorage.getItem("user_token")).isAdmin === 1) { navigate("/admin"); }
    else if (jwt_decode(localStorage.getItem("user_token")).isCandidat === 1) { navigate("/candidat/dashboard"); }
    else if (jwt_decode(localStorage.getItem("user_token")).isRecruteur === 1) { navigate("/employer/dashboard"); }
  }
  const handleClickLinkedin = (user, link) => {
    if (user) window.location.href = link;
  }

  useEffect(() => {
    if (flash.length >= 0) {
      setSuccessInscription(flash);
      setErrorInscription('');
      setErrorConnexion('');
      setErrorChamps('');
    }
  }, [flash]);

  useEffect(() => {
    if (flashCon.length >= 0) {
      setErrorConnexion(flashCon);
      setSuccessInscription('');
      setErrorInscription('');
      setErrorChamps('');
    }
  }, [flashCon]);

  const container = pages.window !== undefined ? () => pages.window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{ ...style }} />
      <AppBar position="static">
        <Box>
          <Toolbar disableGutters sx={{ display: { xs: "flex", md: "block" } }}>
            {/* Titre */}
            <Box sx={{ display: { xs: "flex", md: "block" } }}>
              <Box sx={{ flexGrow: 0, display: 'flex' }}>
                <Avatar variant="square" src={Logo}
                  sx={{ mx: 1, width: { md: 50 }, height: { md: 50 }, mt: { md: 1 } }} />
                <Typography variant='h1' sx={{ width: '100%', mt: { md: 1 } }}>
                  SKEW
                </Typography>
              </Box>
            </Box>
            {/* Menu */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <List sx={{ flexGrow: 1, display: "flex", justifyContent: 'space-around', }}>
                {pages.map((page) => (
                  <MenuItem key={page.titre} onClick={() => navigate({ pathname: `/${page.lien}` })}>
                    <Typography textAlign="center">{page.titre}</Typography>
                  </MenuItem>
                ))}

                {userToken &&
                  <MenuItem onClick={() => handleClickNavigate()}>
                    <Typography textAlign="center">Dashboard</Typography>
                  </MenuItem>
                }

                {/* Bouton Login */}
                {!userToken &&
                  <Button variant="contained" onClick={() => setOpenModal(true)} sx={{ bgcolor: 'secondary.main' }}>
                    Log in / Sign in
                  </Button>
                }
                {userToken &&
                  <Button variant="contained" onClick={logout} sx={{ bgcolor: 'secondary.main' }}>
                    Log out
                  </Button>
                }
                {/* Modal connexion inscription */}
                <Modal
                  open={openModal}
                  onClose={() => setOpenModal(false)}
                  sx={{ display: { xs: "none", md: 'block' } }}
                >
                  <Box sx={{
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    width: 800, height: 560, bgcolor: '#fff', pt: 2, px: 4, pb: 3, borderRadius: 2,
                    display: 'flex', textAlign: 'center'
                  }}>
                    {/* Connexion */}
                    <Connexion
                      dispatch={dispatch}
                      successLostMdp={successLostMdp}
                      setSuccessLostMdp={setSuccessLostMdp}
                      errorConnexion={errorConnexion}
                      setErrorInscription={setErrorInscription}
                      setErrorConnexion={setErrorConnexion}
                      setSuccessInscription={setSuccessInscription}
                      isAdmin={isAdmin}
                      isCandidat={isCandidat}
                      isRecruteur={isRecruteur}
                      errorChamps={errorChamps}
                      setErrorChamps={setErrorChamps}
                      flashCon={flashCon}
                    />

                    {/* Inscription */}
                    <Inscription
                      dispatch={dispatch}
                      setErrorConnexion={setErrorConnexion}
                      errorInscription={errorInscription}
                      setErrorInscription={setErrorInscription}
                      successInscription={successInscription}
                      setSuccessInscription={setSuccessInscription}
                      setErrorChamps={setErrorChamps}
                    />
                  </Box>
                </Modal>
              </List>
            </Box>
            {/* Menu responsive */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, flexDirection: 'row-reverse' }} >
              <IconButton size="large" onClick={toggleDrawer(true)} color="inherit">
                <MenuIcon />
              </IconButton>
              <SwipeableDrawer
                open={openDrawer} container={container}
                anchor="bottom"
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                disableSwipeToOpen={false}
                ModalProps={{ keepMounted: true }}>
                <Box sx={{ listStyleType: 'none' }}>
                  {pages.map((page, index) => (
                    <MenuItem
                      key={index}
                      onClick={() => navigate({ pathname: `/${page.lien}` })}
                      sx={{ justifyContent: 'center' }}
                    >
                      <Typography>{page.titre}</Typography>
                    </MenuItem>
                  ))}
                  {userToken &&
                    <MenuItem
                      sx={{ justifyContent: 'center' }}
                      onClick={() => handleClickNavigate()}
                    >
                      <Typography textAlign="center">Dashboard</Typography>
                    </MenuItem>
                  }

                  {/* Bouton Login */}
                  {!userToken &&
                    <Box sx={{ width: 300, m: 'auto' }}>
                      <Button
                        variant="contained"
                        fullWidth
                        onClick={() => setOpenModal(true)}
                        sx={{
                          bgcolor: '#ABC4FF', fontWeight: 'bold', py: 2,
                          my: 2, mx: 'auto', justifyContent: 'center'
                        }}
                      >
                        Log in / Sign in
                      </Button>
                    </Box>
                  }
                  {userToken &&
                    <Box sx={{ width: 300, m: 'auto' }}>
                      <Button
                        variant="contained"
                        fullWidth
                        onClick={logout}
                        sx={{
                          bgcolor: '#ABC4FF', fontWeight: 'bold', py: 2,
                          my: 2, mx: 'auto', justifyContent: 'center'
                        }}
                      >
                        Log out
                      </Button>
                    </Box>
                  }
                </Box>

                {/* Modal Login / signin */}
                <Modal
                  open={openModal}
                  onClose={() => setOpenModal(false)}
                  sx={{ display: { xs: "block", md: 'none' } }}
                >
                  <Box
                    sx={{
                      position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                      width: 300, height: 190, bgcolor: '#fff', pt: 2, px: 4, pb: 3, borderRadius: 2,
                      display: 'block'
                    }}
                  >
                    <Button variant="contained" fullWidth
                      onClick={() => setOpenDialogConnexion(true)}
                      sx={{ bgcolor: '#ABC4FF', fontSize: 17, my: 3, display: 'block' }}>
                      Connexion
                    </Button>
                    <Button variant="contained" fullWidth
                      onClick={() => setOpenDialogInscription(true)}
                      sx={{ bgcolor: '#ABC4FF', fontSize: 17, my: 3, display: 'block' }}>
                      Inscription
                    </Button>
                  </Box>


                </Modal>
                {/* Dialog Connexion */}
                <Box>
                  <Dialog
                    fullScreen
                    open={openDialogConnexion}
                    onClose={handleCloseDialogConnexion}
                    TransitionComponent={Transition}
                    PaperProps={{ style: { backgroundColor: '#fff' } }}
                  >
                    <AppBar sx={{ position: 'relative' }}>
                      <Toolbar>
                        <IconButton
                          edge="start"
                          color="inherit"
                          onClick={() => handleCloseDialogConnexion()}
                          aria-label="close"
                        >
                          <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                          Connexion
                        </Typography>
                      </Toolbar>
                    </AppBar>

                    {/* Connexion */}
                    <Connexion
                      dispatch={dispatch}
                      successLostMdp={successLostMdp}
                      setSuccessLostMdp={setSuccessLostMdp}
                      errorConnexion={errorConnexion}
                      setErrorInscription={setErrorInscription}
                      setErrorConnexion={setErrorConnexion}
                      setSuccessInscription={setSuccessInscription}
                      isAdmin={isAdmin}
                      isCandidat={isCandidat}
                      isRecruteur={isRecruteur}
                      errorChamps={errorChamps}
                      setErrorChamps={setErrorChamps}
                    />
                  </Dialog>
                </Box>
              </SwipeableDrawer>
            </Box>
          </Toolbar>
        </Box>
        {/* Dialog Inscription */}
        <Box>
          <Dialog
            fullScreen
            open={openDialogInscription}
            onClose={handleCloseDialogInscription}
            TransitionComponent={Transition}
            PaperProps={{ style: { backgroundColor: '#fff' } }}
          >
            <AppBar sx={{ position: 'relative' }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={() => handleCloseDialogInscription()}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                  Inscription
                </Typography>
              </Toolbar>
            </AppBar>

            <Inscription
              dispatch={dispatch}
              setErrorConnexion={setErrorConnexion}
              errorInscription={errorInscription}
              setErrorInscription={setErrorInscription}
              successInscription={successInscription}
              setSuccessInscription={setSuccessInscription}
              setErrorChamps={setErrorChamps}
            />
          </Dialog>
        </Box>
      </AppBar>
      {/* Contenu de page */}
      <Container
        component="main"
        disableGutters
        maxWidth="100%"
        sx={{ minHeight: "80vh" }}
      >
        {children}
      </Container>
      {/* Footer */}
      <Box
        sx={{
          bgcolor: '#696969',
        }}>
        <Typography
          variant="body2"
          color="#fff"
          align='center'
          paddingY={1}

        >
          copiright@2022 SKEW
        </Typography>
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", sm: "row", md: "row" }}
          justifyContent={"center"}>
          {UserListFooter.map((list, index) => (
            <Button
              size='small'
              key={index}
              color={list.color}
              onClick={() => handleClickLinkedin(list.user, list.link)}
              target="_blank"
            >
              <LinkedInIcon />
              <Typography variant="body2" alignItems={"center"}>
                {list.user}
              </Typography>
            </Button>
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
};