import React, { Fragment } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <Fragment>
      <div>
        <center>
          <h1>Sign In</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <span>이메일</span>
              <input type="email" />
            </div>
            <div>
              <span>비밀번호</span>
              <input type="password" />
            </div>
            <div>
              <Link to="/signup">아직 아이디가 없으신가요?</Link>
            </div>
            <button className="btn btn-login" type="submit">
              로그인
            </button>
            <div className="alert-box"></div>
          </form>
        </center>
      </div>
    </Fragment>
  );
}

export default Signin;
