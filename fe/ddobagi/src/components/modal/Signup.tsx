import React, { useState, ChangeEvent, useRef } from "react";
import Input from "@mui/joy/Input";
import ColorBtn from "../ColorBtn";
import styles from "./Modal.module.scss";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/RootReducer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { inputUserInfo } from "../../redux/UserInfo";
import axios from "axios";

type Props = {
  closeModal: Function;
};

function SignUp({ closeModal }: Props) {
  //번역
  const reduxLanguage = useSelector(
    (state: RootState) => state.languageChange.language
  );
  //언어 선택을 위한 함수들
  const [language, setLanguage] = useState<string>("");
  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };
  //

  // 비밀번호 표기를 변경하는 함수들
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  //

  //입력값을 위한 함수들
  const [name, setName] = useState<string>("");
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const [settleDay, setSettleDay] = useState<Date | null>(null);
  const [submitSettle, setSubmitSettle] = useState<number>(0);
  const handleSettleDayChange = (date: Date | null) => {
    setSettleDay(date);
    if (date) {
      const year = new Date(date).getFullYear();
      setSubmitSettle(year);
    }
  };

  const [birthDay, setBirthDay] = useState<Date | null>(null);
  const handleBirthDayChange = (date: Date | null) => {
    setBirthDay(date);
  };

  const [id, setId] = useState<string>("");
  const handleIdChange = (event: ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  const [password, setPassword] = useState<string>("");
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const [confirmPassword, setComfirmPassword] = useState<string>("");
  const handleConfirmPasswordChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setComfirmPassword(event.target.value);
  };
  //
  // 제출 여부를 확인
  const [submitted, setSubmitted] = useState<boolean>(false);
  //
  //입력값을 제출하는 함수 - 회원가입 등록 후 동기처리해서 바로 로그인.
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //제출 실패 애니메이션
  const signupBtn = useRef<HTMLDivElement>(null)
  const shakeanime = () => {
    if (signupBtn.current) {
      signupBtn.current.classList.add(styles.ErrorBtn)

      signupBtn.current.addEventListener("animationend", () => {
        if (signupBtn.current) {
          signupBtn.current.classList.remove(styles.ErrorBtn);
        }
      });
    }
  }

  const navigateToCategory = () => {
    navigate("/CategoryList");
  };
  const Log = () => {
    //로그인 함수 선언
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
    const apiLogin = async () => {
      try {
        const response = await axios.post<LogInfo>(
          "https://j8a608.p.ssafy.io.api/api/auth/login",
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
        shakeanime()
      }
    };

    //회원가입 함수 선언
    interface SignupInfo {
      loginId: string;
      pw: string;
      name: string;
      userLang: string;
      birth: string; // string이 아닐 수 있음.
      settle: string;
    }
    const signup = async () => {
      try {
        const response = await axios.post<SignupInfo>(
          "https://j8a608.p.ssafy.io.api/api/auth/signup",
          {
            loginId: id,
            pw: password,
            name: name,
            userLang: language,
            birth: birthDay,
            settle: submitSettle,
          }
        );
        apiLogin()
      } catch (error) {
        shakeanime()
      }
    };
    // 입력값 검증
    setSubmitted(true);
    if (password !== confirmPassword ||
      birthDay === null ||
      settleDay === null ||
      id === "" ||
      language === "" ||
      name === "") {
      shakeanime()
      return;
    } else {
      signup();
    }
  };

  return (
    <div className={styles.FContainer}>
      <div className={styles.CContainer}>
        <div className={styles.HContainer}>
          <div className={styles.IContainer}>
            <div>
              {reduxLanguage === "CN"
                ? "姓名"
                : reduxLanguage === "VI"
                  ? "tên"
                  : "이름"}
            </div>
            <Input
              error={submitted === true && name === "" ? true : false}
              autoFocus
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
        </div>
        <div className={styles.HContainer}>
          <div className={styles.IContainer}>
            <div>
              {reduxLanguage === "CN"
                ? "语言"
                : reduxLanguage === "VI"
                  ? "ngôn ngữ"
                  : "언어"}
            </div>
            <FormControl sx={{ minWidth: "100%" }} size="small">
              <InputLabel id="select-label" className={styles.SelectLabel}>
                Language
              </InputLabel>
              <Select
                labelId="select-label"
                id="simple-select"
                error={submitted === true && language === "" ? true : false}
                value={language}
                label="Language"
                onChange={handleChange}
                required
              >
                <MenuItem value={"KR"}>한국어</MenuItem>
                <MenuItem value={"CN"}>中文</MenuItem>
                <MenuItem value={"VI"}>Tiếng Việt</MenuItem>
              </Select>
            </FormControl>{" "}
          </div>
        </div>
      </div>
      <div>
        <div>
          {reduxLanguage === "CN"
            ? "进入韩国的年份"
            : reduxLanguage === "VI"
              ? "năm nhập cảnh"
              : "입국년도"}
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label="Select the day you entered"
              openTo="year"
              views={["year"]}
              sx={{ width: "100%" }}
              value={settleDay}
              onChange={handleSettleDayChange}
              onError={(error, value) => {
                <TextField helperText={error} required />;
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <div>
        <div>
          {reduxLanguage === "CN"
            ? "出生年月日"
            : reduxLanguage === "VI"
              ? "sinh nhật"
              : "생일"}
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label="Select Birthday"
              sx={{ width: "100%" }}
              value={birthDay}
              onChange={handleBirthDayChange}
              onError={(error, value) => {
                <TextField helperText={error} required />;
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <div className={styles.IContainer}>
        <div>
          {reduxLanguage === "CN"
            ? "帐户"
            : reduxLanguage === "VI"
              ? "tài khoản"
              : "아이디"}
        </div>
        <Input
          placeholder="ID"
          value={id}
          onChange={handleIdChange}
          error={submitted === true && id === "" ? true : false}
          required
        />
      </div>
      <div className={styles.IContainer}>
        <div>
          {reduxLanguage === "CN"
            ? "密码"
            : reduxLanguage === "VI"
              ? "mật khẩu"
              : "비밀번호"}
        </div>
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
        </FormControl>
      </div>
      <div className={styles.IContainer}>
        <div>
          {reduxLanguage === "CN"
            ? "验证密码"
            : reduxLanguage === "VI"
              ? "Xác nhận lại mật khẩu"
              : "비밀번호 확인"}
        </div>
        <FormControl sx={{ width: "100%" }} variant="outlined" size="small">
          <OutlinedInput
            placeholder="Confirm Password"
            id="outlined-adornment-confirm-password"
            type={showPassword2 ? "text" : "password"}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
            error={
              submitted === true && password !== confirmPassword ? true : false
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword2}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword2 ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
      <div className={styles.BtnMargin} ref={signupBtn}>
        <ColorBtn
          content={
            reduxLanguage === "CN"
              ? "加入会员"
              : reduxLanguage === "VI"
                ? "tham gia thành viên"
                : "회원가입"
          }
          color="#FF6B6B"
          width="100%"
          onClick={Log}
        ></ColorBtn>
      </div>
    </div>
  );
}

export default SignUp;
