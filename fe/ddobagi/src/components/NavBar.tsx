import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import SelectLanguage from "../container/LanguageSelectorContainer";
import ModalPortal from "./modal/Portal";
import UserInfoModal from "./modal/UserInfoModal";
import { Transition } from "react-transition-group";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate, useLocation } from "react-router-dom";
import ColorBtn from "../components/ColorBtn";

function NavBar() {
  const [modal, setModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>("");
  const closeModal = () => setModal(false);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
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
    navigate("/parentpage");
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

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <div>
      <AppBar position="sticky" color="inherit" elevation={0}>
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
                <MenuItem
                  key="보호자M"
                  onClick={() => {
                    navigateToParents();
                    handleCloseNavMenu();
                  }}
                >
                  <Typography textAlign="center">보호자</Typography>
                </MenuItem>
                <MenuItem
                  key="한국어 연습M"
                  onClick={() => {
                    navigateToCategory();
                    handleCloseNavMenu();
                  }}
                >
                  <Typography textAlign="center">한국어 연습</Typography>
                </MenuItem>
                <MenuItem
                  key="한국 문화M"
                  onClick={() => {
                    navigateToCulture();
                    handleCloseNavMenu();
                  }}
                >
                  <Typography textAlign="center">한국 문화</Typography>
                </MenuItem>
                <MenuItem
                  key="내 정보M"
                  onClick={() => {
                    navigateToMyPage();
                    handleCloseNavMenu();
                  }}
                >
                  <Typography textAlign="center">내 정보</Typography>
                </MenuItem>
                <SelectLanguage />
                <ColorBtn
                  content="로그인"
                  color="#FFD93D"
                  width="130px"
                  onClick={() => {
                    setModal(true);
                    setModalContent("Login");
                    handleCloseNavMenu();
                  }}
                />
                <ColorBtn
                  content="로그아웃"
                  color="#FF6B6B"
                  width="130px"
                  onClick={() => {
                    setModal(false);
                    handleCloseNavMenu();
                  }}
                />
              </Menu>
            </Box>
            <img
              src="img/Logo_Nologin.png"
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
                src="img/Logo_Nologin.png"
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
                <div
                  key="보호자"
                  className={styles.Router}
                  onClick={navigateToParents}
                  style={{
                    borderWidth:
                      location.pathname === "/parentpage"
                        ? "0px 3px 4px 0px"
                        : "0px 0px 0px 0px",
                  }}
                >
                  보호자
                </div>
                <div
                  key="한국어 연습"
                  className={styles.Router}
                  onClick={navigateToCategory}
                  style={{
                    borderWidth:
                      location.pathname === "/CategoryList"
                        ? "0px 3px 4px 0px"
                        : "0px 0px 0px 0px",
                  }}
                >
                  한국어 연습
                </div>
                <div
                  key="한국 문화"
                  className={styles.Router}
                  onClick={navigateToCulture}
                  style={{
                    borderWidth:
                      location.pathname === "/CultureList"
                        ? "0px 3px 4px 0px"
                        : "0px 0px 0px 0px",
                  }}
                >
                  한국 문화
                </div>
                <div
                  key="내 정보"
                  className={styles.Router}
                  onClick={navigateToMyPage}
                  style={{
                    borderWidth:
                      location.pathname === "/mypage"
                        ? "0px 3px 4px 0px"
                        : "0px 0px 0px 0px",
                  }}
                >
                  내 정보
                </div>

                <SelectLanguage />
                <ColorBtn
                  content="로그인"
                  color="#FFD93D"
                  width="130px"
                  onClick={() => {
                    setModal(true);
                    setModalContent("Login");
                  }}
                />
                <ColorBtn
                  content="로그아웃"
                  color="#FF6B6B"
                  width="130px"
                  onClick={() => {
                    setModal(false);
                  }}
                />
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <ModalPortal>
        <Transition unmountOnExit in={modal} timeout={500}>
          {(state) => (
            <UserInfoModal
              show={state}
              closeModal={closeModal}
              modalContent={modalContent}
              setModalContent={setModalContent}
            />
          )}
        </Transition>
      </ModalPortal>
    </div>
  );
}

export default NavBar;
