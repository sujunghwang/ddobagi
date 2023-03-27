import React from 'react';
import { Outlet } from "react-router-dom"
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Explore() {
  return (
    <div>
      <NavBar />
      <div style={{ height: "115px" }}></div>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Explore