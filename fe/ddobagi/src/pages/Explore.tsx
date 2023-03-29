import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import Container from "@mui/material/Container";

function Explore() {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <Container maxWidth="xl">
      <NavBar />
      <div style={{ height: "115px" }}></div>
      <Outlet />
      {pathname !== "/" && <Footer />}
    </Container>
  );
}

export default Explore;
