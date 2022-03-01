
import { Alert, Snackbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Slide from '@mui/material/Slide';
import { height } from "@mui/system";

export default function SnackbarMessage(props) {
  const { open, message } = props;

  //  console.log("je suis dans le modal", open, messageEmployer);

  const [alertOpen, setAlertOpen] = useState(open);

  useEffect(() => {
    // console.log("effect getDataProfilEmployerEmployer");
    setAlertOpen(open);
  }, [open]);

  return (
    <Snackbar
      open={alertOpen}
      autoHideDuration={2000}
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
      TransitionComponent={Slide}
    >
      <Alert
        severity="success"
        sx={{
          bgcolor: "#ABC4FF",
          borderRadius: "10px",
          minWidth:"300px",
          height:"50px"
        }}
      >
        <Typography variant="span">{message}</Typography>
      </Alert>
    </Snackbar>
  );
}
