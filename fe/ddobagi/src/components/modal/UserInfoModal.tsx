import React from "react";
import Login from "./Login";
import SignUp from "./Signup";
import InfoEdit from "./InfoEdit";

type Props = {
  show: string;
  closeModal: Function;
  modalContent: string;
  setModalContent: Function;
};

function UserInfoModal({
  show,
  closeModal,
  modalContent,
  setModalContent,
}: Props) {
  const exit = () => closeModal();

  return (
    <div onClick={exit}>
      <div onClick={(e) => e.stopPropagation()}>
        <div onClick={exit}>X</div>
        <div>또바기 로고</div>
        {modalContent === "Login" && (
          <Login setModalContent={setModalContent} />
        )}
        {modalContent === "SignUp" && <SignUp />}
        {modalContent === "InfoEdit" && <InfoEdit />}
      </div>
    </div>
  );
}

export default UserInfoModal;
