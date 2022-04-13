import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

axios.defaults.withCredentials = true;
const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  border: 1px solid green;
  height: 500px;
  max-width: 1400px;
  align-items: center;
  margin: 100px auto 0 auto;
`;

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
        setErrorMessage("입력 정보를 다시 확인해 주세요.");
        return;
      }

      setSuccess(true);
      setEmail("");
      setPwd("");

      await axios.post(
        "http://localhost:4000/user/signup",
        { ...userinfo },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      navigate("/");
    }
  };

  return (
    <SignupContainer>
      <center>
        <h1>회원가입</h1>
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
    </SignupContainer>
  );
}
