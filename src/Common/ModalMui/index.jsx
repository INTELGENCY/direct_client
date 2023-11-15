import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Zoom } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
const style = {
  position: "absolute",
  top: "35%",
  left: "35%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "7px",
};

function ModalMui({ content, openModalMui, handleCloseModalMui }) {
  return (
    <div>
      <Modal
        keepMounted
        open={openModalMui}
        onClose={handleCloseModalMui}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Zoom in={openModalMui}>
          <Box sx={style}>{content}</Box>
        </Zoom>
      </Modal>
    </div>
  );
}

export default ModalMui;
