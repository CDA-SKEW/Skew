// /*------------MUI Imports-------------*/

// import * as React from "react";
// import Chip from "@mui/material/Chip";
// import Stack from "@mui/material/Stack";
// import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// /*------------Export function-------------*/

// export default function IconChips(props) {
//   const { user } = props;
//   // const handleClick = () => {};

//   const checkStatus = () => {
//     if (user.row.isVerified) {
//       return (
//         <Chip
//           label={user.row.isVerified === 1 ? "checked" : "not check"}
//           variant="outlined"
//           color={user.row.isVerified === 1 ? "primary" : "error"}
//           icon={
//             user.row.isVerified === 1 ? (
//               <CheckCircleIcon />
//             ) : (
//               <RemoveCircleIcon />
//             )
//           }
//         />
//       );
//     } else if (user.row.isBanned) {
//       return (
//         <Chip
//           label={user.row.isBanned === 1 ? "banned" : "not banned"}
//           variant="outlined"
//           color={user.row.isBanned === 1 ? "warning" : "primary"}
//           icon={
//             user.row.isBanned === 1 ? <RemoveCircleIcon /> : <CheckCircleIcon />
//           }
//         />
//       );
//     }
//   };

//   return (
//     <Stack direction="row" spacing={1}>
//       {/* {checkStatus()} */}
//     </Stack>
//   );
// }
