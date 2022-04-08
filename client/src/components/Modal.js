import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export default function Modal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <Fragment>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button className="close-button" onClick={onClose}>
          아이디가 있으신가요?
        </button>
        {children}
      </div>
    </Fragment>,
    document.getElementById("portal")
  );
}
