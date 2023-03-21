import React, { useState, ChangeEvent } from "react";
import Input from "@mui/joy/Input";
import ColorBtn from "../ColorBtn";
import styles from "./Modal.module.scss";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/RootReducer";
import { useNavigate } from "react-router-dom";

type Props = {
  setModalContent: Function;
  closeModal: Function;
};

function Login({ setModalContent, closeModal }: Props) {
  const toSignUp = () => {
    setModalContent("SignUp");
  };
  //언어 변수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );
  //

  // 비밀번호 표기를 변경하는 함수들
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  //

  //입력값을 위한 함수들
  const [id, setId] = useState<string>("");
  const handleIdChange = (event: ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  const [password, setPassword] = useState<string>("");
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  //

  //로그인 함수
  const navigate = useNavigate();
  const navigateToCategory = () => {
    navigate("/CategoryList");
  };

  const Login = () => {
    console.log(id);
    console.log(password);
    // 아무튼 백엔드로 뭘 보내서 토큰을 받아온다. 여기선 임시로 object를 생성
    const token = { id: id, password: password };
    const UserStr = JSON.stringify(token);
    localStorage.setItem("user", UserStr);
    navigateToCategory();
    closeModal();
  };
  //

  return (
    <div className={styles.FContainer}>
      <div className={styles.IContainer}>
        {language === "CN" ? (
          <div> 帐户</div>
        ) : language === "VI" ? (
          <div> tài khoản</div>
        ) : (
          <div> 아이디</div>
        )}
        <Input placeholder="ID" value={id} onChange={handleIdChange} required/>
      </div>
      <div className={styles.IContainer}>
        {language === "CN" ? (
          <div> 密码</div>
        ) : language === "VI" ? (
          <div> mật khẩu</div>
        ) : (
          <div>비밀번호</div>
        )}
        <FormControl sx={{ width: "100%" }} variant="outlined" size="small">
          <OutlinedInput
            placeholder="Password"
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            required
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>{" "}
      </div>
      <div className={styles.BtnMargin}>
        <ColorBtn
          content={
            language === "CN"
              ? "登录"
              : language === "VI"
              ? "đăng nhập"
              : "로그인"
          }
          color="#FFD93D"
          width="100%"
          onClick={Login}
        ></ColorBtn>
      </div>
      <div className={styles.BtnMargin}>
        <ColorBtn
          content={
            language === "CN"
              ? "加入会员"
              : language === "VI"
              ? "tham gia thành viên"
              : "회원가입"
          }
          color="#FF6B6B"
          width="100%"
          onClick={toSignUp}
        ></ColorBtn>
      </div>
    </div>
  );
}

export default Login;
