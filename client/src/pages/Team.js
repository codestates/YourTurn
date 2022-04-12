import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
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
const TeamName = styled.div`
  width: 100%;
  border: 1px solid red;
  height: 100px;
  padding: 10px;
  margin-bottom: 10px;
`;
const TeamIntro = styled.div`
  width: 100%;
  border: 1px solid green;
  height: 150px;
  padding: 10px;
`;

const ContentsPage = styled.div`
  border: 1px solid pink;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 15px;
`;
const BoardWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 15px;
  border: 1px solid black;
`;
const BoardNum = styled.div`
  border: 1px solid blueviolet;
  width: 20%;
  text-align: center;
`;
const BoardTitle = styled.div`
  border: 1px solid red;
  width: 50%;
  text-align: center;
`;
const BoardCreatedDate = styled.div`
  border: 1px solid pink;
  width: 20%;
  text-align: center;
`;
const BoardButton = styled.button``;

function Team({ setEntry, setWriteDefault }) {

  const [postData, setPostData] = useState([]);

  const { id } = useParams(); //App.js

  const navigate = useNavigate();

  const changePageToWrite = () => {
    setEntry("teamClick");
    sessionStorage.setItem("entry", "teamClick");
    navigate("/write");
  };
  
  const changePageToArticle = () => {
    navigate(`/article/${id}`)
  }

  useEffect( async () => {

    let { data } = await axios.get(`http://localhost:4000/team/${id}`)
    setPostData(data.teamData);

    setWriteDefault(name);
    sessionStorage.setItem("name", name);
  }, []);

  return (
    <Container>
      <TeamName>{postData[0]?.team_name}</TeamName>
      <TeamIntro>{postData[0]?.team_description}</TeamIntro>
      <ContentsPage>
        {postData[0]?.posts.map((teamPost, i) => {
          return (
            <BoardWrap key={i}>
              <BoardNum>{i + 1}</BoardNum>
              <BoardTitle onClick={changePageToArticle}>{teamPost.title}</BoardTitle>
              <BoardCreatedDate>{teamPost.createdAt}</BoardCreatedDate>
            </BoardWrap>
          );
        })}

        <BoardButton onClick={changePageToWrite}>글쓰기</BoardButton>
      </ContentsPage>
    </Container>
  );
}

export default Team;
