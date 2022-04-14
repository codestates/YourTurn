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
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  margin: 0px auto;
`;
const BoardWrap = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-around;
  border: 1px solid black;
`;
const BoardNum = styled.div`
  width: 10%;
  height: 30%;
  text-align: center;
  margin: auto;
  font-size: 20px;
`;
const BoardTitle = styled.div`
  width: 50%;
  height:30%;
  text-align: center;
  margin: auto;
  font-size: 20px ;
  font-weight: bold ;
  cursor: pointer;
`;
const BoardCreatedDate = styled.div`
  width: 20%;
  height: 30%;
  text-align: center;
  margin: auto;
  font-size : 18px;
`;
const BoardButton = styled.button`
  font-size: 17px;
  margin: 10px;
  padding: 5px;
  cursor: pointer;
`;
const ButtonWrap = styled.div`

width:100%;
display:flex;
justify-content: flex-end;
`
const TitleWrap = styled.div`
  width: 100%;
  height: 10% ;
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
  border: 1px solid black;
  background-color: whitesmoke;
  font-weight: bold ;
  font-size : 25px;
`;

const TopNum = styled.div`
  width: 10%;
  text-align: center;
  margin: auto;
`;
const TopTitle = styled.div`
  width: 50%;
  text-align: center;
  margin: auto;
`;
const TopDate = styled.div`
  width: 20%;
  text-align: center;
  margin: auto;
`

function Team({ setEntry, setWriteDefault }) {


  const [teamData, setTeamData] = useState([]);

  const { id } = useParams();

  const navigate = useNavigate();

  const formatDate = (date) => {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      hour = d.getHours(),
      minute = d.getMinutes();
    return `${month < 10 ? `0${month}` : month}월 ${day < 10 ? `0${day}` : day}일 ${hour < 10 ? `0${hour}` : hour}:${
      minute < 10 ? `0${minute}` : minute
    }`;
  };

  



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

      <TitleWrap>
              <TopNum>번호</TopNum>
              <TopTitle>제목</TopTitle>
              <TopDate>날짜</TopDate>
            </TitleWrap>
        {teamData[0]?.posts.map((teamPost, i) => {
          return (
            <BoardWrap key={i}>
              <BoardNum>{i + 1}</BoardNum>
              <BoardTitle onClick={changePageToArticle}>{teamPost.title}</BoardTitle>
              <BoardCreatedDate>{formatDate(teamPost.createdAt)}</BoardCreatedDate>
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
