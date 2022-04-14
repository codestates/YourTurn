import React, { useEffect, useState } from "react";
import "../App.css";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
const FetchedtNickName = styled.div``;

const NickNameChange = styled.button``;

const NickNameInput = styled.input``;

const ButtonWrap = styled.div``;

const Button = styled.button``;

function Profile() {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState("");
  const handleChangeNickname = (event) => {
    setNickname(event.target.value);
  };

  useEffect(() => {
    async function getNickName() {
      return await axios.get("http://localhost:80/user/profile/");
    }
    getNickName().then((data) => {
      // console.log("data::", data);
      //   {
      //     "data": {
      //         "id": 1,
      //         "email": "kimcoding@codestates.com",
      //         "nickname": "Kimcoding"
      //     }
      // }
      const currentNickname = data.data.nickname;
      console.log("currentNickname", currentNickname); // 못 받아옴
    });
  }, []);

  const handleModifyButtonClick = async () => {
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

  const handleCompletion = () => {
    navigate("/");
  };
  const handlePermanentDeletion = () => {
    navigate("/");
  };

  return (
    <Container>
      <ProfileTitle>내 정보 수정</ProfileTitle>
      <NickNameContainer>
        <CurrentNickName>Current Nickname:</CurrentNickName>
        <FetchedtNickName>불러오기</FetchedtNickName>

        <NickNameInput
          onChange={handleChangeNickname}
          type="text"
          placeholder="변경할 닉네임"
        ></NickNameInput>
        <NickNameChange onClick={handleModifyButtonClick}>닉네임 변경</NickNameChange>
      </NickNameContainer>
      <ButtonWrap>
        <Button onClick={handlePermanentDeletion}>회원 탈퇴</Button>
        <Button onClick={handleCompletion}>수정 완료</Button>
      </ButtonWrap>
    </Container>
  );
}

export default Profile;
