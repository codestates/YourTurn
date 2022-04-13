import React, { useState } from "react";
import { Link } from "react-router-dom";
import { postSignIn } from "../../Api";

function Signin({ setShowModal }) {
  console.log("check");
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };
  const handleLogin = async () => {
    const { email, password } = loginInfo;

    if (Object.values(loginInfo).includes("")) {
      setErrorMessage("이메일과 비밀번호를 입력하세요");
      return;
    }

    let data = await postSignIn({ email, password });

    if (data) {
      console.log("user info data: ", data);
      sessionStorage.setItem("isLogin", "true");
      // sessionStorage.setItem("userInfo", data.data)
      setShowModal(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div>
        <center>
          <h1>Sign In</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <span>이메일</span>
              <input type="email" placeholder="이메일" onChange={handleInputValue("email")} />
            </div>
            <div>
              <span>비밀번호</span>
              <input
                type="password"
                placeholder="비밀번호"
                onChange={handleInputValue("password")}
              />
            </div>
            <div onClick={closeModal}>
              <Link to="/signup">아직 아이디가 없으신가요?</Link>
            </div>
            <div>
              <button className="btn btn-login" type="submit" onClick={handleLogin}>
                로그인
              </button>
            </div>
            <div className="alert-box">{errorMessage}</div>
          </form>
        </center>
      </div>
    </>
  );
}

export default Signin;
