import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  border: 1px solid green;
  height: 500px;
  max-width: 1400px;
  align-items: center;
  margin: 100px auto 0 auto;
`;
const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  max-width: 1400px;
  margin: 80px auto 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 5px;
`;

const InputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const isTextareaDisabled = email.length === 0 || password.length === 0 || nickname.length === 0;

  const navigate = useNavigate();

  const signup = async (email, password, nickname) => {
    return await axios
      .post(
        "http://localhost:80/user/signup",
        {
          email,
          password,
          nickname,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log("response::", response);
        if (response.accessToken) {
          localStorage.setItem("user", JSON.stringify(response));
        }

        return response.data;
      });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password).then(
        (response) => {
          navigate("/");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <SignupContainer>
        <form onSubmit={handleSignup}>
          <Title>
            <h3>Sign up</h3>
          </Title>
          <InputWrap>
            <span>이메일</span>
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputWrap>
          <InputWrap>
            <span>비밀번호</span>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputWrap>
          <InputWrap>
            <span>닉네임</span>
            <input
              type="text"
              placeholder="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </InputWrap>
          <ButtonWrap>
            <button type="submit" disabled={isTextareaDisabled}>
              등록
            </button>
          </ButtonWrap>
        </form>
      </SignupContainer>
    </Container>
  );
};

export default Signup;
