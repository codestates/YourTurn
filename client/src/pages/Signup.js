import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export default function Signup() {
  const [userinfo, setUserinfo] = useState({
    email: "",
    password: "",
    nickname: "",
  });
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [matchPwd, setMatchPwd] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleInputValue = (key) => (e) => {
    setUserinfo({ ...userinfo, [key]: e.target.value });
  };

  useEffect(() => {
    setErrorMessage("");
  }, [email, pwd, matchPwd]);

  const handleSignup = async (e) => {
    if (Object.values(userinfo).includes("")) {
      e.preventDefault();
      const validated1 = EMAIL_REGEX.test(email);
      const validated2 = PWD_REGEX.test(pwd);
      if (!validated1 || !validated2) {
        setErrorMessage("잘못된 접근입니다");
        return;
      }

      setSuccess(true);
      setEmail("");
      setPwd("");

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
            console.log("res:::", res.config.data); // ---> { "email":"2022-04-01T08:10:51.430Z@test.com","password":"1234","username":"test","mobile":"010-1234-5678" }
            // const { email, password, username, mobile } = res.config.data
            // setUserinfo(res.config.data);
            // setIsLogin(true);
          }
        })
        .catch((err) => console.log(err));

      navigate("/");
    }
  };

  return (
    <div>
      <center>
        <h1>Sign Up</h1>
        <div ref={errRef}>{errorMessage}</div>
        <form>
          <div>
            <span>이메일</span>
            <input type="email" placeholder="이메일" onChange={handleInputValue("email")} />
          </div>
          <div>
            <span>비밀번호</span>
            <input type="password" placeholder="비밀번호" onChange={handleInputValue("password")} />
          </div>
          <div>
            <span>닉네임</span>
            <input type="text" placeholder="닉네임" onChange={handleInputValue("nickname")} />
          </div>

          <div>
            <Link to="/">이미 아이디가 있으신가요?</Link>
          </div>
          <button className="btn btn-signup" type="submit" onClick={handleSignup}>
            회원가입
          </button>
          <div className="alert-box">{errorMessage}</div>
        </form>
      </center>
    </div>
  );
}
