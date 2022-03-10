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
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [errorInscription, setErrorInscription] = useState('');
  const [successInscription, setSuccessInscription] = useState('');
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
    if (isAdmin === 1) {
      navigate("/admin");
    }
    else if (isCandidat === 1) {
      navigate("/candidat/dashboard");
    }
    else if (isRecruteur === 1) {
      navigate("/employer/dashboard");
    }
  }

  useEffect(() => {
    if (flash.length >= 0) {
      setSuccessInscription(flash);
      setErrorInscription('');
      setSuccess('');
      setError('');
    }
  }, [flash]);

  useEffect(() => {
    if (flashCon.length >= 0) {
      setSuccess(flashCon);
      setError('');
      setSuccessInscription('');
      setErrorInscription('');
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
                      error={error}
                      setErrorInscription={setErrorInscription}
                      success={success}
                      setSuccess={setSuccess}
                      setSuccessInscription={setSuccessInscription}
                      isAdmin={isAdmin}
                      isCandidat={isCandidat}
                      isRecruteur={isRecruteur}
                    />

                    {/* Inscription */}
                    <Inscription
                      dispatch={dispatch}
                      setError={setError}
                      errorInscription={errorInscription}
                      setErrorInscription={setErrorInscription}
                      setSuccess={setSuccess}
                      successInscription={successInscription}
                      setSuccessInscription={setSuccessInscription}
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
                container={container}
                anchor="bottom"
                open={openDrawer}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                disableSwipeToOpen={false}
                ModalProps={{ keepMounted: true }}>
                <Box sx={{ listStyleType: 'none', textAlign: 'center' }}>
                  {pages.map((page, index) => (
                    <MenuItem key={index} onClick={() => navigate({ pathname: `/${page.lien}` })}>
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
                    <Button variant="contained" onClick={() => setOpenModal(true)}
                      sx={{ bgcolor: '#ABC4FF', fontWeight: 'bold', py: 2, width: '80%', my: 2, mx: 'auto' }}>
                      Log in / Sign in
                    </Button>
                  }
                  {userToken &&
                    <Button variant="contained" onClick={logout}
                      sx={{ bgcolor: '#ABC4FF', fontWeight: 'bold', py: 2, width: '80%', my: 2, mx: 'auto' }}>
                      Log out
                    </Button>
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
                      width: 350, height: 190, bgcolor: '#fff', pt: 2, px: 4, pb: 3, borderRadius: 2,
                      display: 'block'
                    }}
                  >
                    <Button variant="outlined" fullWidth
                      onClick={() => setOpenDialogConnexion(true)}
                      sx={{ bgcolor: '#0099FF', fontSize: 17, my: 3, display: 'block' }}>
                      Connexion
                    </Button>
                    <Button variant="outlined" fullWidth
                      onClick={() => setOpenDialogInscription(true)}
                      sx={{ bgcolor: '#0099FF', fontSize: 17, my: 3, display: 'block' }}>
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
                      error={error}
                      setErrorInscription={setErrorInscription}
                      success={success}
                      setSuccess={setSuccess}
                      setSuccessInscription={setSuccessInscription}
                      isAdmin={isAdmin}
                      isRecruteur={isRecruteur}
                      isCandidat={isCandidat}
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
              setErrorInscription={setErrorInscription}
              setSuccessInscription={setSuccessInscription}
              setSuccess={setSuccess}
              setError={setError}
              errorInscription={errorInscription}
              successInscription={successInscription}
            />
          </Dialog>
        </Box>
      </AppBar>

      <Container component="main" disableGutters maxWidth="100%">{children}</Container>

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
              href={list.link}>
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