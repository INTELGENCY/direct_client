import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Zoom } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";

function ModalMui({
  top,
  left,
  width,
  height,
  content,
  openModalMui,
  handleCloseModalMui,
}) {
  const style = {
    position: "absolute",
    top: top ? top : "50%",
    left: left ? left : "50%",
    transform: "translate(-50%, -50%)",
    width: width ? width : 600,
    height: height ? height : "auto",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "7px",
  };
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
