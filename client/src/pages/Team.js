import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";

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
  const postdata = [
    {
      id: 1,
      title: "대통령은 국회에 출석하여 발언하거나 서한으로 의견을 표시할 수 있다.",
      content:
        "국회의 정기회는 법률이 정하는 바에 의하여 매년 1회 집회되며, 국회의 임시회는 대통령 또는 국회재적의원 4분의 1 이상의 요구에 의하여 집회된다.",
      total_likes: 10,
      user_id: 1,
      team_id: 1,
      createdAt: "2022-03-08 00:00:00",
      updatedAt: "2022-03-08 00:00:00",
    },
    {
      id: 2,
      title:
        "국무총리는 국무위원의 해임을 대통령에게 건의할 수 있다. 모든 국민은 주거의 자유를 침해받지 아니한다...",
      content:
        "환경권의 내용과 행사에 관하여는 법률로 정한다. 국회는 법률에 저촉되지 아니하는 범위안에서 의사와 내부규율에 관한 규칙을 제정할 수 있다.",
      total_likes: 20,
      user_id: 2,
      team_id: 2,
      createdAt: "2022-03-09 00:00:00",
      updatedAt: "2022-03-09 00:00:00",
    },
    {
      id: 3,
      title: "공무원의 신분과 정치적 중립성은 법률이 정하는 바에 의하여 보장된다.",
      content:
        "환경권의 내용과 행사에 관하여는 법률로 정한다. 국회는 법률에 저촉되지 아니하는 범위안에서 의사와 내부규율에 관한 규칙을 제정할 수 있다.",
      total_likes: 30,
      user_id: 1,
      team_id: 3,
      createdAt: "2022-03-10 00:00:00",
      updatedAt: "2022-03-10 00:00:00",
    },
    {
      id: 4,
      title:
        "국가는 건전한 소비행위를 계도하고 생산품의 품질향상을 촉구하기 위한 소비자보호운동을 법률이 정하는",
      content:
        "이 헌법시행 당시의 법령과 조약은 이 헌법에 위배되지 아니하는 한 그 효력을 지속한다.",
      total_likes: 40,
      user_id: 2,
      team_id: 4,
      createdAt: "2022-03-11 00:00:00",
      updatedAt: "2022-03-11 00:00:00",
    },
    {
      id: 5,
      title:
        "모든 국민은 법률이 정하는 바에 의하여 선거권을 가진다. 대통령은 국민의 보통·평등·직접·비밀선거에",
      content:
        "지방의회의 조직·권한·의원선거와 지방자치단체의 장의 선임방법 기타 지방자치단체의 조직과 운영에 관한 사항은 법률로 정한다.",
      total_likes: 50,
      user_id: 1,
      team_id: 5,
      createdAt: "2022-03-12 00:00:00",
      updatedAt: "2022-03-12 00:00:00",
    },
    {
      id: 6,
      title: "국가는 법률이 정하는 바에 의하여 재외국민을 보호할 의무를 진다.",
      content:
        "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 내부규율에 관한 규칙을 제정할 수 있다.",
      total_likes: 60,
      user_id: 2,
      team_id: 1,
      createdAt: "2022-03-13 00:00:00",
      updatedAt: "2022-03-13 00:00:00",
    },
    {
      id: 7,
      title: "대통령은 국무총리·국무위원·행정각부의 장 기타 법률이 정하는 공사의 직을 겸할 수 없다",
      content:
        "학교교육 및 평생교육을 포함한 교육제도와 그 운영, 교육재정 및 교원의 지위에 관한 기본적인 사항은 법률로 정한다.",
      total_likes: 70,
      user_id: 1,
      team_id: 2,
      createdAt: "2022-03-14 00:00:00",
      updatedAt: "2022-03-14 00:00:00",
    },
    {
      id: 8,
      title: "대통령은 법률이 정하는 바에 의하여 사면·감형 또는 복권을 명할 수 있다.",
      content:
        "모든 국민은 법 앞에 평등하다. 누구든지 성별·종교 또는 사회적 신분에 의하여 정치적·경제적·사회적·문화적 생활의 모든 영역에 있어서 차별을 받지 아니한다.",
      total_likes: 80,
      user_id: 2,
      team_id: 3,
      createdAt: "2022-03-15 00:00:00",
      updatedAt: "2022-03-15 00:00:00",
    },
    {
      id: 9,
      title: "대통령은 법률안의 일부에 대하여 또는 법률안을 수정하여 재의를 요구할 수 없다",
      content: "저작자·발명가·과학기술자와 예술가의 권리는 법률로써 보호한다.",
      total_likes: 90,
      user_id: 1,
      team_id: 4,
      createdAt: "2022-03-16 00:00:00",
      updatedAt: "2022-03-16 00:00:00",
    },
    {
      id: 10,
      title:
        "국가유공자·상이군경 및 전몰군경의 유가족은 법률이 정하는 바에 의하여 우선적으로 근로의 기회를 부여",
      content: "공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에 의한다.",
      total_likes: 100,
      user_id: 2,
      team_id: 5,
      createdAt: "2022-03-17 00:00:00",
      updatedAt: "2022-03-17 00:00:00",
    },
  ];

  const teamData = [
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

  const { id } = useParams(); //App.js

  const TeamPost = postdata.filter((el) => {
    return el.team_id === Number(id);
  });

  const filterdata = teamData.filter((el) => {
    return el.id === Number(id);
  });
  const { name, desc } = filterdata[0];

  console.log(filterdata);

  const navigate = useNavigate();

  const changePageToWrite = () => {
    setEntry("teamClick");
    sessionStorage.setItem("entry", "teamClick");
    navigate("/write");
  };

  useEffect(() => {
    setWriteDefault(name);
    sessionStorage.setItem("name", name);
  }, []);

  return (
    <Container>
      <TeamName>{name}</TeamName>
      <TeamIntro>{desc}</TeamIntro>
      <ContentsPage>
        {TeamPost.map((teamPost, i) => {
          return (
            <BoardWrap key={i}>
              <BoardNum>{i + 1}</BoardNum>
              <BoardTitle>{teamPost.title}</BoardTitle>
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
