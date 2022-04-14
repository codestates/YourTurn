import React from "react";
import styled from "styled-components";
import MainImg from "../assets/MainImg.jpeg"
import JSLogo from "../assets/JS.png"
import AWSLogo from "../assets/AWS.png"
import MySQL from "../assets/MySQL.png"
import NodeJs from "../assets/NodeJs.png"
import ReactLogo from "../assets/ReactLogo.png"
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  margin: 48px auto 0 auto;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 5px ;
  position:relative;
`
const Intro = styled.div`
  display:flex;
  justify-content: space-around ;
`
const TextSwitch1 = styled.div`
`
const TextSwitch2 = styled.div`
margin-top : 10px;
`
const TextSwitch3 = styled.div`
margin-top: 10px;
`
const TextSwitch4 = styled.div`
margin-top: 10px;
`
const IntroText = styled.pre`
  font-size: 30px;
  top: 10%;
  margin: 10px auto 10px auto;
  position: absolute;
  left: 3%;
`
const IntroImgWrap = styled.div`
`
const IntroImg = styled.img`
  width:100%;
`
const Interest = styled.div`
  display:flex;
  justify-content: space-around ;
  margin: 20px;
`
const TeamWrap = styled.div`
  display:flex;
  justify-content: space-around ;
  background-color: rgb(248 249 250); ;
`
const TeamInfo = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around ;
  box-shadow: 0 5px 25px rgb(0 0 0 / 15%);
  background-color: #fff ;
  width:240px;
  height:240px;
  border-radius: 20px ;
  margin:40px;
  padding: 32px;
  cursor: pointer;
  word-break: break-all;
`
const TeamInfoTitle = styled.div`
 font-size : 19px;
 font-weight: bold ;
`
const TeamInfoContent = styled.div`
  word-break: normal;
`

const InterestWrap = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction:column ;
  align-items: center ;
  margin: 20px 0px;
`
const InterestName = styled.div`
  font-size:30px;
  font-weight:bold;
  margin:5px;`


const InterestImg = styled.img`
  width: 200px;
  height: 200px;
`
const YourTurn = styled.span`
  font-weight: bold;
  font-style: italic ;
  font-size: 30px ;
  `


function Home({setShowModal}) {

  let isLogin = sessionStorage.getItem("isLogin");
  // console.log("isLogin? ->>", isLogin)
  // console.log(typeof isLogin)
  console.log("test")
  const ImageList = [ReactLogo, JSLogo, NodeJs, AWSLogo, MySQL]

  const interestList = [
    {
      id: 1,
      name: "React"
    },
    {
      id: 2,
      name: "Javascript"
    },
    {
      id: 3,
      name: "node.js"
    },
    {
      id: 4,
      name: "AWS"
    },
    {
      id: 5,
      name: "mysql"
    },
  ]

  for(let i = 0; i < interestList.length; i++)
  {interestList[i].src=ImageList[i]}

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
  ]

    

  const navigate = useNavigate();
  
  const changePageToTeam = (el) => {
    if(isLogin === "true") {
      navigate(`/team/${el.id}`)
      } else{
        setShowModal(true);
      }
  }

  return (
    <Container>
      <Intro>
        <IntroText>
          <TextSwitch1>면접 기출 질문은 많고 모든 답변을 다 준비하기는 어려운가요?</TextSwitch1>
          <TextSwitch2>토익스피킹 답변 아이디어가 고갈되었나요?</TextSwitch2>
          <TextSwitch3><YourTurn>YourTurn </YourTurn>의 집단 지성을 이용하세요!</TextSwitch3>
          <TextSwitch4>돌아가며 기여하고 다같이 잘 되는 그룹, <YourTurn>YourTurn </YourTurn> 입니다.</TextSwitch4>
        </IntroText>
        <IntroImgWrap>
          <IntroImg src={MainImg}></IntroImg>
        </IntroImgWrap>
      </Intro>
      <Interest>{interestList.map((interest, i)=> {
        return (
          <InterestWrap key={i}>
            <InterestName>
            {interest.name}
            </InterestName>
            <InterestImg src={interest.src}/> 
          </InterestWrap>
        )
      })}</Interest>

      <TeamWrap>
        {teamData.map((el, i)=> {
          return <TeamInfo onClick={()=>{changePageToTeam(el)}}  key={i}>
           <TeamInfoTitle>{el.name}</TeamInfoTitle>
           <TeamInfoContent>{el.desc}</TeamInfoContent> 
          </TeamInfo>
         
        })}
      </TeamWrap>
    </Container>
  );
}

export default Home;
