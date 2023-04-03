import React from "react"
import { createPortal } from "react-dom";

const ModalPortal = ({ children }: { children: React.ReactNode }) => {
  const el = document.getElementById("modal") as HTMLElement;
  return createPortal(children, el);
};

export default ModalPortal;
