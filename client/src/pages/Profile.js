import React, { useEffect, useState } from "react";
import "../App.css";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  max-width: 800px;
  height: 800px;
  margin: 120px auto 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 5px;
`;

const ProfileTitle = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size : 30px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
`;

// const ProfileImg = styled.div``;

const NickNameContainer = styled.div`
  `

const CurrentNickName = styled.div`
font-size : 30px;
margin : 30px 0 30px 20px;`

const NickNameChange = styled.button`
font-size:20px;`

const NickNameInput = styled.input`
margin-right : 20px;
font-size:20px;`

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end; ;`;

const Button = styled.button`
  font-size: 17px;
  margin: 10px;
  padding: 5px;
  cursor: pointer;`;



function Profile() {
  const [nickname, setNickname] = useState("");
  const handleChangeNickname = (event) => {
    setNickname(event.target.value);
  };

  useEffect(() => {
    async function getNickName() {
      console.log("useEffect");
      let { data } = await axios.get("http://localhost:80/user/profile");
      console.log("데이터확인", data)
    }
    getNickName();
  }, []);

  const handleButtonClick = async () => {
    try {
      const response = await axios.patch("http://localhost:80/user/profile/", {
        nickname: nickname,
      });
      console.log("👉 Returned data:", response);
    } catch (e) {
      console.log(`😱 Axios request failed: ${e}`);
    }
  };

  return (
    <Container>
      <ProfileTitle>내 정보 수정</ProfileTitle>
      {/* <ProfileImg>이미지</ProfileImg> */}
      <NickNameContainer>
        <CurrentNickName>현재 닉네임</CurrentNickName>
        <NickNameInput
          onChange={handleChangeNickname}
          type="text"
          placeholder="변경할 닉네임"
        ></NickNameInput>
        <NickNameChange onClick={handleButtonClick}>닉네임 변경</NickNameChange>
      </NickNameContainer>
      <ButtonWrap>
        <Button>회원 탈퇴</Button>
        <Button>수정 완료</Button>
      </ButtonWrap>
    </Container>
  );
}

export default Profile;