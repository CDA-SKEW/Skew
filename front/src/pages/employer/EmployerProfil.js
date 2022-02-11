import {
  Button,
  Container,
  Popover,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

import FormProfilEmployer from "components/employer/profil/FormProfilEmployer";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { useDispatch, useSelector } from "react-redux";
import { getProfilEmployer } from "store/actions/EmployerActions";
import FormPersonalEmployer from "components/employer/profil/FormPersonalEmployer";
import { themeEmployer } from "configs/theme";

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

  // Pour popover bouton edit entreprise
  const [anchorEl, setAnchorEl] = useState(null);
  // Pour popover bouton edit data personnelle
  const [anchorElDataPerso, setAnchorElDataPerso] = useState(null);

  // console.log(themeEmployer)

  return (
    <Container
      sx={{ py: 4 }}
    >
      <Box
              bgcolor={themeEmployer.palette.bgBox.main}
              borderRadius={3}
              paddingTop={2}
              paddingBottom={2}
              marginTop={2}
      >
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Typography
            variant="h5"
            paddingX={1}
            bgcolor={themeEmployer.palette.bgTitleItems.main}
            color={themeEmployer.palette.textTitleItems.main}
            borderRadius={1}
            position={"relative"}
            top={"-35px"}
            textAlign={"center"}
          >
            Mon compte
          </Typography>
        </Box>

        <Typography textAlign={"center"} marginBottom={2} variant="h5">
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

        {dataProfilEmployer && (
          <FormProfilEmployer
            dataProfilEmployer={dataProfilEmployer}
            dataApiSiret={dataApiSiret}
            profilNotEditabled={profilNotEditabled}
            buttonProfilVisible={buttonProfilVisible}
          />
        )}

        <Typography textAlign={"center"} marginBottom={2} variant="h5">
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
              <Typography padding={1}>
                Editer votre Email et/ou mot de passe
              </Typography>
            </Popover>
            {/* End icone avec popover */}
          </Button>
        </Typography>
        {dataProfilEmployer && (
          <FormPersonalEmployer
            dataProfilEmployer={dataProfilEmployer}
            profilPersonnalNotEditabled={profilPersonnalNotEditabled}
            buttonProfilPersonnalVisible={buttonProfilPersonnalVisible}
          />
        )}
      </Box>
    </Container>
  );
};

export default EmployerProfil;
