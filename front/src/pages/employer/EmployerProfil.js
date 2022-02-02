import { Button, Container, CssBaseline, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { themeUser } from "configs/theme";
import FormProfilEmployer from "components/employer/FormProfilEmployer";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { useDispatch, useSelector } from "react-redux";
import { getProfilEmployer } from "store/actions/EmployerActions";

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

  // const [editProfilPersonal, setEditProfilPersonal] = useState("none");

  // const handleEditProfilPersonal = (e) => {
  //   // console.log("fct EditProfilPersonal");
  //   setEditProfilPersonal("block")
  // };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        sx={{
          bgcolor: themeUser.palette.background.default,
          p: 2,
        }}
      >
        {/* Card résumé dashboard */}

        <Box
          sx={{
            bgcolor: themeUser.palette.text.primary,
            borderRadius: 1,
            pt: 2,
            pb: 8,
            mt: 8,
          }}
        >
          {/* Titre section Résumé dashboard */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              component="h3"
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

          <Typography sx={{ textAlign: "center", mb: 4 }} variant="h4">
            Informations entreprise
          </Typography>

          <FormProfilEmployer
            dataProfilEmployer={dataProfilEmployer}
            dataApiSiret={dataApiSiret}
          />

          <Typography sx={{ textAlign: "center", my: 4 }} variant="h4">
            Informations personnelles
            <Button
            // onClick={(e) => handleEditProfilPersonal(e)}
            >
              <CreateOutlinedIcon />
            </Button>
          </Typography>
          {/* <FormPersonalEmployer editProfilPersonal={editProfilPersonal} /> */}
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default EmployerProfil;
