import React, { useEffect, useState } from "react";
import "../App.css";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  font-size: 30px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
`;

// const ProfileImg = styled.div``;

const NickNameContainer = styled.div``;

const NickNameChange = styled.button`
  font-size: 20px;
`;

const NickNameInput = styled.input`
  margin-right: 20px;
  font-size: 20px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-start; ;
`;

const Button = styled.button`
  font-size: 17px;
  margin: 10px;
  padding: 5px;
  cursor: pointer;
`;

function Profile({ setShowMyModal }) {
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
    sessionStorage.removeItem("isLogin");
    navigate("/");
    setShowMyModal(false);
  };

  return (
    <Container>
      <ProfileTitle>내 정보 수정</ProfileTitle>
      {/* <ProfileImg>이미지</ProfileImg> */}
      <NickNameContainer>
        <NickNameInput
          className="ml-2"
          onChange={handleChangeNickname}
          type="text"
          placeholder="변경할 닉네임"
        ></NickNameInput>

        <NickNameChange
          className="px-3 py-2 text-sm text-blue-100 bg-sky-500 rounded hover:bg-sky-400"
          onClick={handleModifyButtonClick}
        >
          닉네임 변경
        </NickNameChange>
      </NickNameContainer>
      <ButtonWrap>
        <Button
          className="cursor-pointer px-3 py-2 text-sm text-blue-100 bg-sky-500 rounded hover:bg-sky-400"
          onClick={handlePermanentDeletion}
        >
          회원 탈퇴
        </Button>
        <Button
          className="cursor-pointer px-3 py-2 text-sm text-blue-100 bg-sky-500 rounded hover:bg-sky-400"
          onClick={handleCompletion}
        >
          수정 완료
        </Button>
      </ButtonWrap>
    </Container>
  );
}

export default Profile;
