import React, { useEffect, useState } from "react";
import "../App.css";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  max-width: 1400px;
  margin: 80px auto 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 5px;
`;

const ProfileTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileImg = styled.div``;

const NickNameContainer = styled.div``;

const CurrentNickName = styled.div``;

const NickNameChange = styled.button``;

const NickNameInput = styled.input``;

const ButtonWrap = styled.div``;

const Button = styled.button``;

function Profile() {
  const [nickname, setNickname] = useState("");
  const handleChangeNickname = (event) => {
    setNickname(event.target.value);
  };

  useEffect(() => {
    async function getNickName() {
      return await axios.get("http://localhost:80/user/profile/");
    }
    getNickName().then((data) => {
      console.log("data::", data);
    });
  }, []);

  const handleButtonClick = async () => {
    try {
      const response = await axios.patch(
        "http://localhost:80/user/profile/",
        {
          nickname: nickname,
        }
        // {
        //   headers: {
        //     authorization: accessToken,
        //   },
        // }
      );
      console.log("👉 Returned data:", response);
    } catch (e) {
      console.log(`😱 Axios request failed: ${e}`);
    }
  };

  return (
    <Container>
      <ProfileTitle>내 정보 수정</ProfileTitle>
      <ProfileImg>이미지</ProfileImg>
      <NickNameContainer>
        <CurrentNickName>현재 닉네임</CurrentNickName>
        <NickNameChange onClick={handleButtonClick}>닉네임 변경</NickNameChange>
        <NickNameInput
          onChange={handleChangeNickname}
          type="text"
          placeholder="변경할 닉네임"
        ></NickNameInput>
      </NickNameContainer>
      <ButtonWrap>
        <Button>회원 탈퇴</Button>
        <Button>수정 완료</Button>
      </ButtonWrap>
    </Container>
  );
}

export default Profile;
