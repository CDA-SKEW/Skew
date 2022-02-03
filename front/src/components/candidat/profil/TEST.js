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