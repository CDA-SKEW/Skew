import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, Button, Stack, TextField } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { display } from "@mui/system";



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

  const BtnDelete = () => {
    if (edit === true) return <Button sx={{ color: "red" }} >
      <DeleteIcon />
    </Button>
    else return;
  };

  // ##################################################
  // Bouton ADD Interest ,Open textfield on click
  const [addSkill, setAddSkill] = useState("");

  const BtnAddSkill = () => {
    if (addSkill === true) return <AddSkill />
    else return;
  }

  function AddSkill() {
    return (
      <Box>
        <Box>
          <TextField

            size="small"
            required
            id="outlined-required"
            label="Add Skill"
          />
          <Button sx={{ color: "black" }} >
            <CheckCircleOutlineIcon />
          </Button>
        </Box>
        <Box>
          <Button sx={{ color: "green" }} >
            <CheckCircleOutlineIcon />
            Submit
          </Button>
          <Button sx={{ color: "red" }}>
            < KeyboardReturnIcon />
            Cancel
          </Button>

        </Box>
      </Box>
    )
  }
  // ####################################


  function ModeText(props) {
    return (
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 8 }}>
        {ListSkill.map((Skill, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Typography>{Skill}</Typography>
          </Grid>
        ))}
      </Grid>

    );
  }

  function ModeEdit(props) {
    return (
      <Stack direction="column" spacing={2}>
        {ListSkill.map((skill, index) => (
          <Box>
            <TextField
              keyskill
              size="small"
              required
              id="outlined-required"
              label="Skill"
              defaultValue={skill}
            />
            {BtnDelete()}
          </Box>
        ))}
        <Box sx={{ display: 'flex', justifyContent: 'right' }}>
          <Button onClick={(e) => setAddSkill(addSkill === true ? false : true)} sx={{ color: "#004F98", px: 8.5 }} >
            <AddCircleOutlineIcon /><Typography>Add Skill</Typography>
          </Button>
        </Box>
        <Box>
          {BtnAddSkill()}
        </Box>
      </Stack>


    );
  }

  const checkEdit = () => {
    if (edit === true) return <ModeEdit />;
    else return <ModeText />;
  };
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
          Compétences
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
      </Box>
    </Box>
  );
}