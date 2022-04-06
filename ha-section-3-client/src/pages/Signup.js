import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;

export default function Signup({ setIsLogin }) {
  const [userinfo, setuserinfo] = useState({
    email: "",
    password: "",
    username: "",
    mobile: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();
  const handleInputValue = (key) => (e) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };
  const handleSignup = async () => {
    // TODO : 서버에 회원가입을 요청 후 로그인 페이지로 이동하세요.
    // TODO : 모든 항목을 입력하지 않았을 경우 에러를 표시해야 합니다.

    if (Object.values(userinfo).includes("")) {
      setErrorMessage("모든 항목은 필수입니다");
      return;
    }

    await axios
      .post(
        "https://localhost:4000/signup",
        { ...userinfo },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res) {
          // console.log("res:::", res.config.data); // ---> { "email":"2022-04-01T08:10:51.430Z@test.com","password":"1234","username":"test","mobile":"010-1234-5678" }
          // const { email, password, username, mobile } = res.config.data
          // setuserinfo(res.config.data);
          // setIsLogin(true);
        }
      })
      .catch((err) => console.log(err));
    history.push("/");
  };

  return (
    <div>
      <center>
        <h1>Sign Up</h1>
        <div>모든 항목은 필수입니다</div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <span>이메일</span>
            <input type="email" onChange={handleInputValue("email")} />
          </div>
          <div>
            <span>비밀번호</span>
            <input type="password" onChange={handleInputValue("password")} />
          </div>
          <div>
            <span>이름</span>
            <input type="text" onChange={handleInputValue("username")} />
          </div>
          <div>
            {" "}
            <span>전화번호</span>{" "}
            <input type="tel" onChange={handleInputValue("mobile")} />
          </div>
          <div>
            <Link to="/login">이미 아이디가 있으신가요?</Link>
          </div>
          <button
            className="btn btn-signup"
            type="submit"
            onClick={handleSignup}
          >
            회원가입
          </button>
          <div className="alert-box">{errorMessage}</div>
        </form>
      </center>
    </div>
  );
}
