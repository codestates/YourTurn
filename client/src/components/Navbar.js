import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Modal from "./Modal";
import Signin from "./Signin";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const BUTTON_WRAPPER_STYLES = {
    position: "relative",
    zIndex: 1,
  };
  return (
    <nav>
      <Link to="/">
        <h3>YourTurn</h3>
      </Link>
      <ul>
        <Link to="/write">
          <li>새 글 쓰기</li>
        </Link>

        <li style={BUTTON_WRAPPER_STYLES}>
          <button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            로그인
          </button>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <Signin />
          </Modal>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
