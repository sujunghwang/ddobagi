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
    <div>
      <Container maxWidth="xl">
        <NavBar />
        {pathname !== "/" && <div style={{ height: "115px" }}></div>}
        {pathname !== "/" && <Outlet />}
      </Container>
      {pathname === "/" && <Outlet />}
      {pathname !== "/" && <Footer />}
    </div>
  );
}

export default Explore;
