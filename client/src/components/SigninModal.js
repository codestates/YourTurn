import React from "react";
import "../App.css";
import Modal from "./Modal";
import Signin from "./Signin";

function SigninModal({ isOpen, onClose, handleResponseSuccess }) {
  const BUTTON_WRAPPER_STYLES = {
    position: "relative",
    zIndex: 1,
  };
  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES}>
        <Modal open={isOpen} onClose={onClose}>
          <Signin onClose={onClose} handleResponseSuccess={handleResponseSuccess} />
        </Modal>
      </div>
    </>
  );
}

export default SigninModal;
