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
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Link from '@mui/material/Link';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { login } from "store/actions/AuthActions";
import { register } from 'store/actions/AuthActions';

import Footer from "components/core/Footer";

function PassInput({ values, handleFormIdInscription }) {

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl sx={{ my: 1 }} variant="outlined" fullWidth>
      <InputLabel htmlFor="outlined-adornment-password">{values.titre}</InputLabel>
      <OutlinedInput
        name={values.name}
        type={showPassword ? 'text' : 'password'}
        value={values.value}
        onChange={(e) => handleFormIdInscription(e)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  )
}

export default function VisiteurLayout({ children }) {

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [mailInscription, setMailInscription] = useState('');
  const [passInscription, setPassInscription] = useState('');
  const [pass2, setPass2] = useState('');
  const [toggle, setToggle] = useState('');
  const [errorInscription, setErrorInscription] = useState('');
  const [successInscription, setSuccessInscription] = useState('');
  const [candidat, setCandidat] = useState(0);
  const [recruteur, setRecruteur] = useState(0);

  const pages = [
    { titre: "Accueil", lien: "" },
    { titre: "Offres", lien: "offres" },
    { titre: "Contactez-nous", lien: "contactus" },
  ];

  const passList = [
    { titre: 'Mot de passe', name: 'pass', value: passInscription },
    { titre: 'Confirmer mot de passe', name: 'pass2', value: pass2 },
  ]

  const handleClickShowPassword = () => { setShowPassword(!showPassword) };

  const handleMouseDownPassword = (event) => { event.preventDefault(); };

  const handleChange = (e, newToggle) => { setToggle(newToggle) };

  const isAuthenticate = useSelector(state => state.auth.authenticate)
  const isAdmin = useSelector(state => state.auth.user.isAdmin)
  const isRecruteur = useSelector(state => state.auth.user.isRecruteur)
  const isCandidat = useSelector(state => state.auth.user.isCandidat)

  const handleOpen = () => { setOpenModal(true); };

  const handleClose = () => { setOpenModal(false); };

  const handleFormId = (e) => {
    switch (e.target.name) {
      case 'mail': setMail(e.target.value)
        break;
      case 'pass': setPass(e.target.value)
        break;
      default:
    }
  }

  const handleFormIdInscription = (e) => {
    switch (e.target.name) {
      case 'mail': setMailInscription(e.target.value)
        break;
      case 'pass': setPassInscription(e.target.value)
        break;
      case 'pass2': setPass2(e.target.value)
        break;
      default:
    }
  }

  const SubmitFormId = () => {
    if (mail && pass) {
      dispatch(login({ mail, pass }))
      setMail('')
      setPass('')
    } else {
      setError('Le mail ou le mot de passe est incorrect!');
    }
  };

  const SubmitFormIdInscription = async (e) => {
    if (mailInscription && toggle && passInscription && pass2) {
      if (passInscription === pass2) {
        await dispatch(register({ mailInscription, passInscription, candidat, recruteur }));
        setMailInscription("");
        setPassInscription("");
        setPass2("");
        setToggle("");
        setCandidat(0);
        setRecruteur(0);
        setSuccessInscription('L\'utilisateur a bien été créé. veuillez valider par mail pour pouvoir vous connecter!');
        setErrorInscription('')
      } else {
        setErrorInscription('Les mots de passe ne coîncident pas!')
        setSuccessInscription('')
      }
    } else {
      setErrorInscription('Entrez tous les champs requis!')
      setSuccessInscription('')
    }

  };

  const toggleDrawer = (newOpenDrawer) => () => { setOpenDrawer(newOpenDrawer); };

  useEffect(() => {
    if (isAuthenticate === true) {
      if (isAdmin === 1) navigate("/admin");
      else if (isCandidat === 1) navigate("/candidat/dashboard");
      else if (isRecruteur === 1) navigate("/employer/dashboard");
    }
  }, [isAuthenticate])

  useEffect(() => {
    if (toggle === 'candidat') {
      setCandidat(1)
      setRecruteur(0)
    }
    if (toggle === 'recruteur') {
      setCandidat(0)
      setRecruteur(1)
    }
  }, [toggle]);

  const { window } = pages;
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{ ...style }} />
      <AppBar position="static">
        <Box>
          <Toolbar
            disableGutters
            sx={{
              display: { xs: "flex", md: "block" },
            }}
          >
            <Box sx={{ display: { xs: "flex", md: "block" } }}>
              <Box sx={{ flexGrow: 0, display: 'flex' }}>
                <Avatar
                  variant="square"
                  src={Logo}
                  sx={{ mx: 1, width: { md: 50 }, height: { md: 50 }, mt: { md: 1 } }} />
                <Typography variant='h1' sx={{ width: '100%', mt: { md: 1 } }}>
                  SKEW
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <List
                sx={{ flexGrow: 1, display: "flex", justifyContent: 'center', }}>
                {pages.map((page) => (
                  <MenuItem
                    key={page.titre}
                    onClick={() => navigate({ pathname: `/${page.lien}` })}
                    sx={{ width: { md: 250, lg: 300, xl: 400 }, }}
                  >
                    <Typography textAlign="center">{page.titre}</Typography>
                  </MenuItem>

                ))}
                <Button
                  variant="contained"
                  onClick={handleOpen}
                  sx={{ bgcolor: 'secondary.main', width: { md: 250, lg: 300, xl: 400 }, fontSize: 17 }}
                >
                  Log in / Sign in
                </Button>

                <Modal open={openModal} onClose={handleClose}>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%', left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: 800,
                      bgcolor: '#fff',
                      pt: 2, px: 4, pb: 3,
                      borderRadius: 2,
                      display: 'flex',
                      textAlign: 'center'
                    }}
                  >

                    {/* Connexion */}
                    <Box
                      sx={{ display: 'block', width: 400, pr: 2, borderRight: 2 }}
                    >
                      <Typography variant='h4'>
                        Connexion
                      </Typography>
                      <TextField
                        label='Mail'
                        name='mail'
                        variant="outlined"
                        fullWidth
                        onChange={(e) => handleFormId(e)}
                        sx={{ my: 1 }} />
                      <FormControl sx={{ my: 1 }} variant="outlined" fullWidth>
                        <InputLabel htmlFor="outlined-adornment-password">Mot de passe</InputLabel>
                        <OutlinedInput
                          name='pass'
                          type={showPassword ? 'text' : 'password'}
                          value={pass}
                          onChange={(e) => handleFormId(e)}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                        />
                      </FormControl>
                      <Link
                        component="button"
                        variant="body2"
                        onClick={() => { console.info("I'm a button.") }}
                        sx={{ color: '#0099FF', fontSize: 17, my: 3 }}>
                        Mot de passe oublié
                      </Link>
                      <Button
                        variant="contained"
                        fullWidth
                        onClick={() => SubmitFormId()}
                        sx={{ bgcolor: '#ABC4FF', fontWeight: 'bold', my: 1, py: 1 }}>
                        Envoyer
                      </Button>
                      {error.length > 0 &&
                        <Box sx={{ my: 3, color: '#ff0000' }} >
                          <Typography variant='body1' >
                            {error}
                          </Typography>
                        </Box>
                      }
                    </Box>

                    {/* Inscription */}
                    <Box
                      sx={{ display: 'block', width: 400, ml: 2, }}>
                      <Typography
                        variant='h4'
                      >
                        Inscription
                      </Typography>

                      <TextField
                        label='Mail'
                        name='mail'
                        value={mailInscription}
                        variant="outlined"
                        fullWidth
                        onChange={(e) => handleFormIdInscription(e)}
                        sx={{ my: 1 }} />

                      {passList.map((values, index) => (
                        <PassInput key={index} values={values} handleFormIdInscription={handleFormIdInscription} />
                      ))}
                      <ToggleButtonGroup
                        color="info"
                        value={toggle}
                        exclusive
                        onChange={handleChange}
                        fullWidth
                        sx={{ my: 1 }}
                      >
                        <ToggleButton value="candidat">Candidat</ToggleButton>
                        <ToggleButton value="recruteur">Recruteur</ToggleButton>
                      </ToggleButtonGroup>
                      {errorInscription.length > 0 &&
                        <Box sx={{ my: 3, color: '#ff0000' }} >
                          <Typography variant='body1' >
                            {errorInscription}
                          </Typography>
                        </Box>
                      }
                      {successInscription.length > 0 &&
                        <Box sx={{ my: 3, color: '#1e90ff' }} >
                          <Typography variant='body1' >
                            {successInscription}
                          </Typography>
                        </Box>
                      }
                      <Button
                        variant="contained"
                        fullWidth
                        onClick={() => SubmitFormIdInscription()}
                        sx={{
                          bgcolor: '#ABC4FF',
                          fontWeight: 'bold',
                          my: 1,
                          py: 1
                        }}
                      >
                        Envoyer
                      </Button>
                    </Box>
                  </Box>
                </Modal>

              </List>
            </Box>
            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, flexDirection: 'row-reverse' }}>
              <IconButton size="large" onClick={toggleDrawer(true)} color="inherit">
                <MenuIcon />
              </IconButton>
              <SwipeableDrawer
                container={container}
                anchor="top"
                open={openDrawer}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                disableSwipeToOpen={false}
                ModalProps={{ keepMounted: true }}>
                <Box
                  sx={{ listStyleType: 'none', textAlign: 'center' }}>
                  {pages.map((page) => (
                    <MenuItem key={page.titre} onClick={() => navigate({ pathname: `/${page.lien}` })}>
                      <Typography textAlign="center">{page.titre}</Typography>
                    </MenuItem>
                  ))}
                  <Button
                    variant="contained"
                    onClick={handleOpen}
                    sx={{ bgcolor: '#ABC4FF', fontWeight: 'bold', py: 2, width: '80%', my: 2, mx: 'auto' }}>
                    Log in / Sign in</Button>
                </Box>
              </SwipeableDrawer>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
      <Container component="main" disableGutters maxWidth="100%">
        {children}
      </Container>
      <Footer />
    </ThemeProvider>
  );
};