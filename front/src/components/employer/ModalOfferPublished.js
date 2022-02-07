import { Dialog } from "@material-ui/core";
import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

export default function ModalOfferPublished(props) {
  const { open, messageEmployer } = props;

  console.log("je suis dans le modal", open);



  // const [close, setClose] = useState(open);

  // useEffect(() => {
  //   // console.log("effect getDataProfilEmployerEmployer");
  //   setClose(open);
  // }, [messageEmployer]);

  // setTimeout(function () {
  //   setClose(false);
  // }, 2000);

  // console.log("usesate", close);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#ABC4FF",
    borderRadius: "10px",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <Dialog
      modalTransition={{ timeout: 2000 }}
      hideBackdrop
      open={open}
      // onClose={handleClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box
        sx={{
          ...style,
          width: 400,
          height: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5">Votre offre a bien été publiée !</Typography>
      </Box>
    </Dialog>
  );
}
