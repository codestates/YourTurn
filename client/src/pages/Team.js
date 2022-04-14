import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  max-width: 1400px;
  height: 800px;
  margin: 120px auto 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 5px;
`;
const TeamName = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 30px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
`;
const TeamIntro = styled.div`
  width: 100%;
  height: 130px;
  padding: 10px;
  font-size: 25px;
`;

const ContentsPage = styled.div`
  border: 1px solid pink;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0px auto;
`;
const BoardWrap = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
  border: 1px solid black;
`;
const BoardNum = styled.div`
  border: 1px solid blueviolet;
  width: 20%;
  text-align: center;
  margin: auto;
`;
const BoardTitle = styled.div`
  border: 1px solid red;
  width: 50%;
  text-align: center;
  margin: auto;
`;
const BoardCreatedDate = styled.div`
  border: 1px solid pink;
  width: 20%;
  text-align: center;
  margin: auto;
`;
const BoardButton = styled.button`
  font-size: 17px;
  margin: 10px;
  padding: 5px;
  cursor: pointer;
`;
const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

function Team({ setEntry, setWriteDefault }) {
  const [teamData, setTeamData] = useState([]);

  const { id } = useParams();

  const navigate = useNavigate();

  const changePageToWrite = () => {
    setEntry("teamClick");
    sessionStorage.setItem("entry", "teamClick");
    navigate("/write");
  };

  const changePageToArticle = () => {
    navigate(`/article/${id}`);
  };

  useEffect(() => {
    async function fetchData() {
      let { data } = await axios.get(`http://localhost:80/team/${id}`);
      setTeamData(data.teamData);
      console.log("teamData:", data);

      setWriteDefault(data.teamData[0].team_name);
      sessionStorage.setItem("name", data.teamData[0].team_name);
      sessionStorage.setItem("team_id", data.teamData[0].id);
    }
    fetchData();
  }, []);

  return (
    <Container>
      <TeamName>{teamData[0]?.team_name}</TeamName>
      <TeamIntro>{teamData[0]?.team_description}</TeamIntro>
      <ContentsPage>
        <BoardWrap>
          <BoardNum>번호</BoardNum>
          <BoardTitle>제목</BoardTitle>
          <BoardCreatedDate>날짜</BoardCreatedDate>
        </BoardWrap>
        {teamData[0]?.posts.map((teamPost, i) => {
          return (
            <BoardWrap key={i}>
              <BoardNum>{i + 1}</BoardNum>
              <BoardTitle onClick={changePageToArticle}>{teamPost.title}</BoardTitle>
              <BoardCreatedDate>{teamPost.createdAt}</BoardCreatedDate>
            </BoardWrap>
          );
        })}
      </ContentsPage>
      <ButtonWrap>
        <BoardButton onClick={changePageToWrite}>글쓰기</BoardButton>
      </ButtonWrap>
    </Container>
  );
}

export default Team;
