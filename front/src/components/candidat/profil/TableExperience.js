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
import { getProfilCandidate, postFormProfilCandidateExperience, putFormProfilCandidateExperience, deleteFormProfilCandidateExperience } from "store/actions/CandidateActions";
import { useNavigate } from "react-router";
import moment from "moment";




/*Export of the component TableExperience */
export default function TableExperience(props) {
  /*Const ListExp come from the parent Component(page) ProfilCandidate */
  const { ListExp } = props

  /* *************************************************************************** */

  /*LIST OF CONST & UseState */
  const [edit, setEdit] = React.useState(false);
  const [openAdd, setOpenAdd] = React.useState(false);

  /* *************************************************************************** */

  /*FUNCTION DATEPICKER */

  function BasicDatePicker(props) {

    const { handleExpDateParent, dateExp } = props
    const [value, setValue] = useState(dateExp)
    const handleExpDate = (prop) => (event) => {
      // 2012-06-22T03:40:06.000Z

      console.log('format date', prop, event)
      console.log('?KKKKK', moment(event).format("YYYY-MM-DDTHH:mm:ss.SSS"))

      handleExpDateParent(prop, moment(event).format("YYYY-MM-DDTHH:mm:ss.SSS"))
      setValue(event)
    }


    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label=""
          // value={String(value)}
          onChange={handleExpDate('dateStart')}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </LocalizationProvider>
    );
  }
  /* *************************************************************************** */

  function BasicDatePicker2(props) {

    const { handleExpDateEndParent, dateExpEnd } = props
    const [value2, setValue2] = useState(dateExpEnd)
    const handleExpDateEnd = (prop) => (event) => {


      console.log('format date', prop, event)
      console.log('DATE END', moment(event).format("YYYY-MM-DDTHH:mm:ss.SSS"))

      handleExpDateEndParent(prop, moment(event).format("YYYY-MM-DDTHH:mm:ss.SSS"))
      setValue2(event)
    }


    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label=""
          // value={String(value)}
          onChange={handleExpDateEnd('dateEnd')}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </LocalizationProvider>
    );
  }
  /* *************************************************************************** */

  /*MODE EDIT */

  //Condition Trigger mode edit 
  const CheckModeEdit = (props) => {
    const { status, row } = props
    // console.log('props mode edit', props)
    if (status === true) return <ModeEdit data={row} />
    return <div></div>
  }
  /* *************************************************************************** */

  //Mode edition Component

  function ModeEdit(props) {
    const { data } = props
    const dispatch = useDispatch()
    const [form, setForm] = useState({ ...data })
    // const navigate = useNavigate();


    const handleChange = (prop) => (event) => {
      setForm({ ...form, [prop]: event.target.value })
    }

    const handleExpDateParent = (prop, value) => {
      console.log('handleChange from cert DATE', prop, value)
      setForm({ ...form, [prop]: value })
      console.log('form certificate', form)
    }

    const handleExpDateEndParent = (prop, value) => {
      console.log('handleChange from cert DATE', prop, value)
      setForm({ ...form, [prop]: value })
      console.log('form certificate', form)
    }

    const submitForm = () => {
      dispatch(putFormProfilCandidateExperience({ ...form }))
      setTimeout(() => dispatch(getProfilCandidate()), 777)
      setEdit(false) // close editMode
    }
    return (
      <TableRow>

        <TableCell align='center' sx={{ minWidth: 200 }} >

          <TextField
            fullWidth
            required
            size="small"
            id="outlined-required"
            label="Compagny"
            onChange={handleChange('compagny')}
            defaultValue={data.compagny}
            value={form.compgany}
            sx={{ my: 2 }}
          />
          <TextField
            fullWidth
            required
            size="small"
            id="outlined-required"
            label="Compagny"
            onChange={handleChange('job')}
            defaultValue={data.job}
            value={form.job}
            sx={{ my: 2 }}
          />
        </TableCell>

        <TableCell align='center' >
        </TableCell>

        <TableCell align='center' sx={{ minWidth: 200 }} >
          <TextField
            fullWidth
            multiline
            onChange={handleChange('description')}
            maxRows={4}
            required
            size="large"
            id="outlined-required"
            label="Description"
            defaultValue={data.description}
            value={form.description}
          />
        </TableCell>

        <TableCell align='center' sx={{ minWidth: { xs: 150, sm: 150, md: 150 } }}>
          <Typography>Start</Typography>
          <BasicDatePicker handleExpDateParent={handleExpDateParent} dateExp={form.dateStart} />

        </TableCell>

        <TableCell align='center' sx={{ minWidth: { xs: 150, sm: 150, md: 150 } }}>
          <Typography>End</Typography>
          <BasicDatePicker2 handleExpDateEndParent={handleExpDateEndParent} dateExpEnd={form.dateEnd} />
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
    // console.log('props mode edit', props)
    if (status === true) return <ModeAdd data={row} />
    return <tr><td></td></tr>
  }

  /* *************************************************************************** */


  //Mode add Experience Component

  function ModeAdd(props) {
    // const { data } = props
    const dispatch = useDispatch()
    const [form, setForm] = useState({ user_id: 5 })

    const changeForm = (prop) => (event) => {
      setForm({ ...form, [prop]: event.target.value })
    }

    const handleExpDateParent = (prop, value) => {
      console.log('handleChange from cert DATE', prop, value)
      setForm({ ...form, [prop]: value })
      console.log('form certificate', form)
    }

    const handleExpDateEndParent = (prop, value) => {
      console.log('handleChange from cert DATE', prop, value)
      setForm({ ...form, [prop]: value })
      console.log('form certificate', form)
    }

    const submitForm = async (data) => {
      // console.log('SUBMIT', form)
      await dispatch(postFormProfilCandidateExperience({ ...form }))
      setCompagny("");
      setJob("");
      setDateStart("");
      setDateEnd("");
      setTimeout(() => dispatch(getProfilCandidate()), 777)
      setEdit(false) // close editMode
    }



    return (
      <TableRow>

        <TableCell align='center' sx={{ minWidth: 200 }} >

          <TextField
            fullWidth
            required
            size="small"
            id="outlined-required"
            label="Comp"
            onChange={changeForm('compagny')}
            defaultValue={""}
            sx={{ my: 2 }}
          />

          <TextField
            required
            size="small"
            id="outlined-required"
            onChange={changeForm('job')}
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
            onChange={changeForm('description')}
            maxRows={4}
            required
            size="small"
            id="outlined-required"
            label="Description"
            defaultValue={""}
          />
        </TableCell>

        <TableCell align='center' sx={{ minWidth: { xs: 150, sm: 150, md: 150 } }}>

          <BasicDatePicker handleExpDateParent={handleExpDateParent} dateExp={form.dateStart} />

        </TableCell>

        <TableCell align='center' sx={{ minWidth: { xs: 150, sm: 150, md: 150 } }}>

          <BasicDatePicker2 handleExpDateEndParent={handleExpDateEndParent} dateExpEnd={form.dateEnd} />
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
    const dispatch = useDispatch()
    const handleDelete = () => {
      // console.log('id Button Trigger ROW', row);
      dispatch(deleteFormProfilCandidateExperience(row.id))
      setTimeout(() => dispatch(getProfilCandidate()), 777)
    }

    /*const ActionBtn trigger only if mode edit is true & the btn open the edit row */

    const ActionBTN = () => {
      // console.log('ACTION BTN', edit)
      if (edit === true) return <Box sx={{ display: "flex", flexDirection: "column", m: 2 }}><Button onClick={(e) => setOpen(open === true ? false : true)}>
        <BorderColorIcon />
      </Button>

        <Button sx={{ color: "red", m: 2 }} onClick={() => handleDelete()} >
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
          <TableCell align='center'>{row.compagny}</TableCell>
          <TableCell align='center'>{row.job}</TableCell>
          <TableCell align='center' sx={{ minWidth: { xs: 400, sm: 400, md: 400 } }}>{row.description}</TableCell>
          <TableCell align='center'>{moment.utc(row.dateStart).format('DD/MM/YYYY')}</TableCell>
          <TableCell align='center'>{moment.utc(row.dateEnd).format('DD/MM/YYYY')}</TableCell>
          {ActionBTN()}
        </TableRow>
        <CheckModeEdit status={open} row={row} />
      </React.Fragment>

    )

  }

  /* *************************************************************************** */


  // Declare Const used for the Form

  const [compagny, setCompagny] = useState("");
  const [job, setJob] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");




  const setUseState = () => {
    setCompagny(ListExp.compagny);
    setJob(ListExp.job);
    setDateStart(ListExp.dateStart);
    setDateEnd(ListExp.dateEnd);
  };

  useEffect(() => {
    // console.log("effect for useState form employer");
    setUseState();
  }, []);

  /* *************************************************************************** */



  // condition check mode edit is activ add new column in tableHead "column action"
  // Constante pour check si le mode edit est actif afficher la colonne action
  const checkViewAction = () => {
    if (edit || openAdd === true) return <TableCell align='center'>Action
    </TableCell>
    else return <TableCell />;
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
              <TableCell align='center'>Compagny</TableCell>
              <TableCell align='center' >Job</TableCell>
              <TableCell align='center'>Description</TableCell>
              <TableCell align='center'>Start-Year</TableCell>
              <TableCell align='center'>End-Year</TableCell>
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