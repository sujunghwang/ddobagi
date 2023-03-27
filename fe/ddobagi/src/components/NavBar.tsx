import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import SelectLanguage from "../container/LanguageSelectorContainer";
import UserInfoModal from "./modal/UserInfoModal";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate, useLocation } from "react-router-dom";
import ColorBtn from "../components/ColorBtn";
import { useSelector } from "react-redux";
import { RootState } from "../redux/RootReducer";

function NavBar() {
  //언어 변수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );
  //

  //모달 관련 함수
  const [modal, setModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>("");
  const closeModal = () => setModal(false);
  // 모달 관련 함수 종료

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  // 네비게이션을 위한 함수들
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  const navigateToCategory = () => {
    navigate("/CategoryList");
  };
  const navigateToCulture = () => {
    navigate("/CultureList");
  };
  const navigateToParents = () => {
    navigate("/parentpage/record");
  };
  const navigateToMyPage = () => {
    navigate("/mypage");
  };
  //네비게이션 함수 종료

  //현 위치를 기록하는 함수
  const location = useLocation();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  //

  // 로그인 확인 변수
  const userStr = localStorage.getItem("user");

  //로그아웃 함수
  const logout = () => {
    localStorage.clear();
    navigateToHome();
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <div>
      <AppBar position="fixed" color="inherit" elevation={0} >
        <Container maxWidth="xl">
          {/* 모바일 환경 */}
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {userStr && (
                  <MenuItem
                    key="보호자M"
                    onClick={() => {
                      navigateToParents();
                      handleCloseNavMenu();
                    }}
                  >
                    <Typography textAlign="center">
                      {language === "CN"
                        ? "监护人"
                        : language === "VI"
                          ? "người giám hộ"
                          : "보호자"}
                    </Typography>
                  </MenuItem>
                )}
                <MenuItem
                  key="한국어 연습M"
                  onClick={() => {
                    navigateToCategory();
                    handleCloseNavMenu();
                  }}
                >
                  <Typography textAlign="center">
                    {language === "CN"
                      ? "学习"
                      : language === "VI"
                        ? "học hỏi"
                        : "한국어 연습"}
                  </Typography>
                </MenuItem>
                <MenuItem
                  key="한국 문화M"
                  onClick={() => {
                    navigateToCulture();
                    handleCloseNavMenu();
                  }}
                >
                  <Typography textAlign="center">
                    {language === "CN"
                      ? "韩国文化"
                      : language === "VI"
                        ? "văn hoá"
                        : "한국 문화"}
                  </Typography>
                </MenuItem>
                {userStr && (
                  <MenuItem
                    key="내 정보M"
                    onClick={() => {
                      navigateToMyPage();
                      handleCloseNavMenu();
                    }}
                  >
                    <Typography textAlign="center">
                      {language === "CN"
                        ? "我的简历"
                        : language === "VI"
                          ? "Thông tin của tôi"
                          : "내 정보"}
                    </Typography>
                  </MenuItem>
                )}
                <SelectLanguage />
                {userStr === null && (
                  <ColorBtn
                    content={
                      language === "CN"
                        ? "登录"
                        : language === "VI"
                          ? "đăng nhập"
                          : "로그인"
                    }
                    color="#FFD93D"
                    width="130px"
                    onClick={() => {
                      setModal(true);
                      setModalContent("Login");
                      handleCloseNavMenu();
                    }}
                  />
                )}
                {userStr && (
                  <ColorBtn
                    content={
                      language === "CN"
                        ? "登出"
                        : language === "VI"
                          ? "đăng xuất"
                          : "로그아웃"
                    }
                    color="#FF6B6B"
                    width="130px"
                    onClick={() => {
                      logout()
                      handleCloseNavMenu();
                    }}
                  />
                )}
              </Menu>
            </Box>
            <img
              src={"/img/Logo.png"}
              alt="logo"
              onClick={navigateToHome}
              className={styles.LogoXs}
            />
            {/* PC환경 */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                flexGrow: 1,
              }}
            >
              <img
                src={"/img/Logo.png"}
                alt="logo"
                className={styles.Logo}
                onClick={navigateToHome}
              />
              <Box
                sx={{
                  display: {
                    xs: "none",
                    md: "inline-flex",
                    alignItems: "center",
                  },
                }}
              >
                {userStr && (
                  <div
                    key="보호자"
                    className={styles.Router}
                    onClick={navigateToParents}
                    style={{
                      borderWidth:
                        location.pathname === "/parentpage/record" || location.pathname === "/parentpage/map" || location.pathname === "/parentpage/news"
                          ? "0px 0px 4px 0px"
                          : "0px 0px 0px 0px",
                    }}
                  >
                    {language === "CN"
                      ? "监护人"
                      : language === "VI"
                        ? "người giám hộ"
                        : "보호자"}
                  </div>
                )}
                <div
                  key="한국어 연습"
                  className={styles.Router}
                  onClick={navigateToCategory}
                  style={{
                    borderWidth:
                      location.pathname === "/CategoryList"
                        ? "0px 0px 4px 0px"
                        : "0px 0px 0px 0px",
                  }}
                >
                  {language === "CN"
                    ? "学习"
                    : language === "VI"
                      ? "học hỏi"
                      : "한국어 연습"}
                </div>
                <div
                  key="한국 문화"
                  className={styles.Router}
                  onClick={navigateToCulture}
                  style={{
                    borderWidth:
                      location.pathname === "/CultureList"
                        ? "0px 0px 4px 0px"
                        : "0px 0px 0px 0px",
                  }}
                >
                  {language === "CN"
                    ? "韩国文化"
                    : language === "VI"
                      ? "văn hoá"
                      : "한국 문화"}
                </div>
                {userStr && (
                  <div
                    key="내 정보"
                    className={styles.Router}
                    onClick={navigateToMyPage}
                    style={{
                      borderWidth:
                        location.pathname === "/mypage"
                          ? "0px 0px 4px 0px"
                          : "0px 0px 0px 0px",
                    }}
                  >
                    {language === "CN"
                      ? "我的简历"
                      : language === "VI"
                        ? "Thông tin của tôi"
                        : "내 정보"}
                  </div>
                )}
                <div style={{ marginRight: "1rem" }}>
                  <SelectLanguage />
                </div>
                {userStr === null && (
                  <ColorBtn
                    content={
                      language === "CN"
                        ? "登录"
                        : language === "VI"
                          ? "đăng nhập"
                          : "로그인"
                    }
                    color="#FFD93D"
                    width="130px"
                    onClick={() => {
                      setModal(true);
                      setModalContent("Login");
                    }}
                  />
                )}
                {userStr && (
                  <ColorBtn
                    content={
                      language === "CN"
                        ? "登出"
                        : language === "VI"
                          ? "đăng xuất"
                          : "로그아웃"
                    }
                    color="#FF6B6B"
                    width="9rem"
                    onClick={logout}
                  />
                )}
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <UserInfoModal
        closeModal={closeModal}
        modalContent={modalContent}
        setModalContent={setModalContent}
        modal={modal}
      />
    </div>
  );
}

export default NavBar;
