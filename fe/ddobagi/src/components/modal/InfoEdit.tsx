import React, { useState, ChangeEvent, useEffect, useRef } from "react";
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
import axios from "axios";
import { useNavigate } from "react-router-dom";

type Props = {
  closeModal: Function;
};

function InfoEdit({ closeModal }: Props) {
  const userId = useSelector(
    (state: RootState) => state.inputUserInfo.payload.id
  );

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
  const [name, setName] = useState<string>();
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const [birthDay, setBirthDay] = useState<Date | null>(null);
  const handleBirthDayChange = (date: Date | null) => {
    setBirthDay(date);
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
  //기본 정보 받아오기
  interface basedata {
    userId: number;
    loginId: string;
    name: string;
    age: number;
    userLang: string;
  }
  interface dataOfBase {
    data: basedata;
  }
  useEffect(() => {
    const fetchBase = async () => {
      try {
        const response = await axios.get<dataOfBase>(
          `https://j8a608.p.ssafy.io/api/users/${userId}`
        );
        setName(response.data.data.name);
        setLanguage(response.data.data.userLang);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBase();
  }, []);

  //버튼 애니메이션
  const submitBtn = useRef<HTMLDivElement>(null);
  const shakeanime = () => {
    if (submitBtn.current) {
      submitBtn.current.classList.add(styles.ErrorBtn);

      submitBtn.current.addEventListener("animationend", () => {
        if (submitBtn.current) {
          submitBtn.current.classList.remove(styles.ErrorBtn);
        }
      });
    }
  };
  //기존 비밀번호 확인
  const [canEdit, setCanEdit] = useState<boolean>(false);
  const [prevPassword, setPrevPassword] = useState<string>("");
  const handleprevPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPrevPassword(event.target.value);
  };
  interface check {
    data: Boolean;
  }
  const checkPassword = async () => {
    try {
      const response = await axios.post<check>(
        `https://j8a608.p.ssafy.io/api/users/${userId}/password`,
        {
          userId: userId,
          pw: prevPassword,
        }
      );
      const success = response.data;
      setCanEdit(true);
    } catch (error) {
      shakeanime();
    }
  };

  // 제출 여부를 확인
  const [submitted, setSubmitted] = useState<boolean>(false);
  const navigate = useNavigate();
  //입력값을 제출하는 함수 - 회원정보 수정 후 모달 닫고, navigate로 같은 페이지 새로고침
  const EditSubmit = () => {
    const fetchEdit = async () => {
      try {
        const response = await axios.put<dataOfBase>(
          `https://j8a608.p.ssafy.io/api/users/${userId}`,
          {
            name: name,
            birth: birthDay,
            userLang: language,
            pw: password,
          }
        );
        const success = response.data;
        if (prevPassword !== password) {
          // 비밀번호를 바꿧으면 로그아웃 후 메인
          sessionStorage.clear();
          navigate("/");
        } else {
          navigate("/mypage");
        }
        // 바꾸지 않았으면 제자리 새로고침
      } catch (error) {
        shakeanime();
      }
    };

    if (password !== confirmPassword || birthDay === null || name === "") {
      shakeanime();
    } else {
      fetchEdit();
      closeModal();
    }
  };

  if (canEdit) {
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
                submitted === true && password !== confirmPassword
                  ? true
                  : false
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
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault(); // 엔터키가 기본 동작을 하지 않도록 막음
                  EditSubmit(); // 엔터키를 눌렀을 때 실행할 함수
                }
              }}
            />
          </FormControl>{" "}
        </div>
        <div className={styles.BtnMargin} ref={submitBtn}>
          <ColorBtn
            content={
              reduxLanguage === "CN"
                ? "更改信息"
                : reduxLanguage === "VI"
                ? "thay đổi thông tin"
                : "정보 수정"
            }
            color="#FF6B6B"
            width="100%"
            onClick={EditSubmit}
          ></ColorBtn>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.IContainer}>
        <div>
          {reduxLanguage === "CN"
            ? "请输入您的旧密码"
            : reduxLanguage === "VI"
            ? "Vui lòng nhập mật khẩu cũ của bạn"
            : "기존 비밀번호를 입력하세요."}
        </div>
        <FormControl sx={{ width: "100%" }} variant="outlined" size="small">
          <OutlinedInput
            placeholder="Previos Password"
            id="previos-password"
            type={showPassword2 ? "text" : "password"}
            value={prevPassword}
            onChange={handleprevPasswordChange}
            required
            error={true}
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
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault(); // 엔터키가 기본 동작을 하지 않도록 막음
                checkPassword(); // 엔터키를 눌렀을 때 실행할 함수
              }
            }}
          />
        </FormControl>
        <div className={styles.BtnMargin} ref={submitBtn}>
          <ColorBtn
            content={
              reduxLanguage === "CN"
                ? "查看"
                : reduxLanguage === "VI"
                ? "kiểm tra"
                : "확인하기"
            }
            color="#FF6B6B"
            width="100%"
            onClick={checkPassword}
          ></ColorBtn>
        </div>
      </div>
    );
  }
}
export default InfoEdit;
