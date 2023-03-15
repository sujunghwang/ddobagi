import React from 'react';
import {Outlet} from "react-router-dom"

function Learning() {
  return(
    <div>Learning
      <Outlet/>
    </div>
  )
}

export default Learning