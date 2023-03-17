import React from "react";
import Input from "@mui/joy/Input";


type Props = {};

function SignUp({}: Props) {
  return (
    <div>
      <div>이름</div>
      <Input placeholder="이름을 입력하세요" />
      <div>생년월일</div>
      <Input placeholder="생년월일을 입력하세요" />
      <div>언어</div>
      <div>아이디</div>
      <Input placeholder="아이디를 입력하세요" />
      <div>비밀번호</div>
      <Input placeholder="아이디를 입력하세요" />
      <div>비밀번호 확인</div>
      <Input placeholder="아이디를 입력하세요" />
    </div>
  );
}

export default SignUp;
