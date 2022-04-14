import React, { useEffect, useState } from "react";
import "../App.css";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  margin: 120px auto 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 5px;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.input`
  border: none;
  text-decoration: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  &:focus {
    outline: none;
  }
  font-size: 25px;
`;
const Content = styled.textarea`
  height: 500px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  &:focus {
    outline: none;
  }
`;

const TeamWrap = styled.div`
`;
const Team = styled.select`
  font-size: 20px;
  width: 100%;
`;
const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end; ;
`;
const Button = styled.button`
  font-size: 17px;
  margin: 10px;
  padding: 5px;
  cursor: pointer;
`;

const TeamNameDefault = styled.div`
  font-size: 25px;
`;

const Write = ({ entry, writeDefault, setWriteDefault }) => {
  const navigate = useNavigate();

  let postTeamName;
  let clickEntry = sessionStorage.getItem("entry")
  console.log("접근하는곳", clickEntry)

 

  // console.log("entry", entry);
  const TeamData = [
    {
      id: 0,
      name: "관심사를 선택해주세요",
      desc: "리액트 관련 프론트엔드 개발자를 위한 면접 질문",
      interest_id: 1,
      createdAt: "2022-04-08 00:00:00",
      updatedAt: "2022-04-08 01:00:00",
    },

    {
      id: 1,
      name: "리액트 면접 준비",
      desc: "리액트 관련 프론트엔드 개발자를 위한 면접 질문",
      interest_id: 1,
      createdAt: "2022-04-08 00:00:00",
      updatedAt: "2022-04-08 01:00:00",
    },
    {
      id: 2,
      name: "자바스크립트 면접 준비",
      desc: "자바스크립트를 더 자세히 알고 싶다!",
      interest_id: 1,
      createdAt: "2022-04-08 00:00:00",
      updatedAt: "2022-04-08 01:00:00",
    },
    {
      id: 3,
      name: "Node js 면접 준비",
      desc: "백엔드 node js 면접 질문",
      interest_id: 3,
      createdAt: "2022-04-08 00:00:00",
      updatedAt: "2022-04-08 01:00:00",
    },
    {
      id: 4,
      name: "AWS 관련 질문 준비",
      desc: "AWS 배포가 궁금하시다면 들어오세요",
      interest_id: 4,
      createdAt: "2022-04-08 00:00:00",
      updatedAt: "2022-04-08 01:00:00",
    },
    {
      id: 5,
      name: "mysql 면접 질문",
      desc: "mysql 자세하게 알아보기",
      interest_id: 5,
      createdAt: "2022-04-08 00:00:00",
      updatedAt: "2022-04-08 01:00:00",
    },
  ];
  const [title, setTitle] = useState("");
  const [choice, setChoice] = useState("");

  const options = TeamData.map((TeamData, i) => {
    return (
      <option key={i} value={TeamData.name}>
        {TeamData.name}
      </option>
    );
  });

  if(clickEntry === 'teamClick'){
    postTeamName = sessionStorage.getItem('name')
  }else{
    postTeamName = choice
  }

  console.log("postTeam네임", postTeamName);

  const selectTeam = (event) => {
    setChoice(event.target.value);
  };
  //본문을 위한 로직
  const [text, setText] = useState("");

  useEffect(() => {
    if (writeDefault === "") {
      setWriteDefault(sessionStorage.getItem("name"));
    }
  }, []);

  const handleSubmitButton = async () => {
    console.log("event:::");

    let data = await axios
      .post(
        "http://localhost:80/team/write-article",
        { title: title, content: text, team_name: postTeamName },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      if(data.data){
        navigate(-1);
    }

  };

  const handleCancelButton = () => {
    console.log("evebt");
    navigate(-1);
  }

  return (
    <Container>
      <Head>
        <Title
          type="text"
          value={title}
          placeholder="제목을 작성하세요"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></Title>
        {entry === "navClick" || sessionStorage.getItem("entry") === "navClick" ? (
          <TeamWrap>
            <Team onChange={selectTeam}>{options}</Team>
          </TeamWrap>
        ) : (
          <TeamNameDefault>{writeDefault}</TeamNameDefault>
        )}
      </Head>
      <Content placeholder="내용을 작성하세요" onChange={(e) => setText(e.target.value)} />
      <ButtonWrap>
        <Button onClick={handleCancelButton}>취소</Button>
        <Button onClick={handleSubmitButton}>등록</Button>
      </ButtonWrap>
    </Container>
  );
};

export default Write;
