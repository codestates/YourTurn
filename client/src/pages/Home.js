import React from "react";
import styled from "styled-components";
import MainImg from "../assets/MainImg.jpeg";
import JSLogo from "../assets/JS.png";
import AWSLogo from "../assets/AWS.png";
import MySQL from "../assets/MySQL.png";
import NodeJs from "../assets/NodeJs.png";
import ReactLogo from "../assets/ReactLogo.png";
import { useNavigate } from "react-router-dom";

// const Container = styled.div`
//   margin: 48px auto 0 auto;
//   border: 1px solid rgba(0, 0, 0, 0.1);
//   border-radius: 5px;
//   position: relative;
// `;
const Intro = styled.div`
  display: flex;
  justify-content: space-around;
  /* border: 1px red solid; */
`;
const TextSwitch1 = styled.div``;
const TextSwitch2 = styled.div``;
// const TextSwitch2 = styled.div`
//   margin-top: 10px;
// `;
// const TextSwitch3 = styled.div`
//   margin-top: 10px;
// `;
// const TextSwitch4 = styled.div`
//   margin-top: 10px;
// `;
const IntroText = styled.pre`
  font-size: 30px;
  top: 10%;
  margin: 10px auto 10px auto;
  position: absolute;
  left: 3%;
`;
const IntroImgWrap = styled.div``;
const IntroImg = styled.img`
  width: 100%;
`;
const Interest = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px;
`;
const TeamWrap = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: rgb(248 249 250); ;
`;
const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 5px 25px rgb(0 0 0 / 5%);
  background-color: #fff;
  width: 240px;
  height: 240px;
  border-radius: 20px;
  margin: 40px;
  padding: 32px;
  cursor: pointer;
  word-break: break-all;
`;
const TeamInfoTitle = styled.div`
  font-size: 19px;
  font-weight: bold;
`;
const TeamInfoContent = styled.div`
  word-break: normal;
`;

const InterestWrap = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  margin: 20px 0px;
`;
const InterestName = styled.div`
  /* font-size: 30px; */
  font-weight: bold;
  margin-left: 10px;
  margin-right: 10px;
  padding: 3px 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const InterestImg = styled.img`
  width: 200px;
  height: 200px;
`;
// const YourTurn = styled.span`
//   font-weight: bold;
//   font-style: italic;
//   font-size: 20px;
// `;

function Home({ setShowModal }) {
  let isLogin = sessionStorage.getItem("isLogin");
  // console.log("isLogin? ->>", isLogin)
  // console.log(typeof isLogin)
  console.log("test");
  const ImageList = [ReactLogo, JSLogo, NodeJs, AWSLogo, MySQL];

  const interestList = [
    {
      id: 1,
      name: "React",
    },
    {
      id: 2,
      name: "Javascript",
    },
    {
      id: 3,
      name: "Node.js",
    },
    {
      id: 4,
      name: "AWS",
    },
    {
      id: 5,
      name: "MySQL",
    },
  ];

  for (let i = 0; i < interestList.length; i++) {
    interestList[i].src = ImageList[i];
  }

  const teamData = [
    {
      id: 1,
      name: "????????? ?????? ??????",
      desc: "????????? ?????? ??????????????? ???????????? ?????? ?????? ??????",
      interest_id: 1,
      createdAt: "2022-04-08 00:00:00",
      updatedAt: "2022-04-08 01:00:00",
    },
    {
      id: 2,
      name: "?????????????????? ?????? ??????",
      desc: "????????????????????? ??? ????????? ?????? ??????!",
      interest_id: 1,
      createdAt: "2022-04-08 00:00:00",
      updatedAt: "2022-04-08 01:00:00",
    },
    {
      id: 3,
      name: "Node js ?????? ??????",
      desc: "????????? node js ?????? ??????",
      interest_id: 3,
      createdAt: "2022-04-08 00:00:00",
      updatedAt: "2022-04-08 01:00:00",
    },
    {
      id: 4,
      name: "AWS ?????? ?????? ??????",
      desc: "AWS ????????? ?????????????????? ???????????????",
      interest_id: 4,
      createdAt: "2022-04-08 00:00:00",
      updatedAt: "2022-04-08 01:00:00",
    },
    {
      id: 5,
      name: "mysql ?????? ??????",
      desc: "mysql ???????????? ????????????",
      interest_id: 5,
      createdAt: "2022-04-08 00:00:00",
      updatedAt: "2022-04-08 01:00:00",
    },
  ];

  const navigate = useNavigate();

  const changePageToTeam = (el) => {
    if (isLogin === "true") {
      navigate(`/team/${el.id}`);
    } else {
      setShowModal(true);
    }
  };

  return (
    <div className="font-sun text-bold">
      <Intro>
        <IntroText>
          <TextSwitch1 className="text-2xl font-bold  outline-2">
            ?????? ????????? ??????????????? <br />
            ?????? ????????? ??? ??????????????? ????????????????
            <br />
            <span className="italic font-bold">YourTurn </span>??? ?????? ????????? ???????????????!
          </TextSwitch1>
          <TextSwitch2 className="mt-20 hidden ease-in-out md:block">
            ???????????? ???????????? ????????? ??? ?????? ??????, <br />
            <span className="italic font-bold">YourTurn </span> ?????????.
          </TextSwitch2>
        </IntroText>
        <IntroImgWrap>
          <IntroImg className="" src={MainImg}></IntroImg>
        </IntroImgWrap>
      </Intro>
      <Interest>
        {interestList.map((interest, i) => {
          return (
            <InterestWrap key={i}>
              <InterestName className="text-xl hidden ease-in-out sm:block">
                {interest.name}
              </InterestName>
              <InterestImg className="object-scale-down" src={interest.src} />
            </InterestWrap>
          );
        })}
      </Interest>

      <TeamWrap className="sm:text-lg">
        {teamData.map((el, i) => {
          return (
            <TeamInfo
              onClick={() => {
                changePageToTeam(el);
              }}
              key={i}
            >
              <TeamInfoTitle className="text-lg font-bold">{el.name}</TeamInfoTitle>
              <TeamInfoContent className="hidden lg:block">{el.desc}</TeamInfoContent>
            </TeamInfo>
          );
        })}
      </TeamWrap>
    </div>
  );
}

export default Home;
