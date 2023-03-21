import React from "react";
import Input from "@mui/joy/Input";

type Props = {
  closeModal: Function;
};

function InfoEdit({ closeModal }: Props) {
  return (
    <div>
      <div>아이디</div>
      <Input placeholder="아이디를 입력하세요" />
      <div>비밀번호</div>
      <Input placeholder="비밀번호를 입력하세요" />
      <div>로그인</div>
      <div>회원가입</div>
    </div>
  );
}

export default InfoEdit;
