import {
  Button,
  Container,
  createTheme,
  Popover,
  responsiveFontSizes,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { themeUser } from "configs/theme";
import FormProfilEmployer from "components/employer/FormProfilEmployer";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { useDispatch, useSelector } from "react-redux";
import { getProfilEmployer } from "store/actions/EmployerActions";
import { ThemeProvider } from "@emotion/react";
import FormPersonalEmployer from "components/employer/FormPersonalEmployer";

const EmployerProfil = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("effect getDataProfilEmployerEmployer");
    dispatch(getProfilEmployer());
  }, []);

  //dispatch(getProfilEmployer());

  const dataProfilEmployer = useSelector(
    (state) => state.employer.dataProfilEmployer
  );
  // console.log("store dataProfilEmployer page profil", dataProfilEmployer);

  const dataApiSiret = useSelector((state) => state.employer.dataSiretApi);
  // console.log("store dataApiSiret",dataApiSiret)

  //Constante pour editer le formulaire entreprise
  const [profilNotEditabled, setProfilNotEditabled] = useState(true);
  const [buttonProfilVisible, setButtonProfilVisibled] = useState(false);

  //Constante pour editer le formulaire entreprise
  const [profilPersonnalNotEditabled, setProfilPersonnalNotEditabled] =
    useState(true);
  const [buttonProfilPersonnalVisible, setButtonProfilPersonnalVisible] =
    useState(false);

  // Pour responsive Typography
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  // Pour popover bouton edit entreprise
  const [anchorEl, setAnchorEl] = React.useState(null);
  // Pour popover bouton edit data personnelle
  const [anchorElDataPerso, setAnchorElDataPerso] = React.useState(null);

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          bgcolor: themeUser.palette.background.default,
          p: 2,
        }}
      >
        <Box
          sx={{
            bgcolor: themeUser.palette.text.primary,
            borderRadius: 1,
            pt: 2,
            pb: 4,
            mt: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                px: 1,
                bgcolor: themeUser.palette.primary.main,
                color: themeUser.palette.text.primary,
                borderRadius: 1,
                position: "relative",
                top: "-45px",
                textAlign: "center",
              }}
            >
              Mon compte
            </Typography>
          </Box>

          <Typography sx={{ textAlign: "center", mb: 2 }} variant="h5">
            Informations entreprise
            <Button
              onClick={(e) => {
                setProfilNotEditabled(!profilNotEditabled);
                setButtonProfilVisibled(!buttonProfilVisible);
              }}
            >
              {/* //icone avec popover */}
              <CreateOutlinedIcon
                aria-owns={"editFormFactoty"}
                aria-haspopup="true"
                onMouseEnter={(e) => {
                  setAnchorEl(e.currentTarget);
                }}
                onMouseLeave={(e) => {
                  setAnchorEl(null);
                }}
              />
              <Popover
                id="editFormFactoty"
                sx={{
                  pointerEvents: "none",
                }}
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={(e) => {
                  setAnchorEl(null);
                }}
                disableRestoreFocus
              >
                <Typography sx={{ p: 1 }}>Editer votre profil</Typography>
              </Popover>
              {/* End icone avec popover */}
            </Button>
          </Typography>

          <FormProfilEmployer
            dataProfilEmployer={dataProfilEmployer}
            dataApiSiret={dataApiSiret}
            profilNotEditabled={profilNotEditabled}
            buttonProfilVisible={buttonProfilVisible}
          />

          <Typography sx={{ textAlign: "center", mb: 2 }} variant="h5">
            Informations du compte
            <Button
              onClick={(e) => {
                setProfilPersonnalNotEditabled(!profilPersonnalNotEditabled);
                setButtonProfilPersonnalVisible(!buttonProfilPersonnalVisible);
              }}
            >
              <CreateOutlinedIcon
                aria-owns={"editFormPersonalData"}
                aria-haspopup="true"
                onMouseEnter={(e) => {
                  setAnchorElDataPerso(e.currentTarget);
                }}
                onMouseLeave={(e) => {
                  setAnchorElDataPerso(null);
                }}
              />

              <Popover
                id="editFormPersonalData"
                sx={{
                  pointerEvents: "none",
                }}
                open={Boolean(anchorElDataPerso)}
                anchorEl={anchorElDataPerso}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={(e) => {
                  setAnchorElDataPerso(null);
                }}
                disableRestoreFocus
              >
                <Typography sx={{ p: 1 }}>
                  Editer votre Email et/ou mot de passe
                </Typography>
              </Popover>
              {/* End icone avec popover */}
            </Button>
          </Typography>
          <FormPersonalEmployer
            dataProfilEmployer={dataProfilEmployer}
            profilPersonnalNotEditabled={profilPersonnalNotEditabled}
            buttonProfilPersonnalVisible={buttonProfilPersonnalVisible}
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default EmployerProfil;
