import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import SigninModal from "./SigninModal";

function Navbar({ isLogin, handleResponseSuccess }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav>
        <Link to="/">
          <h3>YourTurn</h3>
        </Link>
        <ul>
          <Link to="/write">
            <li>새 글 쓰기</li>
          </Link>

          <li
            onClick={() => {
              setIsOpen(true);
            }}
          >
            {isLogin ? `nickname` : <button>로그인</button>}
          </li>
          <SigninModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            handleResponseSuccess={handleResponseSuccess}
          />
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
