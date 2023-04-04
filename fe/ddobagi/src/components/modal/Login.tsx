import React, { useState, ChangeEvent, useRef } from "react";
import Input from "@mui/joy/Input";
import ColorBtn from "../ColorBtn";
import styles from "./Modal.module.scss";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/RootReducer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { inputUserInfo } from "../../redux/UserInfo";

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
  const LoginBtn = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const navigateToCategory = () => {
    navigate("/CategoryList");
  };

  interface LogInfo {
    grantType: string;
    accessToken: string;
    refreshToken: null;
    tokenExpiresIn: number;
    id: number;
    loginId: string;
    name: string;
    userLang: string;
  }
  const shakeanime = () => {
    if (LoginBtn.current) {
      LoginBtn.current.classList.add(styles.ErrorBtn);

      LoginBtn.current.addEventListener("animationend", () => {
        if (LoginBtn.current) {
          LoginBtn.current.classList.remove(styles.ErrorBtn);
        }
      });
    }
  };

  const dispatch = useDispatch();
  const Login = () => {
    if (id === "" || password === "") {
      shakeanime();
    } else {
      const apiLogin = async () => {
        try {
          const response = await axios.post<LogInfo>(
            "http://j8a608.p.ssafy.io:8080/api/auth/login",
            {
              loginId: id,
              pw: password,
            }
          );

          interface UserInfo {
            name: string;
            id: number;
          }

          const newUserInfo: UserInfo = {
            name: response.data.name,
            id: response.data.id,
          };
          dispatch(inputUserInfo(newUserInfo));
          const token = response.data.accessToken;
          const AccessToken = JSON.stringify(token);
          sessionStorage.setItem("token", AccessToken);
          navigateToCategory();
          closeModal();
        } catch (error) {
          shakeanime();
        }
      };
      apiLogin();
    }
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
        <Input placeholder="ID" value={id} onChange={handleIdChange} required />
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
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault(); // 엔터키가 기본 동작을 하지 않도록 막음
                Login(); // 엔터키를 눌렀을 때 실행할 함수
              }
            }}
          />
        </FormControl>
      </div>
      <div className={styles.BtnMargin} ref={LoginBtn}>
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
