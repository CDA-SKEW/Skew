import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Box } from "@mui/system";
import Slide from "@mui/material/Slide";
import {
  deleteOffer,
  getOffer,
  putActionCandidate,
} from "store/actions/EmployerActions";
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function ModalConfimation(props) {
  const {
    colorBgModal,
    colorTextModal,
    titleModal,
    textModal,
    action,
    param,
    onClose,
    open,
    offer,
  } = props;
  // console.log("offer modal confirmation props", props)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user_token");
    // console.log('loggouuuttt !!!')
  }

  const handleCancel = () => {
    onClose();
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    // console.log("envoi formulaire action", action, id)

    switch (action) {
      case "deleteOffer":
        await dispatch(deleteOffer(param));
        setTimeout(() => {
          dispatch(getOffer());
        }, 600);
        break;

      case "candidateRetain":
        const dataRetain = {
          user_id: param,
          offer_id: offer.offer_id,
          isRetain: true,
        };
        await dispatch(putActionCandidate(dataRetain));
        setTimeout(() => {
          dispatch(getOffer());
        }, 600);
        break;

      case "candidateNoRetain":
        const dataNoRetain = {
          offer_id: offer.offer_id,
          user_id: param,
          isRetain: false,
        };
        await dispatch(putActionCandidate(dataNoRetain));
        setTimeout(() => {
          dispatch(getOffer());
        }, 600);
        break;

      case "disconnect":
        logout()
        navigate("/");
        break;
      default:
        break;
    }

    onClose();
  };
  //
  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth={"xs"}
        open={open}
        TransitionComponent={Transition}
      >
        <Box
          component="form"
          bgcolor={colorBgModal}
          onSubmit={(e) => handleSendMessage(e)}
        >
          <DialogTitle sx={{ textAlign: "center", alignItems: "center" }}>
            <Typography
              fontWeight={"bold"}
              color={colorTextModal}
              variant="h6"
              component="span"
            >
              {titleModal}
            </Typography>
          </DialogTitle>
          <DialogContent sx={{ textAlign: "center", alignItems: "center" }}>
            <Typography color={colorTextModal} variant="body1" component="span">
              {textModal}
            </Typography>
          </DialogContent>

          <DialogActions sx={{ alignItems: "center" }}>
            <Button
              variant="outlined"
              sx={{ bgcolor: "#33C863", color: "white" }}
              type="submit"
            >
              Oui
            </Button>
            <Button
              variant="outlined"
              onClick={handleCancel}
              sx={{ bgcolor: "#667DB3", color: "white" }}
            >
              Non
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
