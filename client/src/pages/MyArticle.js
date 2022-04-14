import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

const MyPost = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px;
  margin-bottom: 0px;
  font-weight: bold;
  font-size: 30px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
`;

const BoardWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
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
const TitleWrap = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: whitesmoke;
  font-weight: bold;
  font-size: 25px;
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
`;

function MyArticle() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  const changePageToArticle = (article) => {
    navigate(`/article/${article.id}`);
  };
  console.log("articles data:: ", articles);

  useEffect(() => {
    async function fetchArticles() {
      let { data } = await axios.get(`http://localhost:80/user/mypost`);

      setArticles(data.data);
    }
    fetchArticles();
  }, []);

  return (
    <Container>
      <MyPost>내 작성글</MyPost>
      <TitleWrap>
        <TopNum>번호</TopNum>
        <TopTitle>제목</TopTitle>
        <TopDate>날짜</TopDate>
      </TitleWrap>
      {articles.map((article, i) => {
        return (
          <BoardWrap key={i}>
            <BoardNum>{i + 1}</BoardNum>
            <BoardTitle
              onClick={() => {
                changePageToArticle(article);
              }}
            >
              {article.title}
            </BoardTitle>
            <BoardCreatedDate>{article.createdAt}</BoardCreatedDate>
          </BoardWrap>
        );
      })}
    </Container>
  );
}

export default MyArticle;
