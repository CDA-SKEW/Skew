/*IMPORT REACT & REACT COMPOMENTS & MUI(frameworck)COMPONENTS */
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
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { postFormProfilCandidate, getProfilCandidate } from "store/actions/CandidateActions";





/*Export of the component TableExperience */
export default function TableExperience(props) {
  /*Const ListExp come from the parent Component(page) ProfilCandidate */
  const { ListExp,
    dataProfilCandidate
  } = props

  /* *************************************************************************** */

  /*LIST OF CONST & UseState */
  const [edit, setEdit] = React.useState(false);
  const [openAdd, setOpenAdd] = React.useState(false);

  /* *************************************************************************** */

  /*FUNCTION DATEPICKER */

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
  /* *************************************************************************** */

  /*MODE EDIT */

  //Condition Trigger mode edit 
  const CheckModeEdit = (props) => {
    const { status, row } = props
    console.log('props mode edit', props)
    if (status === true) return <ModeEdit data={row} />
    return <div></div>
  }
  /* *************************************************************************** */

  //Mode edition Component

  function ModeEdit(props) {
    const { data } = props
    const dispatch = useDispatch()
    const [form, setForm] = useState({})

    const handleChange = (prop) => (event) => {
      // console.log('change form', prop, event.target.value)
      setForm({ ...form, [prop]: event.target.value })
      // console.log('end form', form)
    }



    const submitForm = () => {
      // console.log('SUBMIT', form)
      dispatch(postFormProfilCandidate({ ...form }))
      setTimeout(() => dispatch(getProfilCandidate()), 777)
      setEdit(false) // close editMode
    }

    console.log('mode edit comp', data)

    return (
      <TableRow>

        <TableCell align='center' sx={{ minWidth: 200 }} >

          <TextField
            fullWidth
            required
            size="large"
            id="outlined-required"
            label="Company"
            onChange={() => handleChange('company')}
            defaultValue={data.company}
            value={form.company}
            sx={{ my: 2 }}
          />
          <TextField
            required
            size="large"
            id="outlined-required"
            onChange={() => handleChange('post')}
            label="Post"
            defaultValue={data.post}
            value={form.post}
            sx={{ my: 2 }}
          />
        </TableCell>

        <TableCell align='center' >
        </TableCell>

        <TableCell align='center' sx={{ minWidth: 200 }} >
          <TextField
            fullWidth
            multiline
            onChange={() => handleChange('description')}
            maxRows={4}
            required
            size="large"
            id="outlined-required"
            label="Description"
            defaultValue={data.desc}
            value={form.desc}
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
            Submit
          </Button>
          <Button sx={{ color: "red", my: 2 }}>
            <KeyboardReturnIcon />
            Cancel
          </Button>
        </TableCell>
      </TableRow>
    );
  };

  /* *************************************************************************** */

  /*MODE ADD  */

  //Condition Trigger mode Add 
  const CheckModeAdd = (props) => {
    const { status, row } = props
    console.log('props mode edit', props)
    if (status === true) return <ModeAdd data={row} />
    return <div></div>
  }

  /* *************************************************************************** */


  //Mode add Experience Component

  function ModeAdd(props) {
    const { data } = props
    const dispatch = useDispatch()
    const [form, setForm] = useState({})

    const changeForm = (prop) => (event) => {
      setForm({ ...form, [prop]: event.target.value })
    }

    const submitForm = () => {
      dispatch(postFormProfilCandidate(form))
    }

    // console.log('mode edit comp', data)

    return (
      <TableRow>

        <TableCell align='center' sx={{ minWidth: 200 }} >

          <TextField
            fullWidth
            required
            size="large"
            id="outlined-required"
            label="Comp"
            // onChange={() => changeForm('company')}
            defaultValue={""}
            sx={{ my: 2 }}
          />

          <TextField
            required
            size="large"
            id="outlined-required"
            // onChange={() => changeForm('company')}
            label="Post"
            defaultValue={""}

          />
        </TableCell>

        <TableCell align='center' >
        </TableCell>

        <TableCell align='center' sx={{ minWidth: 200 }} >
          <TextField
            fullWidth
            multiline
            // onChange={() => changeForm('description')}
            maxRows={4}
            required
            size="large"
            id="outlined-required"
            label="Description"
            defaultValue={""}
          />
        </TableCell>

        <TableCell align='center' sx={{ minWidth: { xs: 150, sm: 150, md: 150 } }}>

          <BasicDatePicker />

        </TableCell>

        <TableCell align='center' sx={{ minWidth: { xs: 150, sm: 150, md: 150 } }}>

          <BasicDatePicker />
        </TableCell>

        <TableCell align='center' sx={{ display: 'flex', flexDirection: 'column' }}>

          <Button sx={{ color: "green", m: 2 }} onClick={() => submitForm()}>
            <CheckCircleOutlineIcon />
            Submit
          </Button>
          <Button sx={{ color: "red", m: 2 }}>
            <KeyboardReturnIcon />
            Cancel
          </Button>

        </TableCell>
      </TableRow>
    );
  };

  /* *************************************************************************** */


  /* FUNCTION ROW */

  function Row(props) {
    const { row, str } = props
    const [open, setOpen] = React.useState(false);


    /*const ActionBtn trigger only if mode edit is true & the btn open the edit row */

    const ActionBTN = () => {
      console.log('ACTION BTN', edit)
      if (edit === true) return <Box sx={{ display: "flex", flexDirection: 'column', m: 2 }}><Button onClick={(e) => setOpen(open === true ? false : true)}>
        <BorderColorIcon />
      </Button>

        <Button sx={{ color: "red", m: 2 }} >
          <DeleteIcon />
        </Button>
      </Box>
      else <div></div>
    }

    /* *************************************************************************** */


    /* TableBody & the component <CheckModeEdit/> who's open if the btn in the ActionBtn is trigger*/

    return (
      <React.Fragment>
        <TableRow sx={{ "&:last-child td,&:last-child th": { border: 0 } }}>
          <TableCell component="th" scope="row" sx={{ display: "none" }}>0</TableCell>
          <TableCell align='center'>{row.company}</TableCell>
          <TableCell align='center'>{row.post}</TableCell>
          <TableCell align='center' sx={{ minWidth: { xs: 400, sm: 400, md: 400 } }}>{row.desc}</TableCell>
          <TableCell align='center'>{row.start}</TableCell>
          <TableCell align='center'>{row.end}</TableCell>
          {ActionBTN()}
        </TableRow>
        <CheckModeEdit status={open} row={row} />
      </React.Fragment>

    )

  }

  /* *************************************************************************** */


  // Declare Const used for the Form

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

  /* *************************************************************************** */







  // condition check mode edit is activ add new column in tableHead "column action"
  // Constante pour check si le mode edit est actif afficher la colonne action
  const checkViewAction = () => {
    if (edit || openAdd === true) return <TableCell align='center'>Action
    </TableCell>
    else return <div></div>;
  }

  /* *************************************************************************** */


  //the render of complete mounted components

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

      {/* *************************************************************************** */}


      {/* Group of BTN Trigger each ModeEdit & ModeAdd */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
          alignItems: "center",

        }}>


        <Button sx={{ m: 2 }} variant="outlined" size="small" onClick={(e) => setEdit(edit === true ? false : true)}>
          Mode Edit
        </Button>
        <Button sx={{ mr: 6 }} variant="outlined" size="small" onClick={(e) => setOpenAdd(openAdd === true ? false : true)}>
          <AddCircleOutlineIcon />
          Add Exp
        </Button>
      </Box>

      {/* *************************************************************************** */}


      {/* The TableHead where the TableBody "data" is maped*/}

      <TableContainer sx={{ px: "50px" }} component={Paper}>
        <Table sx={{ width: "100%" }}>
          <TableHead sx={{ bgcolor: "#FF7F50" }}>
            <TableRow>
              <TableCell align='left'>Company</TableCell>
              <TableCell align='left' >Job</TableCell>
              <TableCell align='left'>Description</TableCell>
              <TableCell align='left'>Start-Year</TableCell>
              <TableCell align='left'>End-Year</TableCell>
              {checkViewAction()}
              {/* {checkViewAction()} = <TableCell align='left'>Action</TableCell>
              but appear only if mode edit is trigger */}
            </TableRow>
          </TableHead>
          <TableBody>
            <CheckModeAdd status={openAdd} />
            {ListExp.length > 0 &&
              ListExp.map((row, index) => <Row key={index} row={row} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

/* *************************************************************************** */