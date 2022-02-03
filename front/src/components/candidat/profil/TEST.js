// import * as React from "react";
// import { Button, Stack, TextField, Typography } from "@mui/material";
// import { Box } from "@mui/system";

// export default function TableTest(props) {
//   const { ListUser, user } = props;
//   const [edit, setEdit] = React.useState(false);

//   const data = {
//     address: "22 rue des olivettes",
//     phone: "06.21.25.32.25",
//     mail: "machin@truc.fr",
//   };

//   function ModeText(props) {
//     return (
//       <Stack direction="row" spacing={2}>
//         <Typography>{ data.address }</Typography>
//         <Typography>{ data.phone }</Typography>
//         <Typography>{ data.mail }</Typography>
//       </Stack>
//     );
//   }

//   function ModeEdit(props) {
//     return (
//       <Stack direction="row" spacing={2}>
//         <TextField
//           required
//           id="outlined-required"
//           label="address"
//           defaultValue={data.address}
//         />
//         <TextField
//           required
//           id="outlined-required"
//           label="phone"
//           defaultValue={data.phone}
//         />
//         <TextField
//           required
//           id="outlined-required"
//           label="mail"
//           defaultValue={data.mail}
//         />
//       </Stack>
//     );
//   }

//   const checkEdit = () => {
//     if (edit !== true) return <ModeEdit />;
//     else return <ModeText />;
//   };

//   return (
//     <Box
//       sx={{
//         bgcolor: "#FFFFFF",
//         height: "auto",
//         borderRadius: 1,
//         my: 4,
//       }}
//     >
//       {/* Titre section Contact */}
//       <Button onClick={(e) => setEdit(edit === true ? false : true)}>
//         Edit
//       </Button>

//       <p> {edit}</p>

//       {checkEdit()}

//        {/* <ModeEdit />
//       <ModeText />  */}
//     </Box>
//   );
// }
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  useGridApiRef,
  DataGridPro,
  GridToolbarContainer,
  GridActionsCellItem,
} from '@mui/x-data-grid-pro';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
  randomId,
} from '@mui/x-data-grid-generator';

const rows = [
  {
    id: randomId(),
    name: randomTraderName(),
    age: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 36,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 19,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
];

function EditToolbar(props) {
  const { apiRef } = props;

  const handleClick = () => {
    const id = randomId();
    apiRef.current.updateRows([{ id, isNew: true }]);
    apiRef.current.setRowMode(id, 'edit');
    // Wait for the grid to render with the new row
    setTimeout(() => {
      apiRef.current.scrollToIndexes({
        rowIndex: apiRef.current.getRowsCount() - 1,
      });

      apiRef.current.setCellFocus(id, 'name');
    });
  };

  return (
    <GridToolbarContainer>
      <Button color="primary"  startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

EditToolbar.propTypes = {
  apiRef: PropTypes.shape({
    current: PropTypes.object.isRequired,
  }).isRequired,
};

export default function FullFeaturedCrudGrid() {
  const apiRef = useGridApiRef();

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleCellFocusOut = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => (event) => {
    event.stopPropagation();
    apiRef.current.setRowMode(id, 'edit');
  };

  const handleSaveClick = (id) => async (event) => {
    event.stopPropagation();
    // Wait for the validation to run
    const isValid = await apiRef.current.commitRowChange(id);
    if (isValid) {
      apiRef.current.setRowMode(id, 'view');
      const row = apiRef.current.getRow(id);
      apiRef.current.updateRows([{ ...row, isNew: false }]);
    }
  };

  const handleDeleteClick = (id) => (event) => {
    event.stopPropagation();
    apiRef.current.updateRows([{ id, _action: 'delete' }]);
  };

  const handleCancelClick = (id) => (event) => {
    event.stopPropagation();
    apiRef.current.setRowMode(id, 'view');

    const row = apiRef.current.getRow(id);
    if (row.isNew) {
      apiRef.current.updateRows([{ id, _action: 'delete' }]);
    }
  };

  const columns = [
    
    { field: 'name',headerClassName: 'bidouille', headerName: 'Name', width: 180, editable: true },
    { field: 'age',headerClassName: 'bidouille', headerName: 'Age', type: 'number', editable: true },
    {
      field: 'dateCreated',
      headerName: 'Date Created',
      headerClassName: 'bidouille',
      type: 'date',
      width: 180,
      editable: true,
    },
    { 
      field: 'lastLogin',
      headerName: 'Last Login',
      headerClassName: 'bidouille',
      type: 'dateTime',
      width: 220,
      editable: true,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      headerClassName: 'bidouille',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = apiRef.current.getRowMode(id) === 'edit';

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
              color="primary"
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 500,
        width: '75%',
        display:"flex",
        justifyContent:"center",
        '& .bidouille': {
            backgroundColor: 'rgba(255, 7, 0, 0.55)',
            color:'white'
          },
          
      }}
    >
      <DataGridPro
      sx={{bgcolor:"white" ,width:"75%"}}
        rows={rows}
        columns={columns}
        apiRef={apiRef}
        editMode="row"
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        onCellFocusOut={handleCellFocusOut}
        components={{
          Toolbar: EditToolbar,
        }}
        componentsProps={{
          toolbar: { apiRef },
        }}
      />
    </Box>
  );
}
