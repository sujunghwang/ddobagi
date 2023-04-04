import { bottom } from "@popperjs/core";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const pathname = useLocation();
  useEffect(() => {
    if (pathname.pathname !== "/") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
      });
    }
  }, [pathname]);
  return null;
}

export default ScrollToTop;
