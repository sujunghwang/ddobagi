import React, { useState } from "react";
import ColorBtn from "../components/ColorBtn";
import UserInfoModal from "../components/modal/UserInfoModal";

function MyPage() {
  const [modal, setModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>("");
  const closeModal = () => setModal(false);
  return (
    <div>
      <div>MyPage</div>
      <ColorBtn
        content="회원정보 수정"
        color="#FF6B6B"
        width="130px"
        onClick={() => {
          setModal(true);
          setModalContent("InfoEdit");
        }}
      />
      <UserInfoModal
        closeModal={closeModal}
        modalContent={modalContent}
        setModalContent={setModalContent}
        modal={modal}
      />
    </div>
  );
}

export default MyPage;
