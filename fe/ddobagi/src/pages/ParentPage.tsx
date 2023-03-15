import React from 'react';
import {Outlet} from "react-router-dom"

function ParentPage() {
  return(
    <div>ParentPage
      <Outlet/>
    </div>
  )
}

export default ParentPage