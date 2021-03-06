import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

// import { postSignIn } from "../../Api";
// import { useNavigate } from "react-router-dom";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  height: 500px;
  max-width: 1400px;
  align-items: center;
  margin: auto;
`;
const SigninContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  max-width: 1400px;
  margin: 40px auto 0 auto;
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
const AlertBox = styled.div`
  display: flex;
  justify-content: center;
`;

function Signin({ setShowModal }) {
  // const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const login = (email, password) => {
    return axios
      .post(
        `${process.env.REACT_APP_API_URL}/user/signin`,
        {
          email,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log("login res::", response);
        if (response.accessToken) {
          localStorage.setItem("user", JSON.stringify(response));
        }

        return response.data;
      });
  };

  const handleLogin = async () => {
    const { email, password } = loginInfo;

    if (Object.values(loginInfo).includes("")) {
      setErrorMessage("?????? ????????? ????????? ?????????.");
      return;
    }
    try {
      await login(email, password).then(
        () => {
          sessionStorage.setItem("isLogin", "true");
          setShowModal(false);
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

  // let data = await postSignIn({ email, password });

  // if (data) {
  //   console.log("user info data: ", data);
  //   sessionStorage.setItem("isLogin", "true");
  // sessionStorage.setItem("userInfo", data.data)
  //   setShowModal(false);
  // }

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Container>
        <SigninContainer>
          <form onSubmit={(e) => e.preventDefault()}>
            <Title>
              <h1 className="text-grey-600 underline">Sign In</h1>
            </Title>
            <InputWrap>
              <Text>?????????</Text>
              <input type="email" placeholder="?????????" onChange={handleInputValue("email")} />
            </InputWrap>
            <InputWrap>
              <Text>????????????</Text>
              <input
                type="password"
                placeholder="????????????"
                onChange={handleInputValue("password")}
              />
            </InputWrap>

            <InputWrap className="underline" onClick={closeModal}>
              <Link to="/signup">?????? ???????????? ????????????????</Link>
            </InputWrap>
            <ButtonWrap>
              <button
                className="cursor-pointer px-3 py-2 text-sm text-blue-100 bg-sky-500 rounded hover:bg-sky-400"
                type="submit"
                onClick={handleLogin}
              >
                ?????????
              </button>
            </ButtonWrap>
            <AlertBox className="alert-box">{errorMessage}</AlertBox>
          </form>
        </SigninContainer>
      </Container>
    </>
  );
}

export default Signin;
