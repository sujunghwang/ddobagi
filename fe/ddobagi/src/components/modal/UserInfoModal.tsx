import React from "react";
import Login from "./Login";
import SignUp from "./Signup";
import InfoEdit from "./InfoEdit";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./Modal.module.scss";

type Props = {
  closeModal: Function;
  modalContent: string;
  setModalContent: Function;
  modal: boolean;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "60vw", md: "400px" },
  bgcolor: "background.paper",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

function UserInfoModal({
  closeModal,
  modalContent,
  setModalContent,
  modal,
}: Props) {
  const exit = () => closeModal();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={modal}
      onClose={exit}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={modal}>
        <Box sx={style}>
          <div onClick={exit} className={styles.CloseBtn}>
            <CloseIcon />
          </div>
          <img src="img/Logo.png" alt="logo" className={styles.Logo} />
          {modalContent === "Login" && (
            <Login setModalContent={setModalContent} closeModal={closeModal} />
          )}
          {modalContent === "SignUp" && <SignUp closeModal={closeModal} />}
          {modalContent === "InfoEdit" && <InfoEdit closeModal={closeModal} />}
        </Box>
      </Fade>
    </Modal>
  );
}

export default UserInfoModal;
