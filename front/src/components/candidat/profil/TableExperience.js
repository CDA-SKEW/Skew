import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Collapse from "@mui/material/Collapse";
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BottomNavigationAction, Button, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
// import DateRangePicker from '@mui/lab/DateRangePicker';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { useDispatch } from "react-redux";
import { postFormProfilCandidate, getProfilCandidate } from "store/actions/CandidateActions";





function BasicDatePicker() {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label=""
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
function ModeEdit(props) {
  const { data } = props
  const dispatch = useDispatch()
  const [form, setForm] = useState({})

  const changeForm = (prop) => (event) => {
    setForm({ ...form, [prop]: event.target.value })
  }

  const submitForm = () => {
    dispatch(postFormProfilCandidate(form))
  }

  console.log('mode edit comp', data)

  return (
    <TableRow>

      <TableCell align='center' sx={{ minWidth: 200 }} >

        <TextField
          fullWidth
          required
          size="small"
          id="outlined-required"
          label="Comp"
          onChange={() => changeForm('company')}
          defaultValue={data.company}
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          onChange={() => changeForm('company')}
          label="Post"
          defaultValue={data.post}
        />
      </TableCell>

      <TableCell align='center' >
      </TableCell>

      <TableCell align='center' sx={{ minWidth: 200 }} >
        <TextField
          fullWidth
          multiline
          onChange={() => changeForm('company')}
          maxRows={4}
          required
          size="small"
          id="outlined-required"
          label="Description"
          defaultValue={data.desc}
        />
      </TableCell>

      <TableCell align='center' sx={{ minWidth: { xs: 150, sm: 150, md: 150 } }}>
        <Typography>Start</Typography>
        <BasicDatePicker />

      </TableCell>

      <TableCell align='center' sx={{ minWidth: { xs: 150, sm: 150, md: 150 } }}>
        <Typography>End</Typography>
        <BasicDatePicker />
      </TableCell>

      <TableCell align='center' sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button sx={{ color: "green", m: 2 }} onClick={() => submitForm()}>
          <CheckCircleOutlineIcon />
        </Button>
        <Button sx={{ color: "red", m: 2 }}>
          <KeyboardReturnIcon />
        </Button>
      </TableCell>
    </TableRow>

  );
};

const CheckModeEdit = (props) => {
  const { status, row } = props
  console.log('props mode edit', props)
  if (status === true) return <ModeEdit data={row} />
  return <div></div>
}

function Row(props) {
  const { row, str } = props
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const dispatch = useDispatch()

  console.log('rowwww', row)

  // const BtnDelete = () => {
  //   if (open === true) return <Button sx={{ color: "red", }} >
  //     <DeleteIcon />
  //   </Button>
  //   else return;
  // }


  // const BtnDelete = () => {
  //   if (edit === true) return <Button sx={{ color: "red", }} >
  //     <DeleteIcon />
  //   </Button>
  //   else return;
  // }

  // const ActionBTN = () => {
  //   if (edit === true) return <Box><Button onClick={(e) => setOpen(open === true ? false : true)}>
  //     <BorderColorIcon />
  //   </Button>

  //     <Button sx={{ color: "red", }} >
  //       <DeleteIcon />
  //     </Button>
  //   </Box>

  // }


  return (
    <React.Fragment>
      <TableRow sx={{ "&:last-child td,&:last-child th": { border: 0 } }}>
        <TableCell component="th" scope="row" sx={{ display: "none" }}>0</TableCell>

        <TableCell align='center'>{row.company}</TableCell>
        <TableCell align='center'>{row.post}</TableCell>
        <TableCell align='center' sx={{ minWidth: { xs: 400, sm: 400, md: 400 } }}>{row.desc}</TableCell>
        <TableCell align='center'>{row.start}</TableCell>
        <TableCell align='center'>{row.end}</TableCell>
        <Button onClick={(e) => setOpen(open === true ? false : true)}>
          <BorderColorIcon />
        </Button>

        <Button sx={{ color: "red", }} >
          <DeleteIcon />
        </Button>
        {/* {ActionBTN()} */}

      </TableRow>

      <CheckModeEdit status={open} row={row} />

    </React.Fragment>

  )

}

export default function TableExperience(props) {
  const { ListExp,
    dataProfilCandidate
  } = props
  const [edit, setEdit] = React.useState(false);


  // Declaration des constantes pour le formulaire

  const [company, setCompany] = useState("");
  const [post, setPost] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");


  const setUseState = () => {

    setCompany(ListExp.company);
    setPost(ListExp.post);
    setStart(ListExp.start);
    setEnd(ListExp.end);


  };
  useEffect(() => {
    // console.log("effect for useState form employer");
    setUseState();
  }, [dataProfilCandidate]);







  // Constante pour check si le mode edit est actif afficher la colonne action

  // const checkViewAction = () => {
  //   if (edit === true) return <TableCell align='center'>Action
  //   </TableCell>
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

      {/* Titre section Formation */}
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
          Experience
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
        }}>


        <Button onClick={(e) => setEdit(edit === true ? false : true)}>
          MODE EDITION
        </Button>
      </Box>

      <TableContainer sx={{ px: "50px" }} component={Paper}>
        <Table sx={{ width: "100%" }}>
          <TableHead sx={{ bgcolor: "#FF7F50" }}>
            <TableRow>

              <TableCell align='left'>Company</TableCell>
              <TableCell align='left' >Job</TableCell>
              <TableCell align='left'>Description</TableCell>
              <TableCell align='left'>Start-Year</TableCell>
              <TableCell align='left'>End-Year</TableCell>
              {/* {checkViewAction()} */}

              <TableCell align='left'>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {ListExp.length > 0 &&
              ListExp.map((row, index) => <Row key={index} row={row} />)}

          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}