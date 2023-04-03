import React from 'react';
import { Outlet } from "react-router-dom"
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

function Explore() {
  const location = useLocation();
  const pathname = location.pathname
  return (
    <div>
      <NavBar />
      <div style={{ height: "115px" }}></div>
      <Outlet />
      {pathname !== "/" && <Footer />}
    </div>
  )
}

export default Explore