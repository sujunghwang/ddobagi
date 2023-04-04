import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import styles from "./Explore.module.scss";

function Explore() {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div>
      <Container maxWidth="xl">
        <NavBar />
        {pathname !== "/" && <div style={{ height: "115px" }}></div>}
        {pathname !== "/" &&
          pathname !== "/CategoryList" &&
          pathname !== "/CultureList" && <Outlet />}
      </Container>
      {(pathname === "/" ||
        pathname === "/CategoryList" ||
        pathname === "/CultureList") && <Outlet />}
      {pathname !== "/" && <Footer />}
      {pathname !== "/" && (
        <div>
          <img src={"/img/fish.png"} className={styles.fish} alt="fish" />
        </div>
      )}
    </div>
  );
}

export default Explore;
