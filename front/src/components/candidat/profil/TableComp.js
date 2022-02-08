import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, Button, Stack, TextField } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';



export default function ResponsiveGrid(props) {
  const { ListSkill,
    dataProfilCandidat } = props
  const [edit, setEdit] = React.useState(false);


  const [skill, setSkill] = useState("");



  const setUseState = () => {
    setSkill(ListSkill.skill);
  };
  useEffect(() => {
    // console.log("effect for useState form employer");
    setUseState();
  }, [dataProfilCandidat]);



  function ModeText(props) {
    return (
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 8 }}>
        {ListSkill.map((skill, index) => (
          <Grid item xs={2} sm={4} md={3} key={index}>
            <Typography>{skill}</Typography>
          </Grid>
        ))}
      </Grid>

    );
  }

  function ModeEdit(props) {
    return (
      <Stack direction="column" spacing={2}>
        {ListSkill.map((skill, index) => (

          <TextField
            key={index}
            size="small"
            required
            id="outlined-required"
            label="Interest"
            defaultValue={skill}
          />
        ))}
        <TextField

          size="small"
          required
          id="outlined-required"
          label="Add Skill"
        />
        <Box>
          <Button sx={{ bgcolor: "green", color: "white", m: 2 }} >
            VALID
          </Button >
          <Button sx={{ bgcolor: "red", color: "white", m: 2 }} >
            ANNULER
          </Button>
        </Box>
      </Stack>


    );
  }

  //     Constante pour check si le mode edit est actif 
  const checkEdit = () => {
    if (edit === true) return <ModeEdit />;
    else return <ModeText />;
  };
  // Constante pour check si le mode edit est actif afficher la colonne action
  // const checkViewAction = () => {
  //   if (edit === true) return <TextField />
  //   else return;
  // }

  return (
    <Box
      sx={{
        bgcolor: "#FFFFFF",
        height: "auto",
        borderRadius: 1,
        my: 4,

      }}
    >
      {/* Titre section Compétences */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

        }}
      >
        <Typography
          variant="h5"
          component="h5"
          sx={{
            px: 1,
            bgcolor: "#004F98",
            color: "#FFFFFF",
            borderRadius: 1,
            position: "relative",
            top: -15,
          }}
        >
          Compétence
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
        }}>


        <Button onClick={(e) => setEdit(edit === true ? false : true)}>
          <BorderColorIcon />
        </Button>
      </Box>

      <Box sx={{ flexGrow: 1, textAlign: "center" }}>
        {checkEdit()}
        {/* {checkViewAction()} */}
      </Box>
    </Box>

  );
}



