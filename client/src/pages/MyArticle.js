import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

// MyArticle Page
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

function MyArticle() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      let { data } = await axios.get(`http://localhost:4000/user/mypost`);

      console.log("myarticle data:: ", data);
      setArticles(data.data);
    }
    fetchArticles();
  }, []);

  return (
    <Container>
      <h1>MyArticle</h1>
      {articles.map((article, i) => {
        return (
          <BoardWrap key={i}>
            <BoardNum>{i + 1}</BoardNum>
            <BoardTitle>{article.title}</BoardTitle>
            <BoardCreatedDate>{article.createdAt}</BoardCreatedDate>
          </BoardWrap>
        );
      })}
    </Container>
  );
}

export default MyArticle;
