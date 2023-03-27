import React from 'react';
import {Outlet} from "react-router-dom"
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Explore() {
  return(
    <div>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Explore