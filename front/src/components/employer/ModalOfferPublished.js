
import { Alert, Snackbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Slide from '@mui/material/Slide';

export default function ModalOfferPublished(props) {
  const { open, messageEmployer } = props;

  // console.log("je suis dans le modal", open, messageEmployer);

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
        }}
      >
          <Typography variant="span">{messageEmployer}</Typography>
      </Alert>
    </Snackbar>
  );
}
