import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* border: 1px solid green; */
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
const Text = styled.div`
  margin-right: 10px;
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
          // headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log("signin res::", response);
        if (response.accessToken) {
          localStorage.setItem("user", JSON.stringify(response));
        }

        return response.data;
      });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password, nickname).then(
        (response) => {
          console.log("signup res::", response);

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
    // setSuccess(true);
    // setEmail("");
    // setPwd("");
  };

  return (
    <Container>
      <SignupContainer>
        <form onSubmit={handleSignup}>
          <Title>
            <h3 className="underline">Sign up</h3>
          </Title>
          <InputWrap>
            <Text>이메일</Text>
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputWrap>
          <InputWrap>
            <Text>비밀번호</Text>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputWrap>
          <InputWrap>
            <Text>닉네임</Text>
            <input
              type="text"
              placeholder="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </InputWrap>
          <ButtonWrap>
            <button
              className="cursor-pointer px-3 py-2 text-sm text-blue-100 bg-sky-500 rounded hover:bg-sky-400"
              type="submit"
              disabled={isTextareaDisabled}
            >
              등록
            </button>
          </ButtonWrap>
        </form>
      </SignupContainer>
    </Container>
  );
};

export default Signup;
